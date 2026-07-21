import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import { buildHubPageMetadata, buildLegalPageSchemas } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import { Col, Container, Row } from 'react-bootstrap'

const title = 'Refund Policy | Local SEO Wiser Billing and Cancels'
const description =
  'Read the Local SEO Wiser Refund Policy to understand refund eligibility, cancellations, completed work, and how refund requests are reviewed.'

export const metadata: Metadata = buildHubPageMetadata({
  title,
  description,
  path: '/refund-policy',
  imageAlt: title,
})

const RefundPolicyPage = () => {
  const schemas = buildLegalPageSchemas({
    name: 'Refund Policy',
    path: '/refund-policy',
    description,
  })

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`refund-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader badge="Legal" title="Refund Policy" description={description} />
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="vstack gap-3">
              <p>Last Updated: July 20, 2026</p>
              <p>
                At Local SEO Wiser, we are committed to providing high-quality digital marketing services. This Refund
                Policy explains when refunds may be available for our services.
              </p>

              <h2>Service Payments</h2>
              <p>
                Payments are made according to the quotation or invoice provided before work begins. By making a payment,
                you acknowledge and accept this Refund Policy.
              </p>

              <h2>Eligibility for Refunds</h2>
              <p>Refund requests are reviewed on a case-by-case basis.</p>
              <p>A refund may be considered if:</p>
              <ul>
                <li>Payment was made in error.</li>
                <li>A project is cancelled before any work has started.</li>
                <li>Local SEO Wiser is unable to deliver the agreed service for reasons within our control.</li>
              </ul>

              <h2>Non-Refundable Services</h2>
              <p>Refunds will generally not be provided for:</p>
              <ul>
                <li>Services that have already been completed.</li>
                <li>SEO audits, research, strategy, or consultation work that has been delivered.</li>
                <li>Monthly SEO services already performed during the current billing period.</li>
                <li>Work completed according to the agreed project scope.</li>
              </ul>

              <h2>Project Cancellation</h2>
              <p>
                Clients may cancel ongoing services by providing written notice. Any completed work up to the
                cancellation date will remain payable.
              </p>
              <p>
                Future scheduled work will not be billed once the cancellation has been confirmed, unless otherwise
                stated in the service agreement.
              </p>

              <h2>Refund Process</h2>
              <p>To request a refund, please email us with:</p>
              <ul>
                <li>Your full name</li>
                <li>Business name</li>
                <li>Invoice number (if available)</li>
                <li>Reason for your request</li>
              </ul>
              <p>
                Each request will be reviewed individually, and we will respond as soon as reasonably possible.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Refund Policy from time to time. Any changes will be published on this page with the
                updated revision date.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions regarding this Refund Policy, please contact us.</p>
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

export default RefundPolicyPage
