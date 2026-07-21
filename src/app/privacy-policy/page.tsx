import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import { buildHubPageMetadata, buildLegalPageSchemas } from '@/lib/hub-seo'
import type { Metadata } from 'next'
import { Col, Container, Row } from 'react-bootstrap'

const title = 'Privacy Policy | How Local SEO Wiser Protects Data'
const description =
  'Learn how Local SEO Wiser collects, uses, stores, and protects your personal information when you visit our website or contact us for SEO services.'

export const metadata: Metadata = buildHubPageMetadata({
  title,
  description,
  path: '/privacy-policy',
  imageAlt: title,
})

const PrivacyPolicyPage = () => {
  const schemas = buildLegalPageSchemas({
    name: 'Privacy Policy',
    path: '/privacy-policy',
    description,
  })

  return (
    <SiteShell>
      {schemas.map((schema, index) => (
        <script
          key={`privacy-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageHeader badge="Legal" title="Privacy Policy" description={description} />
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="vstack gap-3">
              <p>Last Updated: July 20, 2026</p>
              <p>
                At Local SEO Wiser, we respect your privacy and are committed to protecting the personal information you
                share with us. This Privacy Policy explains what information we collect, how we use it, and the choices
                you have when using our website and services.
              </p>

              <h2>Information We Collect</h2>
              <p>When you contact us or request our services, we may collect information such as:</p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name</li>
                <li>Website URL</li>
                <li>Information you provide through contact forms or emails</li>
              </ul>
              <p>
                We may also collect basic technical information automatically, including your IP address, browser type,
                device information, and pages visited to help improve website performance and security.
              </p>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your enquiries</li>
                <li>Provide Local SEO and digital marketing services</li>
                <li>Prepare proposals and SEO audits</li>
                <li>Improve our website and customer experience</li>
                <li>Communicate regarding your project or requested services</li>
                <li>Protect our website against spam, fraud, and security threats</li>
              </ul>
              <p>We do not sell your personal information.</p>

              <h2>Cookies</h2>
              <p>
                Our website may use cookies to improve functionality, remember preferences, and help us understand how
                visitors use our website. You can disable cookies through your browser settings if you prefer.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                We may use trusted third-party services to help operate our business, such as website hosting, analytics
                tools, email services, and other business software. These providers only receive information necessary to
                perform their services.
              </p>

              <h2>Data Security</h2>
              <p>
                We take reasonable technical and administrative measures to protect your personal information from
                unauthorized access, misuse, alteration, or disclosure. However, no method of data transmission or
                storage can be guaranteed to be completely secure.
              </p>

              <h2>Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to provide our services, respond to
                enquiries, comply with legal obligations, and maintain business records.
              </p>

              <h2>Your Rights</h2>
              <p>You may request to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your personal information where appropriate</li>
                <li>Ask questions about how your information is used</li>
              </ul>
              <p>To make a request, please contact us using the email address below.</p>

              <h2>Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of those websites. We encourage you to review their privacy policies before providing personal
                information.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or how your information is handled, please contact us:</p>
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

export default PrivacyPolicyPage
