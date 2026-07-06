import { PolicyLayout } from "@/components/layout/policy-layout";

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="January 2026">
      <div className="space-y-4">
        <p>This Cookie Policy explains how ProfitAgentz uses cookies and similar technologies on https://profitagentz.com to improve your experience, security, and site insights. By using our website, you consent to the use of cookies in accordance with this policy.</p>
        <p>This policy details the types of cookies we use, their purposes, and how you can control them to manage your privacy preferences.</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit border-b border-zinc-200 pb-3">Types of Cookies We Use</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-3">
            <h4 className="text-zinc-900 font-semibold flex items-center gap-2"><span className="flex h-2 w-2 rounded-full bg-blue-500"></span>1. Essential Cookies</h4>
            <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600">
              <li>Required for basic site functions & security.</li>
              <li>Cannot be disabled without breaking the site.</li>
            </ul>
            <div className="pt-2 text-xs text-zinc-500 space-y-1">
              <p><span className="text-zinc-800 font-medium">Role:</span> Essential</p>
              <p><span className="text-zinc-800 font-medium">Duration:</span> Session-based</p>
            </div>
          </div>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-3">
            <h4 className="text-zinc-900 font-semibold flex items-center gap-2"><span className="flex h-2 w-2 rounded-full bg-purple-500"></span>2. Analytics Cookies</h4>
            <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600">
              <li>Help us understand usage, improve content and navigation.</li>
              <li>Collect anonymous data about site performance.</li>
            </ul>
            <div className="pt-2 text-xs text-zinc-500 space-y-1">
              <p><span className="text-zinc-800 font-medium">Role:</span> Performance</p>
              <p><span className="text-zinc-800 font-medium">Duration:</span> Persistent</p>
            </div>
          </div>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-3">
            <h4 className="text-zinc-900 font-semibold flex items-center gap-2"><span className="flex h-2 w-2 rounded-full bg-pink-500"></span>3. Marketing Cookies</h4>
            <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600">
              <li>Measure campaign performance and personalize content.</li>
              <li>Only used with your explicit consent.</li>
            </ul>
            <div className="pt-2 text-xs text-zinc-500 space-y-1">
              <p><span className="text-zinc-800 font-medium">Role:</span> Targeting</p>
              <p><span className="text-zinc-800 font-medium">Duration:</span> Persistent</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">Managing Cookies</h3>
        <p>Control cookies via:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Browser settings (Chrome, Firefox, Safari, Edge)</li>
          <li>Our consent banner/tools</li>
          <li>Third-party cookie management plugins</li>
        </ul>
        <p className="text-zinc-800 font-medium pt-2">Note: Some features may be limited if essential cookies are disabled.</p>
        <p className="text-sm text-zinc-500 italic">Category: User Control Options</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">Third-Party Cookies</h3>
        <p>Some third-party services may set cookies:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Google Analytics (performance tracking)</li>
          <li>Social media platforms (sharing features)</li>
          <li>Embedded content providers</li>
          <li>Advertising networks (with consent)</li>
        </ul>
        <p>These services follow their own privacy & cookie policies.</p>
        <p className="text-sm text-zinc-500 italic">Category: External Services</p>
      </div>

      <div className="space-y-6 pt-6 border-t border-zinc-200">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">Legal Compliance</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-zinc-900">GDPR Compliant (EU)</h4>
            <p>Our cookie practices comply with the General Data Protection Regulation.</p>
            <p>We provide clear consent mechanisms and respect user preferences for all non-essential cookies.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-zinc-900">CCPA Ready (California)</h4>
            <p>California Consumer Privacy Act compliant.</p>
            <p>California residents can exercise their right to opt-out of cookie-based data sharing.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-zinc-900">Global Standards</h4>
            <p>Aligned with PIPEDA (Canada), LGPD (Brazil), and other global privacy frameworks.</p>
            <p>We implement privacy-by-design principles across all our services.</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">Cookie Duration & Storage</h3>
        <p>Cookies have different lifespans. Session cookies expire when you close your browser, while persistent cookies remain until they expire or you delete them.</p>
        <p>We regularly review and update our cookie usage to ensure compliance with evolving regulations and best practices.</p>
        <p className="pt-2 font-medium text-zinc-800">By continuing to use our website, you acknowledge that you have read and understand this Cookie Policy.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">Updates & Contact</h3>
        <p>This Cookie Policy may be updated periodically to reflect changes in our practices, technology, or legal requirements. Significant changes will be prominently displayed on this page.</p>
        <p>We recommend reviewing this policy regularly to stay informed about how we use cookies.</p>
        <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 mt-6 space-y-2">
          <p><span className="text-zinc-800 font-semibold">Email:</span> <a href="mailto:contact@profitagentz.com" className="text-purple-600 hover:text-purple-500 transition-colors">contact@profitagentz.com</a></p>
          <p><span className="text-zinc-800 font-semibold">Response time for cookie-related inquiries:</span> 5 business days</p>
        </div>
      </div>
    </PolicyLayout>
  );
}
