import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Zap, 
  Shield, 
  Book, 
  Terminal, 
  CheckCircle,
  ArrowRight,
  Copy,
  ExternalLink,
  Users,
  Clock,
  Globe
} from 'lucide-react';

const API = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'RESTful API',
      description: 'Clean, intuitive REST API with JSON responses and standard HTTP methods'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Secure Authentication',
      description: 'OAuth 2.0 and API key authentication with rate limiting and security controls'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: 'Global CDN',
      description: 'Low-latency API endpoints distributed globally for optimal performance'
    },
    {
      icon: <Book className="w-8 h-8 text-orange-600" />,
      title: 'Comprehensive Docs',
      description: 'Interactive documentation with code examples in multiple languages'
    }
  ];

  const endpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/tasks',
      description: 'Retrieve all tasks with filtering and pagination',
      response: '200 OK'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/tasks',
      description: 'Create a new task with AI auto-assignment',
      response: '201 Created'
    },
    {
      method: 'PUT',
      endpoint: '/api/v1/tasks/{id}',
      description: 'Update an existing task',
      response: '200 OK'
    },
    {
      method: 'DELETE',
      endpoint: '/api/v1/tasks/{id}',
      description: 'Delete a task',
      response: '204 No Content'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/projects',
      description: 'List all projects with team information',
      response: '200 OK'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/webhooks',
      description: 'Create webhook for real-time notifications',
      response: '201 Created'
    }
  ];

  const codeExample = `// Initialize AI TaskMaster API client
const taskmaster = new TaskMaster({
  apiKey: 'your-api-key',
  baseURL: 'https://api.aitaskmaster.com/v1'
});

// Create a new task with AI auto-assignment
const task = await taskmaster.tasks.create({
  title: 'Implement user authentication',
  description: 'Add OAuth 2.0 login functionality',
  project_id: 'proj_123',
  priority: 'high',
  auto_assign: true // AI will assign to best team member
});

// Get task analytics
const analytics = await taskmaster.analytics.getTasks({
  project_id: 'proj_123',
  date_range: '30d'
});

console.log('Task created:', task.id);
console.log('Assigned to:', task.assignee.name);`;

  const sdks = [
    { name: 'JavaScript/Node.js', status: 'Available', icon: '🟢' },
    { name: 'Python', status: 'Available', icon: '🟢' },
    { name: 'PHP', status: 'Available', icon: '🟢' },
    { name: 'Ruby', status: 'Available', icon: '🟢' },
    { name: 'Go', status: 'Beta', icon: '🟡' },
    { name: 'Java', status: 'Coming Soon', icon: '🔵' },
    { name: 'C#/.NET', status: 'Coming Soon', icon: '🔵' },
    { name: 'Swift', status: 'Coming Soon', icon: '🔵' }
  ];

  const useCases = [
    {
      title: 'Custom Integrations',
      description: 'Connect AI TaskMaster with your existing tools and workflows',
      examples: ['CRM synchronization', 'Custom reporting dashboards', 'Workflow automation']
    },
    {
      title: 'Mobile Applications',
      description: 'Build native mobile apps with full AI TaskMaster functionality',
      examples: ['iOS/Android apps', 'Offline synchronization', 'Push notifications']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Create custom analytics and business intelligence solutions',
      examples: ['Executive dashboards', 'Performance metrics', 'Predictive analytics']
    },
    {
      title: 'Automation Scripts',
      description: 'Automate repetitive tasks and workflows with custom scripts',
      examples: ['Bulk task creation', 'Automated reporting', 'Data migration']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Code className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful <span className="text-blue-600">API</span> for Developers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build custom integrations, mobile apps, and automation tools with our comprehensive REST API. 
            Access all AI TaskMaster features programmatically.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              99.9% Uptime SLA
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Rate Limit: 1000/min
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Global CDN
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">API Features</h2>
            <p className="text-xl text-gray-600">Everything you need to build powerful integrations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Start Example</h2>
            <p className="text-xl text-gray-600">Get started with AI TaskMaster API in minutes</p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Copy className="w-5 h-5" />
              </button>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</h2>
            <p className="text-xl text-gray-600">Core endpoints for task and project management</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">Method</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">Endpoint</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase">Response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {endpoints.map((endpoint, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                          endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                          endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {endpoint.method}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-gray-900">{endpoint.endpoint}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{endpoint.description}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{endpoint.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Official SDKs</h2>
            <p className="text-xl text-gray-600">Native libraries for your favorite programming languages</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{sdk.name}</h3>
                  <span className="text-xl">{sdk.icon}</span>
                </div>
                <p className={`text-sm font-medium ${
                  sdk.status === 'Available' ? 'text-green-600' :
                  sdk.status === 'Beta' ? 'text-yellow-600' :
                  'text-blue-600'
                }`}>
                  {sdk.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-xl text-gray-600">What you can build with AI TaskMaster API</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Terminal className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Building?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our comprehensive API documentation and start building today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Documentation
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get API Key
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default API;