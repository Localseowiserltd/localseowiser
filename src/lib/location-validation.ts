import {
  LOCATION_DEV_PLACEHOLDER,
  type LocationContentBlock,
  type LocationFaq,
  type LocationPage,
  type LocationSection,
  type LocationValidationIssue,
  type LocationValidationResult,
} from '@/types/location'

const REQUIRED_STRING_FIELDS: (keyof LocationPage)[] = [
  'metaTitle',
  'metaDescription',
  'h1',
]

const isBlank = (value: unknown): boolean =>
  typeof value !== 'string' || value.trim().length === 0

const containsDevPlaceholder = (value: string): boolean =>
  value.includes(LOCATION_DEV_PLACEHOLDER)

const pushBlockLeaves = (
  leaves: { field: string; value: string }[],
  prefix: string,
  block: LocationContentBlock,
) => {
  leaves.push({ field: `${prefix}.title`, value: block.title })
  leaves.push({ field: `${prefix}.body`, value: block.body })
  block.paragraphs?.forEach((paragraph, pIndex) => {
    leaves.push({ field: `${prefix}.paragraphs[${pIndex}]`, value: paragraph })
  })
  block.items?.forEach((item, itemIndex) => {
    leaves.push({ field: `${prefix}.items[${itemIndex}]`, value: item })
  })
  if (block.image) {
    leaves.push({ field: `${prefix}.image.src`, value: block.image.src })
    leaves.push({ field: `${prefix}.image.alt`, value: block.image.alt })
  }
}

const collectStringLeaves = (page: LocationPage): { field: string; value: string }[] => {
  const leaves: { field: string; value: string }[] = [
    { field: 'metaTitle', value: page.metaTitle },
    { field: 'metaDescription', value: page.metaDescription },
    { field: 'h1', value: page.h1 },
    { field: 'intro', value: page.intro },
    { field: 'heroImage.src', value: page.heroImage.src },
    { field: 'heroImage.alt', value: page.heroImage.alt },
  ]

  page.heroParagraphs.forEach((paragraph, index) => {
    leaves.push({ field: `heroParagraphs[${index}]`, value: paragraph })
  })

  pushBlockLeaves(leaves, 'introduction', page.introduction)
  pushBlockLeaves(leaves, 'services', page.services)
  pushBlockLeaves(leaves, 'industries', page.industries)
  pushBlockLeaves(leaves, 'process', page.process)

  page.sections.forEach((section: LocationSection, index) => {
    leaves.push({ field: `sections[${index}].title`, value: section.title })
    leaves.push({ field: `sections[${index}].body`, value: section.body })
    section.paragraphs?.forEach((paragraph, pIndex) => {
      leaves.push({ field: `sections[${index}].paragraphs[${pIndex}]`, value: paragraph })
    })
    section.items?.forEach((item, itemIndex) => {
      leaves.push({ field: `sections[${index}].items[${itemIndex}]`, value: item })
    })
    if (section.image) {
      leaves.push({ field: `sections[${index}].image.src`, value: section.image.src })
      leaves.push({ field: `sections[${index}].image.alt`, value: section.image.alt })
    }
  })

  page.faqs.forEach((faq: LocationFaq, index) => {
    leaves.push({ field: `faqs[${index}].question`, value: faq.question })
    leaves.push({ field: `faqs[${index}].answer`, value: faq.answer })
  })

  page.resourceLinks.forEach((link, index) => {
    leaves.push({ field: `resourceLinks[${index}].label`, value: link.label })
    leaves.push({ field: `resourceLinks[${index}].href`, value: link.href })
  })

  leaves.push({ field: 'cta.title', value: page.cta.title })
  leaves.push({ field: 'cta.text', value: page.cta.text })
  page.cta.paragraphs?.forEach((paragraph, index) => {
    leaves.push({ field: `cta.paragraphs[${index}]`, value: paragraph })
  })
  if (page.cta.primaryLabel) leaves.push({ field: 'cta.primaryLabel', value: page.cta.primaryLabel })
  if (page.cta.secondaryLabel) {
    leaves.push({ field: 'cta.secondaryLabel', value: page.cta.secondaryLabel })
  }
  if (page.cta.image) {
    leaves.push({ field: 'cta.image.src', value: page.cta.image.src })
    leaves.push({ field: 'cta.image.alt', value: page.cta.image.alt })
  }

  leaves.push({ field: 'schema.webPageName', value: page.schema.webPageName })
  leaves.push({ field: 'schema.webPageDescription', value: page.schema.webPageDescription })
  leaves.push({ field: 'schema.placeName', value: page.schema.placeName })
  leaves.push({ field: 'schema.breadcrumbLabel', value: page.schema.breadcrumbLabel })
  leaves.push({ field: 'schema.businessName', value: page.schema.businessName })
  leaves.push({ field: 'schema.businessDescription', value: page.schema.businessDescription })
  leaves.push({ field: 'schema.businessType', value: page.schema.businessType })

  return leaves
}

const validateBlockIfPartial = (
  issues: LocationValidationIssue[],
  prefix: string,
  block: LocationContentBlock,
) => {
  const paragraphs = block.paragraphs?.filter((paragraph) => !isBlank(paragraph)) ?? []
  const hasAny =
    !isBlank(block.title) ||
    !isBlank(block.body) ||
    paragraphs.length > 0 ||
    (block.items?.some((item) => !isBlank(item)) ?? false)
  if (!hasAny) return
  const hasBody = !isBlank(block.body) || paragraphs.length > 0 || (block.items?.length ?? 0) > 0
  if (isBlank(block.title) || !hasBody) {
    issues.push({
      field: prefix,
      message: `${prefix} title and body/paragraphs/items must be complete when the block has content`,
    })
  }
}

/**
 * Validates a location page for publish eligibility.
 * Does not invent content — only checks that required owner-supplied fields are present
 * and that development placeholders are absent.
 */
export const validateLocationPage = (page: LocationPage): LocationValidationResult => {
  const issues: LocationValidationIssue[] = []

  if (!page.slug?.trim()) {
    issues.push({ field: 'slug', message: 'slug is required' })
  }
  if (!page.name?.trim()) {
    issues.push({ field: 'name', message: 'name is required' })
  }

  for (const field of REQUIRED_STRING_FIELDS) {
    const value = page[field]
    if (typeof value !== 'string' || isBlank(value)) {
      issues.push({
        field,
        message: `${field} must be filled with approved owner-supplied content before publish`,
      })
    }
  }

  // Intro or introduction body / hero paragraphs must provide page lead copy when publishing
  if (
    isBlank(page.intro) &&
    isBlank(page.introduction.body) &&
    !(page.heroParagraphs.some((paragraph) => !isBlank(paragraph)))
  ) {
    issues.push({
      field: 'intro',
      message: 'intro, heroParagraphs, or introduction.body must be filled before publish',
    })
  }

  for (const { field, value } of collectStringLeaves(page)) {
    if (containsDevPlaceholder(value)) {
      issues.push({
        field,
        message: `contains development placeholder ${LOCATION_DEV_PLACEHOLDER} — cannot publish`,
      })
    }
  }

  if (!isBlank(page.heroImage.src) && isBlank(page.heroImage.alt)) {
    issues.push({
      field: 'heroImage.alt',
      message: 'heroImage.alt is required when heroImage.src is set',
    })
  }

  validateBlockIfPartial(issues, 'introduction', page.introduction)
  validateBlockIfPartial(issues, 'services', page.services)
  validateBlockIfPartial(issues, 'industries', page.industries)
  validateBlockIfPartial(issues, 'process', page.process)

  page.sections.forEach((section, index) => {
    const paragraphs = section.paragraphs?.filter((paragraph) => !isBlank(paragraph)) ?? []
    const hasAny =
      !isBlank(section.title) ||
      !isBlank(section.body) ||
      paragraphs.length > 0 ||
      (section.items?.length ?? 0) > 0
    if (!hasAny) return
    const hasBody = !isBlank(section.body) || paragraphs.length > 0
    if (isBlank(section.title) || !hasBody) {
      issues.push({
        field: `sections[${index}]`,
        message: 'section title and body/paragraphs must both be complete when a section is present',
      })
    }
  })

  page.faqs.forEach((faq, index) => {
    const hasAny = !isBlank(faq.question) || !isBlank(faq.answer)
    if (!hasAny) return
    if (isBlank(faq.question) || isBlank(faq.answer)) {
      issues.push({
        field: `faqs[${index}]`,
        message: 'FAQ question and answer must both be complete when a FAQ is present',
      })
    }
  })

  if (page.status !== 'approved') {
    issues.push({
      field: 'status',
      message: 'status must be "approved" before publish',
    })
  }

  if (page.contentApproved !== true) {
    issues.push({
      field: 'contentApproved',
      message: 'contentApproved must be true (owner sign-off) before publish',
    })
  }

  const publishable = issues.length === 0

  return {
    ok: publishable,
    issues,
    publishable,
  }
}

export const isLocationPublishable = (page: LocationPage): boolean =>
  validateLocationPage(page).publishable

/**
 * Throws when a page is marked approved/contentApproved but fails validation.
 * Call from build/validate scripts to prevent accidental publish of empty pages.
 */
export const assertNoInvalidApprovedLocations = (pages: LocationPage[]): void => {
  const invalid = pages.filter((page) => {
    if (page.status !== 'approved' && page.contentApproved !== true) return false
    return !validateLocationPage(page).publishable
  })

  if (invalid.length === 0) return

  const details = invalid
    .map((page) => {
      const result = validateLocationPage(page)
      const messages = result.issues.map((issue) => `  - ${issue.field}: ${issue.message}`).join('\n')
      return `${page.path ?? page.slug}\n${messages}`
    })
    .join('\n\n')

  throw new Error(
    `Location page(s) marked approved/contentApproved failed publish validation:\n\n${details}\n\n` +
      'Fix content or set status back to "draft" and contentApproved to false.',
  )
}
