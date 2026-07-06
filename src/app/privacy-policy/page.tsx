import { PolicyLayout } from "@/components/layout/policy-layout";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="January 2026">
      <div className="space-y-4">
        <p>ProfitAgentz (&quot;ProfitAgentz&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates https://profitagentz.com and provides AI automation services. We are committed to protecting your privacy and handling data responsibly in accordance with global privacy regulations.</p>
        <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">1. Information We Collect</h3>
        <p className="font-semibold text-zinc-800 pt-2">a) Information You Provide</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name</li>
          <li>Email</li>
          <li>Company</li>
          <li>Phone</li>
          <li>Message/Inquiry Details</li>
        </ul>
        <p className="font-semibold text-zinc-800 pt-2">b) Business & Usage Information</p>
        <p>AI requirements, system integrations, communication records, audit data, and service usage patterns.</p>
        <p className="font-semibold text-zinc-800 pt-2">c) Automatically Collected Data</p>
        <p>IP address • Browser/device information • Pages visited • Cookies & analytics data • Performance metrics</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">2. AI Systems & Data Usage</h3>
        <p className="text-purple-600 font-medium">Key AI Data Commitment</p>
        <p className="font-semibold text-zinc-800">Client data is never used to train shared or third-party AI models unless explicitly agreed in a written Data Processing Agreement (DPA).</p>
        <ul className="list-disc pl-5 space-y-1 pt-2">
          <li>Custom AI agents use only authorized client data for specific project purposes</li>
          <li>Strict access controls limited to project needs</li>
          <li>Focus on operational efficiency, not data mining or model training</li>
          <li>GDPR-compliant data processing for EU clients</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">3. How We Use Your Information</h3>
        <p>Respond to inquiries • Deliver AI automation services & audits • Project communication • Improve site & security • Compliance with legal obligations</p>
        <p className="text-sm text-zinc-500 italic">Legal Basis: Contract, Consent, Legitimate Interest</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">4. Data Sharing</h3>
        <p>Essential service providers (hosting/infrastructure) • Analytics tools • Communication platforms</p>
        <p className="font-semibold text-zinc-800">We do not sell, rent, or trade personal data.</p>
        <p className="text-sm text-zinc-500 italic">Legal Basis: Limited to Service Delivery</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">5. Data Security</h3>
        <p>Industry-standard encryption • Access controls • Secure infrastructure • Limited internal access • Regular security audits • Incident response protocols</p>
        <p className="text-sm text-zinc-500 italic">Legal Basis: Enterprise Grade</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">6. Data Retention</h3>
        <p>Kept only as long as necessary for service delivery, legal obligations, or legitimate business needs.</p>
        <p>Deletion requests considered subject to contractual obligations.</p>
        <p className="text-sm text-zinc-500 italic">Legal Basis: Purpose-Based</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">7. Data Processing Agreement</h3>
        <p>Enterprise & regulated clients: Comprehensive DPA available upon request including GDPR Article 28 requirements.</p>
        <p className="text-sm text-zinc-500 italic">Legal Basis: Upon Request</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">8. Your Privacy Rights</h3>
        <p>Access • Correction • Deletion • Withdraw consent • Object to processing • Data portability</p>
        <p>Email: <a href="mailto:contact@profitagentz.com" className="text-purple-600 hover:text-purple-500 transition-colors">contact@profitagentz.com</a></p>
        <p className="text-sm text-zinc-500 italic">Legal Basis: 30 Days Maximum</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">9. International Data Transfers</h3>
        <p>Data may be processed globally with appropriate safeguards including Standard Contractual Clauses (SCCs), Privacy Shield frameworks, and Binding Corporate Rules where applicable.</p>
        <p>We ensure equivalent protection through contractual and technical measures regardless of processing location.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">10. Updates & Contact</h3>
        <p>This policy may be updated to reflect changes in regulations, services, or business practices. Significant changes will be prominently displayed here with advance notice where required.</p>
        <p>We recommend reviewing this policy periodically to stay informed about our privacy practices.</p>
        <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 mt-6 space-y-2">
          <p><span className="text-zinc-800 font-semibold">Privacy Contact:</span> <a href="mailto:contact@profitagentz.com" className="text-purple-600 hover:text-purple-500 transition-colors">contact@profitagentz.com</a></p>
          <p><span className="text-zinc-800 font-semibold">Jurisdiction:</span> Delhi, India</p>
          <p><span className="text-zinc-800 font-semibold">Response time for privacy inquiries:</span> 15 business days</p>
        </div>
        <p className="pt-4 font-semibold text-zinc-800">This Privacy Policy explains our data handling practices. Your use of our services constitutes acceptance of these terms.</p>
      </div>
    </PolicyLayout>
  );
}
