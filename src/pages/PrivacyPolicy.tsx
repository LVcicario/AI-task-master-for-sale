import React from 'react';
import { Shield, Eye, Lock, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is our priority. Learn how we collect, use, and protect your data.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 31, 2024</p>
        </div>

        {/* Quick Overview */}
        <div className="bg-blue-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Transparency</h3>
              <p className="text-sm text-gray-600">We're clear about what data we collect and why</p>
            </div>
            <div className="text-center">
              <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Security</h3>
              <p className="text-sm text-gray-600">Enterprise-grade encryption protects your data</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">GDPR Compliant</h3>
              <p className="text-sm text-gray-600">Full compliance with international privacy laws</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h2>1. Information We Collect</h2>
          
          <h3>Account Information</h3>
          <p>When you create an AI TaskMaster account, we collect:</p>
          <ul>
            <li>Name and email address</li>
            <li>Company name and role</li>
            <li>Password (encrypted)</li>
            <li>Profile picture (optional)</li>
          </ul>

          <h3>Usage Data</h3>
          <p>To improve our service and provide AI-powered features, we collect:</p>
          <ul>
            <li>Task creation and completion patterns</li>
            <li>Team collaboration metrics</li>
            <li>Feature usage statistics</li>
            <li>Performance and error logs</li>
          </ul>

          <h3>Technical Information</h3>
          <p>We automatically collect certain technical information:</p>
          <ul>
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          
          <h3>Service Provision</h3>
          <ul>
            <li>Provide and maintain AI TaskMaster services</li>
            <li>Process transactions and send notifications</li>
            <li>Provide customer support</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h3>AI and Machine Learning</h3>
          <ul>
            <li>Train AI models to improve task assignment</li>
            <li>Generate productivity insights and recommendations</li>
            <li>Optimize workflow automation</li>
            <li>Predict project timelines and bottlenecks</li>
          </ul>

          <h3>Communication</h3>
          <ul>
            <li>Send important service updates</li>
            <li>Respond to your inquiries</li>
            <li>Send marketing communications (with consent)</li>
            <li>Conduct surveys and research</li>
          </ul>

          <h2>3. Data Sharing and Disclosure</h2>
          
          <p>We do not sell your personal data. We may share information in these limited circumstances:</p>
          
          <h3>Service Providers</h3>
          <p>We work with trusted third-party service providers who help us operate our business:</p>
          <ul>
            <li>Cloud hosting providers (AWS, Google Cloud)</li>
            <li>Payment processors (Stripe)</li>
            <li>Analytics services (anonymized data only)</li>
            <li>Customer support tools</li>
          </ul>

          <h3>Legal Requirements</h3>
          <p>We may disclose information when required by law or to:</p>
          <ul>
            <li>Comply with legal processes</li>
            <li>Protect our rights and property</li>
            <li>Ensure user safety</li>
            <li>Investigate fraud or security issues</li>
          </ul>

          <h2>4. Data Security</h2>
          
          <p>We implement industry-leading security measures:</p>
          <ul>
            <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
            <li><strong>Access Controls:</strong> Strict employee access controls and monitoring</li>
            <li><strong>Regular Audits:</strong> SOC 2 Type II compliance and security audits</li>
            <li><strong>Incident Response:</strong> 24/7 security monitoring and response team</li>
          </ul>

          <h2>5. Your Rights and Choices</h2>
          
          <h3>GDPR Rights (EU Users)</h3>
          <p>If you're in the EU, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate information</li>
            <li><strong>Erasure:</strong> Request deletion of your data</li>
            <li><strong>Portability:</strong> Export your data in a standard format</li>
            <li><strong>Restriction:</strong> Limit how we process your data</li>
            <li><strong>Objection:</strong> Object to certain types of processing</li>
          </ul>

          <h3>All Users</h3>
          <ul>
            <li>Update your account information anytime</li>
            <li>Control email communication preferences</li>
            <li>Delete your account and associated data</li>
            <li>Opt out of non-essential cookies</li>
          </ul>

          <h2>6. Data Retention</h2>
          
          <p>We retain your data only as long as necessary:</p>
          <ul>
            <li><strong>Account Data:</strong> Until you delete your account</li>
            <li><strong>Usage Data:</strong> Up to 2 years for analytics and AI training</li>
            <li><strong>Support Data:</strong> Up to 3 years for quality assurance</li>
            <li><strong>Legal Data:</strong> As required by applicable laws</li>
          </ul>

          <h2>7. International Data Transfers</h2>
          
          <p>AI TaskMaster operates globally. We ensure adequate protection when transferring data internationally through:</p>
          <ul>
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Adequacy decisions by the European Commission</li>
            <li>Other appropriate safeguards as required by law</li>
          </ul>

          <h2>8. Children's Privacy</h2>
          
          <p>AI TaskMaster is not intended for children under 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will delete it promptly.</p>

          <h2>9. Changes to This Policy</h2>
          
          <p>We may update this Privacy Policy from time to time. We will:</p>
          <ul>
            <li>Notify you of material changes via email or in-app notification</li>
            <li>Post the updated policy on our website</li>
            <li>Update the "Last updated" date</li>
            <li>Provide a summary of key changes</li>
          </ul>

          <h2>10. Contact Us</h2>
          
          <p>If you have questions about this Privacy Policy or want to exercise your rights, contact us:</p>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <p><strong>Email:</strong> privacy@aitaskmaster.com</p>
            <p><strong>Address:</strong> AI TaskMaster Privacy Team<br />
            123 Innovation Street<br />
            Tech City, TC 12345<br />
            European Union</p>
            <p><strong>Data Protection Officer:</strong> dpo@aitaskmaster.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;