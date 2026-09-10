import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | FLAMORA",
  description: "FLAMORA privacy policy - how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-flamora-cream min-h-screen py-24">
      <Container className="max-w-4xl">
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-lg">
          <div className="mb-10 border-b border-gray-200 pb-8">
            <h1 className="font-heading text-4xl md:text-5xl text-flamora-charcoal mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: September 10, 2026</p>
            <div className="mt-6 bg-amber-50 border-l-4 border-flamora-orange p-4 text-sm text-amber-800">
              <p><strong>Note:</strong> This is a sample privacy policy for demonstration purposes. Consult a legal professional for your actual privacy policy.</p>
            </div>
          </div>

          <div className="space-y-8 text-flamora-text prose prose-stone max-w-none">
            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect information you provide directly to us when you make a reservation, sign up for our newsletter, contact us, or otherwise interact with us. This may include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Reservation details and dining preferences</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Feedback and correspondence</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Process and manage your reservations</li>
                <li>Send you confirmations, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about promotions, upcoming events, and news</li>
                <li>Improve our restaurant services and website experience</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">3. Data Security</h2>
              <p className="mb-4">We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">4. Cookies</h2>
              <p className="mb-4">Our website uses cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">5. Third-Party Services</h2>
              <p className="mb-4">We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related activities, or assist us in analyzing how our service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. Please contact us to exercise these rights.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">7. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>
                <strong>Email:</strong> {siteConfig.email}<br />
                <strong>Phone:</strong> {siteConfig.phone}<br />
                <strong>Address:</strong> {`${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
