import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Zap, 
  Users, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Play,
  Mail,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  Sparkles
} from 'lucide-react';
import { subscribeToNewsletter } from '../lib/supabase';

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const stats = [
    { number: '50,000+', label: 'Active Teams', icon: <Users className="w-5 h-5" /> },
    { number: '40%', label: 'Time Saved', icon: <Clock className="w-5 h-5" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-5 h-5" /> },
    { number: '150+', label: 'Countries', icon: <Globe className="w-5 h-5" /> }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'AI Auto-Assignment 2.0',
      description: 'Revolutionary AI that learns your team\'s patterns and automatically assigns tasks for maximum efficiency.',
      benefits: ['40% faster task completion', 'Smart workload balancing', 'Skill-based matching']
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Real-Time Collaboration',
      description: 'Connect your global team with instant updates, live editing, and seamless communication.',
      benefits: ['Live document editing', 'Instant notifications', 'Video call integration']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights that predict bottlenecks and optimize your team\'s performance.',
      benefits: ['Performance forecasting', 'Bottleneck detection', 'ROI tracking']
    }
  ];

  const socialProof = [
    { logo: 'Microsoft', employees: '100,000+' },
    { logo: 'Shopify', employees: '10,000+' },
    { logo: 'Airbnb', employees: '6,000+' },
    { logo: 'Spotify', employees: '8,000+' },
    { logo: 'Uber', employees: '29,000+' },
    { logo: 'Netflix', employees: '11,000+' }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: 'Boost Productivity by 40%',
      description: 'Teams using AI TaskMaster complete projects 40% faster on average'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: 'Award-Winning Platform',
      description: 'Recognized as "Best AI Tool 2024" by TechCrunch and ProductHunt'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-600" />,
      title: 'Loved by Teams Worldwide',
      description: '4.9/5 rating from 50,000+ teams across 150+ countries'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      content: 'AI TaskMaster completely transformed how our remote team operates. The AI auto-assignment feature is like having a super-intelligent project manager that never sleeps. We\'ve seen a 45% increase in productivity and our team stress levels have dropped significantly.',
      rating: 5,
      company: 'TechCorp',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'CTO at StartupXYZ',
      content: 'As a CTO managing multiple development teams, AI TaskMaster has been a game-changer. The predictive analytics help us identify bottlenecks before they become problems. Our sprint completion rate improved by 60%.',
      rating: 5,
      company: 'StartupXYZ',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Team Lead at DesignStudio',
      content: 'We tried every task management tool out there, but nothing comes close to AI TaskMaster. The real-time collaboration features keep our creative team in perfect sync, and the analytics provide insights we never had before.',
      rating: 5,
      company: 'DesignStudio',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'David Kim',
      role: 'Operations Director at GlobalTech',
      content: 'Managing 200+ team members across 15 countries was a nightmare until we found AI TaskMaster. The AI handles task distribution flawlessly, and our project delivery time improved by 35%.',
      rating: 5,
      company: 'GlobalTech',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Engineering at InnovateCorp',
      content: 'The ROI was immediate. Within the first month, we saved over 200 hours of manual task management. The AI learns our team\'s preferences and gets smarter every day.',
      rating: 5,
      company: 'InnovateCorp',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'James Wilson',
      role: 'Founder at AgileStartup',
      content: 'AI TaskMaster scaled with us from 5 to 50 employees. The enterprise features are robust, and the support team is incredibly responsive. It\'s an essential tool for any growing company.',
      rating: 5,
      company: 'AgileStartup',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribing(true);

    try {
      const { error } = await subscribeToNewsletter(email);
      if (error) throw error;
      
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              #1 AI Task Management Tool - TechCrunch 2024
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Transform Your Team's <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Productivity</span> with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Join 50,000+ teams using AI TaskMaster to <strong>save 40% time</strong> with intelligent task automation, 
              real-time collaboration, and predictive analytics. <span className="text-blue-600 font-semibold">Start free today!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/pricing"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start Free Trial - No Credit Card
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/features"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50 font-semibold"
              >
                <Play className="w-5 h-5" />
                Watch 2-Min Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-center text-blue-600 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8 font-medium">Trusted by teams at world-class companies</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {socialProof.map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-400 mb-1">{company.logo}</div>
                <div className="text-xs text-gray-400">{company.employees} employees</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why 50,000+ Teams Choose AI TaskMaster
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the productivity revolution and see immediate results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary AI Features That <span className="text-blue-600">Actually Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop wasting time on manual task management. Our AI learns your team's patterns and optimizes everything automatically.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-xl group">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                {feature.benefits && (
                  <ul className="text-sm text-gray-500 space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            See How AI TaskMaster Transforms Your Workflow
          </h2>
          <p className="text-xl text-gray-600 mb-8">Watch how teams save 40% of their time with intelligent automation</p>
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl aspect-video flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow cursor-pointer group">
            <div className="text-center">
              <Play className="w-24 h-24 text-gray-600 mx-auto mb-4 group-hover:text-blue-600 transition-colors group-hover:scale-110 transform" />
              <p className="text-gray-600 text-xl font-semibold">▶ Watch 2-Minute Demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by 50,000+ Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Don't just take our word for it - see what teams are saying
            </p>
            <div className="flex items-center justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold text-gray-900">4.9/5 from 2,847 reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Join 50,000+ Teams Already Saving Time
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get exclusive productivity tips, feature updates, and success stories delivered weekly.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="w-full pl-10 pr-4 py-4 rounded-xl border-0 focus:ring-4 focus:ring-blue-300 text-lg shadow-lg"
                />
              </div>
              <button 
                type="submit"
                disabled={subscribing}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 shadow-lg text-lg"
              >
                {subscribing ? 'Subscribing...' : subscribed ? '✓ Subscribed!' : 'Get Free Tips →'}
              </button>
            </form>
            <p className="text-blue-200 text-sm">
              ✓ No spam, ever. ✓ Unsubscribe anytime. ✓ 25,000+ subscribers trust us.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to <span className="text-blue-600">Transform</span> Your Team's Productivity?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 50,000+ teams already saving 40% of their time with AI TaskMaster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/pricing"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-5 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-2 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Start Free Trial - No Credit Card Required
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;