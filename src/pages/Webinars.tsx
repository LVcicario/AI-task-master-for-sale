import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Play, ArrowRight } from 'lucide-react';

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: 'AI TaskMaster Masterclass: Advanced Automation Techniques',
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      presenter: 'Dr. Sarah Kim, Head of AI',
      description: 'Learn advanced AI automation techniques to maximize your team\'s productivity. Discover hidden features and best practices.',
      attendees: 1247,
      topics: ['Advanced AI settings', 'Custom automation rules', 'Performance optimization', 'Q&A session']
    },
    {
      title: 'Remote Team Management with AI TaskMaster',
      date: '2024-02-22',
      time: '11:00 AM EST',
      duration: '45 minutes',
      presenter: 'Michael Chen, Product Manager',
      description: 'Master the art of managing distributed teams with AI-powered insights and collaboration tools.',
      attendees: 892,
      topics: ['Remote team challenges', 'AI-powered solutions', 'Real-time collaboration', 'Case studies']
    },
    {
      title: 'Getting Started: Your First 30 Days with AI TaskMaster',
      date: '2024-03-01',
      time: '10:00 AM EST',
      duration: '30 minutes',
      presenter: 'Emily Rodriguez, Customer Success',
      description: 'Perfect for new users! Learn how to set up your workspace and achieve quick wins in your first month.',
      attendees: 2156,
      topics: ['Initial setup', 'Team onboarding', 'Quick wins', 'Success metrics']
    }
  ];

  const pastWebinars = [
    {
      title: 'AI TaskMaster 2024: What\'s New and What\'s Next',
      date: '2024-01-25',
      duration: '45 minutes',
      views: 5432,
      description: 'Discover the latest features and get a sneak peek at our 2024 roadmap.'
    },
    {
      title: 'Scaling Your Team with AI: From 10 to 100+ Members',
      date: '2024-01-18',
      duration: '60 minutes',
      views: 3891,
      description: 'Learn how to successfully scale your team operations using AI TaskMaster.'
    },
    {
      title: 'Integration Deep Dive: Connecting Your Favorite Tools',
      date: '2024-01-11',
      duration: '50 minutes',
      views: 2764,
      description: 'Master integrations with Slack, Google Workspace, Microsoft 365, and more.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn from the <span className="text-blue-600">Experts</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our free webinars and training sessions to master AI TaskMaster and boost your team's productivity
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              10,000+ attendees
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Weekly sessions
            </div>
            <div className="flex items-center">
              <Play className="w-4 h-4 mr-2" />
              Always recorded
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-600">Reserve your spot for our upcoming training sessions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Upcoming
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {webinar.attendees} registered
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(webinar.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {webinar.time} ({webinar.duration})
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">What you'll learn:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {webinar.topics.map((topic, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-3">Presented by {webinar.presenter}</p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Register Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">On-Demand Recordings</h2>
            <p className="text-xl text-gray-600">Catch up on previous sessions at your own pace</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    On-Demand
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Play className="w-4 h-4 mr-1" />
                    {webinar.views} views
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{new Date(webinar.date).toLocaleDateString()}</span>
                  <span>{webinar.duration}</span>
                </div>
                
                <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Never Miss a Training Session
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get notified about upcoming webinars and exclusive training content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm">
            Join 25,000+ professionals getting exclusive training updates
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Put your new knowledge to work with a free AI TaskMaster trial
          </p>
          <Link 
            to="/pricing"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Webinars;