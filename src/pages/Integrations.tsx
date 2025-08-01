import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Slack, 
  Mail, 
  Calendar, 
  FileText, 
  Workflow, 
  Target,
  Github,
  Trello,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Clock,
  Shield
} from 'lucide-react';

const Integrations = () => {
  const popularIntegrations = [
    {
      icon: <Slack className="w-12 h-12 text-purple-600" />,
      name: 'Slack',
      category: 'Communication',
      description: 'Get real-time notifications, create tasks from messages, and manage projects directly in Slack.',
      features: [
        'Instant task notifications',
        'Create tasks from messages',
        'Team status updates',
        'Project summaries'
      ],
      setupTime: '2 minutes',
      users: '45,000+'
    },
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      name: 'Google Workspace',
      category: 'Productivity',
      description: 'Sync with Gmail, Google Drive, Calendar, and Docs for seamless workflow integration.',
      features: [
        'Gmail task creation',
        'Calendar sync',
        'Drive file attachments',
        'Docs collaboration'
      ],
      setupTime: '3 minutes',
      users: '38,000+'
    },
    {
      icon: <Calendar className="w-12 h-12 text-green-600" />,
      name: 'Microsoft 365',
      category: 'Productivity',
      description: 'Connect with Outlook, Teams, OneDrive, and Office apps for complete integration.',
      features: [
        'Outlook calendar sync',
        'Teams notifications',
        'OneDrive storage',
        'Office document editing'
      ],
      setupTime: '3 minutes',
      users: '32,000+'
    },
    {
      icon: <Github className="w-12 h-12 text-gray-800" />,
      name: 'GitHub',
      category: 'Development',
      description: 'Sync issues, pull requests, and commits with your project management workflow.',
      features: [
        'Issue synchronization',
        'PR tracking',
        'Commit linking',
        'Release management'
      ],
      setupTime: '5 minutes',
      users: '28,000+'
    },
    {
      icon: <Trello className="w-12 h-12 text-blue-500" />,
      name: 'Trello',
      category: 'Project Management',
      description: 'Import boards, sync cards, and maintain workflow continuity during migration.',
      features: [
        'Board import',
        'Card synchronization',
        'Label mapping',
        'Member migration'
      ],
      setupTime: '10 minutes',
      users: '15,000+'
    },
    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      name: 'Jira',
      category: 'Development',
      description: 'Connect development sprints with project management for complete visibility.',
      features: [
        'Sprint synchronization',
        'Epic tracking',
        'Bug reporting',
        'Release planning'
      ],
      setupTime: '8 minutes',
      users: '22,000+'
    }
  ];

  const categories = [
    {
      name: 'Communication',
      count: 12,
      icon: <Users className="w-6 h-6 text-purple-600" />,
      integrations: ['Slack', 'Microsoft Teams', 'Discord', 'Zoom']
    },
    {
      name: 'Productivity',
      count: 18,
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      integrations: ['Google Workspace', 'Microsoft 365', 'Notion', 'Airtable']
    },
    {
      name: 'Development',
      count: 15,
      icon: <FileText className="w-6 h-6 text-green-600" />,
      integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Jenkins']
    },
    {
      name: 'Design',
      count: 8,
      icon: <Target className="w-6 h-6 text-pink-600" />,
      integrations: ['Figma', 'Adobe Creative Cloud', 'Sketch', 'InVision']
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Save 3+ Hours Daily',
      description: 'Eliminate manual data entry and context switching between tools'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Enterprise Security',
      description: 'All integrations use OAuth 2.0 and enterprise-grade encryption'
    },
    {
      icon: <Workflow className="w-8 h-8 text-purple-600" />,
      title: 'Custom Workflows',
      description: 'Create automated workflows that trigger across all your tools'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect Your <span className="text-blue-600">Favorite Tools</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Integrate AI TaskMaster with 100+ popular tools and platforms. 
            Streamline your workflow and eliminate context switching.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              100+ integrations
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              5-minute setup
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Enterprise security
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find integrations for every part of your workflow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} integrations</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {category.integrations.map((integration, i) => (
                    <p key={i} className="text-sm text-gray-600">{integration}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Integrations</h2>
            <p className="text-xl text-gray-600">Connect with the tools your team already loves</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularIntegrations.map((integration, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  {integration.icon}
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{integration.users} users</div>
                    <div className="text-sm text-blue-600 font-medium">{integration.setupTime} setup</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{integration.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{integration.category}</p>
                  <p className="text-gray-600 mb-4">{integration.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {integration.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Connect {integration.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Integration?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Use our powerful REST API to build custom integrations and automate any workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View API Documentation
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Custom Integration
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Connect Your Tools?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial and integrate with your favorite tools in minutes
          </p>
          <Link 
            to="/pricing"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Integrations;