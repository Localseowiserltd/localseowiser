import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import { buildHubPageMetadata, buildLegalPageSchemas } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import { Col, Container, Row } from 'react-bootstrap'

const title = 'Terms & Conditions | Local SEO Wiser'
const description =
  'Read the Terms & Conditions for using the Local SEO Wiser website and services, including payment terms, responsibilities, and service policies.'

export const metadata: Metadata = buildHubPageMetadata({
  title,
  description,
  path: '/terms-and-conditions',
  imageAlt: title,
})

const TermsPage = () => {
  const schemas = buildLegalPageSchemas({
    name: 'Terms & Conditions',
    path: '/terms-and-conditions',
    description,
  })

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`terms-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader badge="Legal" title="Terms & Conditions" description={description} />
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="vstack gap-3">
              <p>Last Updated: July 20, 2026</p>
              <p>
                Welcome to Local SEO Wiser. By accessing our website or using our services, you agree to these Terms
                &amp; Conditions. If you do not agree with these terms, please do not use our website or services.
              </p>

              <h2>Our Services</h2>
              <p>
                Local SEO Wiser provides digital marketing services, including Local SEO, Google Business Profile
                optimization, Technical SEO, PPC management, website development, and related marketing services.
              </p>
              <p>
                The scope of work for each project will be outlined in a proposal, quotation, or written agreement before
                work begins.
              </p>

              <h2>Client Responsibilities</h2>
              <p>To help us deliver our services effectively, you agree to:</p>
              <ul>
                <li>Provide accurate business information.</li>
                <li>
                  Supply required access to your website, Google Business Profile, or other platforms when necessary.
                </li>
                <li>Respond to requests for information or feedback in a timely manner.</li>
                <li>Ensure you have the rights to any content, images, or materials you provide.</li>
              </ul>

              <h2>Payments</h2>
              <p>Payment terms will be provided in your quotation or invoice.</p>
              <p>
                Projects may require full or partial payment before work begins. Ongoing services are billed according to
                the agreed schedule.
              </p>
              <p>
                Late or unpaid invoices may result in delays or suspension of services until payment is received.
              </p>

              <h2>No Guarantee of Rankings</h2>
              <p>
                Search engine rankings are influenced by many factors outside our control. While we follow industry best
                practices and work to improve your online visibility, we do not guarantee specific rankings, traffic
                levels, leads, or revenue.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, all content, strategies, reports, and deliverables created by Local
                SEO Wiser remain our property until all outstanding payments have been received.
              </p>
              <p>Any content or materials provided by the client remain the property of the client.</p>

              <h2>Website Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use this website for unlawful purposes.</li>
                <li>Attempt unauthorized access to our systems.</li>
                <li>Copy, reproduce, or distribute website content without permission.</li>
                <li>Interfere with the operation or security of the website.</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                Local SEO Wiser shall not be liable for any indirect, incidental, or consequential losses arising from
                the use of our website or services. Our liability will be limited to the amount paid by the client for
                the applicable service, where permitted by law.
              </p>

              <h2>Changes to These Terms</h2>
              <p>
                We may update these Terms &amp; Conditions from time to time. Any changes will be posted on this page
                with an updated revision date.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions regarding these Terms &amp; Conditions, please contact us.</p>
              <p>
                Local SEO Wiser
                <br />
                Pittsburgh, Pennsylvania, USA
              </p>
              <p>
                Email:{' '}
                <a href="mailto:info@localseowiser.com">info@localseowiser.com</a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </SiteShell>
  )
}

export default TermsPage
