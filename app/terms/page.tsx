import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | FLAMORA",
  description: "Terms and conditions for using the FLAMORA website and dining services.",
};

export default function TermsPage() {
  return (
    <div className="bg-flamora-cream min-h-screen py-24">
      <Container className="max-w-4xl">
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-lg">
          <div className="mb-10 border-b border-gray-200 pb-8">
            <h1 className="font-heading text-4xl md:text-5xl text-flamora-charcoal mb-4">Terms & Conditions</h1>
            <p className="text-gray-500">Last updated: September 10, 2026</p>
            <div className="mt-6 bg-amber-50 border-l-4 border-flamora-orange p-4 text-sm text-amber-800">
              <p><strong>Note:</strong> This is a sample terms and conditions document for demonstration purposes. Consult a legal professional for your actual terms.</p>
            </div>
          </div>

          <div className="space-y-8 text-flamora-text prose prose-stone max-w-none">
            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">2. Reservations</h2>
              <p className="mb-4">All reservations are subject to availability. We reserve the right to cancel or modify reservations in the event of unforeseen circumstances. For parties of 6 or more, a deposit or credit card hold may be required.</p>
              <p className="mb-4">We kindly ask that you arrive on time for your reservation. We will hold your table for up to 15 minutes past the reservation time, after which it may be released to other guests.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">3. Cancellation Policy</h2>
              <p className="mb-4">If you need to cancel or modify your reservation, please do so at least 24 hours in advance. Late cancellations or no-shows for large parties or special events may be subject to a cancellation fee.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">4. Conduct</h2>
              <p className="mb-4">We strive to provide a welcoming and safe environment for all our guests and staff. We reserve the right to refuse service to anyone who behaves in a disruptive, inappropriate, or unsafe manner.</p>
              <p className="mb-4">Please inform us of any severe allergies or dietary restrictions when booking. While we take precautions, we cannot guarantee a completely allergen-free environment.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">5. Liability</h2>
              <p className="mb-4">The materials on FLAMORA's website are provided on an 'as is' basis. FLAMORA makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">6. Intellectual Property</h2>
              <p className="mb-4">The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">7. Changes to Terms</h2>
              <p className="mb-4">We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review these pages periodically. When we change the Terms in a material manner, we will update the 'last updated' date at the top of this page.</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl text-flamora-charcoal mb-4">8. Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
              <p>
                <strong>Email:</strong> {siteConfig.email}<br />
                <strong>Phone:</strong> {siteConfig.phone}<br />
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
