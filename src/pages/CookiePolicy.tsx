import React from 'react';
import { Cookie, Settings, BarChart3, Target } from 'lucide-react';

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      name: 'Strictly Necessary Cookies',
      description: 'These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.',
      examples: ['Authentication tokens', 'Security cookies', 'Load balancing'],
      canDisable: false
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Google Analytics', 'Usage statistics', 'Performance metrics'],
      canDisable: true
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver personalized advertisements and track the effectiveness of our marketing campaigns.',
      examples: ['Ad targeting', 'Conversion tracking', 'Social media pixels'],
      canDisable: true
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Cookie className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-600">
            Learn about how we use cookies and similar technologies on AI TaskMaster
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 31, 2024</p>
        </div>

        {/* What are cookies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Cookies?</h2>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website. 
              They help websites remember your preferences, improve your experience, and provide 
              insights about how the site is used. Cookies cannot harm your device or files.
            </p>
          </div>
        </div>

        {/* Types of cookies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Cookies We Use</h2>
          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-start mb-4">
                  {type.icon}
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        type.canDisable 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {type.canDisable ? 'Optional' : 'Required'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {type.examples.map((example, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed cookie list */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Cookie Information</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">session_token</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Maintains user login session</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Session</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Necessary</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">csrf_token</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Prevents cross-site request forgery</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Session</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Necessary</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">_ga</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Google Analytics - distinguishes users</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2 years</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Analytics</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">_gid</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Google Analytics - distinguishes users</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">24 hours</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Analytics</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">marketing_consent</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Stores marketing cookie preferences</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1 year</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Preference</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Managing cookies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">On Our Website</h3>
              <p className="text-gray-600 mb-4">
                You can manage your cookie preferences using our cookie banner or by clicking the 
                "Cookie Settings" link in our footer.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Manage Cookie Preferences
              </button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">In Your Browser</h3>
              <p className="text-gray-600 mb-4">
                You can also control cookies through your browser settings. Note that disabling 
                certain cookies may affect website functionality.
              </p>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-blue-600 hover:text-blue-700">Chrome Cookie Settings</a>
                <a href="#" className="block text-blue-600 hover:text-blue-700">Firefox Cookie Settings</a>
                <a href="#" className="block text-blue-600 hover:text-blue-700">Safari Cookie Settings</a>
              </div>
            </div>
          </div>
        </div>

        {/* Third-party cookies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              Some cookies on our site are set by third-party services we use to enhance your experience:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Google Analytics:</strong> Helps us understand how visitors use our site</li>
              <li><strong>Stripe:</strong> Processes payments securely</li>
              <li><strong>Intercom:</strong> Provides customer support chat functionality</li>
              <li><strong>Hotjar:</strong> Helps us improve user experience through heatmaps</li>
            </ul>
            <p className="text-gray-700 mt-4">
              These services have their own privacy policies and cookie practices. We recommend 
              reviewing their policies for more information.
            </p>
          </div>
        </div>

        {/* Updates */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices 
            or for other operational, legal, or regulatory reasons. We will notify you of any 
            material changes by posting the updated policy on our website.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-blue-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cookies?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our use of cookies or this Cookie Policy, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:privacy@aitaskmaster.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Email Us
            </a>
            <a 
              href="/contact"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;