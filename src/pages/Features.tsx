import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Users, 
  BarChart3, 
  Shield, 
  Slack, 
  Mail,
  Calendar,
  FileText,
  Bot,
  Clock,
  Target,
  Workflow
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Bot className="w-12 h-12 text-blue-600" />,
      title: 'AI-Powered Automation',
      description: 'Smart task assignment based on team skills, availability, and workload distribution.',
      details: [
        'Intelligent task routing',
        'Workload balancing',
        'Skill-based matching',
        'Priority optimization'
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Real-Time Collaboration',
      description: 'Seamless team communication with instant updates and collaborative workspaces.',
      details: [
        'Live activity feeds',
        'Team chat integration',
        'File sharing',
        'Comment threads'
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into team performance and productivity metrics.',
      details: [
        'Performance dashboards',
        'Productivity trends',
        'Team velocity tracking',
        'Custom reports'
      ]
    }
  ];

  const integrations = [
    { icon: <Slack className="w-8 h-8" />, name: 'Slack', description: 'Get notifications and updates directly in Slack' },
    { icon: <Mail className="w-8 h-8" />, name: 'Google Workspace', description: 'Sync with Gmail, Drive, and Calendar' },
    { icon: <Calendar className="w-8 h-8" />, name: 'Microsoft 365', description: 'Integrate with Outlook and Teams' },
    { icon: <FileText className="w-8 h-8" />, name: 'Notion', description: 'Connect your knowledge base and docs' },
    { icon: <Workflow className="w-8 h-8" />, name: 'Zapier', description: 'Automate workflows with 1000+ apps' },
    { icon: <Target className="w-8 h-8" />, name: 'Jira', description: 'Sync development tasks and sprints' }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant with end-to-end encryption'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: '99.9% Uptime SLA',
      description: 'Reliable infrastructure with automated backups'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Role-Based Access',
      description: 'Granular permissions and team management controls'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="text-blue-600">Smart Teams</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how AI TaskMaster's advanced features can transform your team's 
            productivity and streamline your workflow.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainFeatures.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-20`}>
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h2 className="text-3xl font-bold text-gray-900 ml-4">{feature.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Zap className="w-5 h-5 text-blue-600 mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <p className="text-gray-500 text-lg">Feature Demo Placeholder</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect AI TaskMaster with your favorite tools and platforms for a unified workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    {integration.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your data is protected with industry-leading security measures and compliance standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team's Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams already using AI TaskMaster to streamline their workflows.
          </p>
          <Link 
            to="/pricing"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;