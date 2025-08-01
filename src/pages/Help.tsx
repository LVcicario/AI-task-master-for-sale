import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Book, Video, Mail, Phone, Clock } from 'lucide-react';

const Help = () => {
  const categories = [
    {
      icon: <Book className="w-8 h-8 text-blue-600" />,
      title: 'Getting Started',
      description: 'Learn the basics of AI TaskMaster',
      articles: [
        'Quick Start Guide',
        'Setting up your first project',
        'Inviting team members',
        'Basic task management'
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: 'AI Features',
      description: 'Master our AI-powered tools',
      articles: [
        'How AI Auto-Assignment works',
        'Understanding AI recommendations',
        'Training your AI assistant',
        'AI analytics explained'
      ]
    },
    {
      icon: <Video className="w-8 h-8 text-purple-600" />,
      title: 'Integrations',
      description: 'Connect with your favorite tools',
      articles: [
        'Slack integration setup',
        'Google Workspace sync',
        'Microsoft 365 connection',
        'API documentation'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with AI TaskMaster?',
      answer: 'Simply sign up for a free account, create your first project, and invite your team members. Our onboarding wizard will guide you through the setup process.'
    },
    {
      question: 'Can I import data from other tools?',
      answer: 'Yes! We support imports from most popular project management tools including Asana, Trello, Monday.com, and Jira. Contact our support team for assistance.'
    },
    {
      question: 'How does the AI learn my team\'s preferences?',
      answer: 'Our AI analyzes task completion patterns, team member skills, workload distribution, and feedback to continuously improve task assignments and recommendations.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption, are SOC 2 Type II compliant, and store data in secure European data centers with regular security audits.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How can we <span className="text-blue-600">help you?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers, get support, and learn how to make the most of AI TaskMaster
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles, features, or questions..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/contact" className="text-center p-8 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600">Get help from our expert support team</p>
            </Link>
            
            <div className="text-center p-8 bg-green-50 rounded-2xl">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600">Chat with us in real-time</p>
            </div>
            
            <Link to="/webinars" className="text-center p-8 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors">
              <Video className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Training Videos</h3>
              <p className="text-gray-600">Watch step-by-step tutorials</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find the help you need organized by topic</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article, i) => (
                    <li key={i}>
                      <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">24/7 Support Available</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is here to help you succeed, whenever you need us
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Support Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Help;