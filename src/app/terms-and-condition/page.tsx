import { PolicyLayout } from "@/components/layout/policy-layout";

export default function TermsAndConditionPage() {
  return (
    <PolicyLayout title="Terms of Service" lastUpdated="January 13, 2026">
      <div className="space-y-4">
        <p>By accessing or using https://profitagentz.com or any ProfitAgentz services (including pre-built AI agents, custom AI development, and AI integration services), you agree to be bound by these Terms of Service (&quot;Terms&quot;).</p>
        <p className="font-semibold text-zinc-800">If you do not agree with these Terms, you must not access or use our website or services.</p>
        <p>These Terms govern the provision of AI agents, both ready-to-use and fully custom-built, as well as AI integration into existing software systems. We aim for transparency in an evolving technology landscape.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">1. Our Services</h3>
        <p>ProfitAgentz provides:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Pre-built AI agents and automation tools</li>
          <li>Custom AI agent development</li>
          <li>AI integration & optimization services for existing software</li>
          <li>Consulting and related professional services</li>
        </ul>
        <p className="pt-2 text-zinc-500">Specific scope, deliverables, timelines and pricing are defined in separate Order Forms, Proposals, Statements of Work or project agreements (&quot;Engagement Documents&quot;).</p>
        <p className="text-sm text-zinc-600 italic">Category: Service Description</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">2. No Guarantee of Results</h3>
        <p>All services are provided on a <strong className="text-zinc-800">best-efforts</strong> basis.</p>
        <p>We provide <strong className="text-zinc-800">NO WARRANTY</strong> — express or implied — regarding:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Business results, revenue, profit, cost savings</li>
          <li>Accuracy, completeness or reliability of AI outputs</li>
          <li>Absence of errors, hallucinations or biases</li>
        </ul>
        <p className="pt-2 text-purple-600">AI technology is probabilistic and non-deterministic by nature.</p>
        <p className="text-sm text-zinc-500 italic">Category: Disclaimer of Warranties</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">3. Your Responsibilities</h3>
        <p>You agree to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide only lawful, accurate and rights-cleared data/materials</li>
          <li>Use AI outputs responsibly and in compliance with law</li>
          <li>Implement appropriate human review & oversight</li>
          <li>Not rely solely on AI for critical decisions (legal, financial, medical, safety-related etc.)</li>
        </ul>
        <p className="text-sm text-zinc-600 italic">Category: User Obligations</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">4. Intellectual Property</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Our pre-built agents, core platform, background IP and general methodologies remain our exclusive property</li>
          <li>Unless otherwise agreed in writing in an Engagement Document:
            <ul className="list-[circle] pl-6 mt-1 space-y-1 text-zinc-500">
              <li>You own the custom deliverables specifically created for you (subject to our background IP license)</li>
              <li>We retain rights to use generalized learnings, techniques & anonymized data for improving our services</li>
            </ul>
          </li>
          <li>You grant us a license to use input data solely to provide & improve the services (subject to our Privacy Policy)</li>
        </ul>
        <p className="text-sm text-zinc-500 italic">Category: Intellectual Property Rights</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">5. Data Usage & AI Training</h3>
        <p>Unless explicitly agreed otherwise in writing:</p>
        <p>We may use anonymized, aggregated usage data and outputs to train, fine-tune and improve our AI models and services.</p>
        <p>You may opt-out of training usage via written notice (some service features may be limited as a result).</p>
        <p className="text-sm text-zinc-500 italic">Category: Data Usage Terms</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">6. Acceptable Use & Prohibitions</h3>
        <p>You may <strong className="text-red-600">not</strong> use our services to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Violate any law or regulation</li>
          <li>Infringe third-party intellectual property</li>
          <li>Generate harmful, deceptive, defamatory, illegal or adult content</li>
          <li>Develop competing AI products/services (without written consent)</li>
          <li>Attempt to reverse-engineer, extract or copy our models/agents</li>
        </ul>
        <p className="text-sm text-zinc-500 italic">Category: Usage Restrictions</p>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-2xl p-6 space-y-5 my-8">
        <h3 className="text-xl font-bold text-red-600 font-outfit border-b border-red-100 pb-3">Critical Disclaimers</h3>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-zinc-900">AI Technology Disclaimer</h4>
          <p>Artificial Intelligence may generate incorrect, incomplete, biased, offensive or nonsensical outputs (&quot;hallucinations&quot;).</p>
          <p>All outputs are provided &quot;AS IS&quot; without warranty of any kind.</p>
          <p className="text-red-600 font-medium">Users must implement appropriate human review, validation, and oversight mechanisms.</p>
        </div>
        <div className="space-y-2 pt-4 border-t border-red-100">
          <h4 className="text-lg font-semibold text-zinc-900">No Professional Advice</h4>
          <p>Our services and AI agents do NOT constitute legal, financial, investment, tax, medical, insurance or any other regulated professional advice.</p>
          <p>Outputs are for informational/research purposes only. Always consult qualified professionals before making decisions.</p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">7. Limitation of Liability</h3>
        <p>To the maximum extent permitted by law:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>We are not liable for any indirect, consequential, incidental, special, punitive or exemplary damages</li>
          <li>Our total aggregate liability shall not exceed the fees actually paid by you to us in the twelve (12) months preceding the claim</li>
          <li>This limitation applies regardless of the cause of action or legal theory</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">8. Governing Law & Disputes</h3>
        <p>These Terms are governed exclusively by the laws of India, without regard to conflict of law principles.</p>
        <p>Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi, India.</p>
        <p className="text-zinc-500">For EU consumers: You may also have the right to file a complaint with your local consumer protection authority.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">9. Changes & Contact</h3>
        <p>We may update these Terms at any time. Continued use after posting changes constitutes acceptance.</p>
        <p>Material changes will be notified via email or website notice at least 30 days before taking effect.</p>
        <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 mt-6 space-y-2">
          <p><span className="text-zinc-800 font-semibold">Questions? Contact us at:</span> <a href="mailto:contact@profitagentz.com" className="text-purple-600 hover:text-purple-500 transition-colors">contact@profitagentz.com</a></p>
          <p><span className="text-zinc-800 font-semibold">Response time for legal inquiries:</span> 10 business days</p>
        </div>
        <p className="pt-4 text-zinc-500">These Terms constitute the entire agreement regarding our services and supersede all prior understandings. Certain engagements may be governed by additional or superseding written agreements.</p>
      </div>
    </PolicyLayout>
  );
}
