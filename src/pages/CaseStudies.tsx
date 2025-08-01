import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Clock, Award, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: 'TechCorp Global',
      industry: 'Software Development',
      size: '500+ employees',
      challenge: 'Managing distributed development teams across 12 time zones',
      solution: 'AI auto-assignment and predictive analytics',
      results: {
        productivity: '+65%',
        timeToMarket: '-40%',
        teamSatisfaction: '+80%'
      },
      quote: 'AI TaskMaster transformed how we coordinate our global development teams. The AI understands our workflow better than we do.',
      author: 'Sarah Johnson, CTO',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      company: 'DesignStudio Pro',
      industry: 'Creative Agency',
      size: '50+ employees',
      challenge: 'Balancing creative workloads and meeting tight client deadlines',
      solution: 'Real-time collaboration and workload optimization',
      results: {
        productivity: '+45%',
        clientSatisfaction: '+90%',
        projectDelivery: '+55%'
      },
      quote: 'Our creative team now delivers projects 45% faster while maintaining the highest quality standards.',
      author: 'Michael Chen, Creative Director',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      company: 'StartupXYZ',
      industry: 'E-commerce',
      size: '25+ employees',
      challenge: 'Scaling operations rapidly while maintaining team efficiency',
      solution: 'Complete AI-powered task management implementation',
      results: {
        productivity: '+70%',
        teamGrowth: '300%',
        burnoutReduction: '-60%'
      },
      quote: 'We scaled from 8 to 25 people without losing our startup agility, thanks to AI TaskMaster.',
      author: 'Emily Rodriguez, Founder',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const metrics = [
    { icon: <TrendingUp className="w-8 h-8 text-green-600" />, value: '65%', label: 'Average Productivity Increase' },
    { icon: <Clock className="w-8 h-8 text-blue-600" />, value: '40%', label: 'Time Saved on Projects' },
    { icon: <Users className="w-8 h-8 text-purple-600" />, value: '85%', label: 'Team Satisfaction Rate' },
    { icon: <Award className="w-8 h-8 text-yellow-600" />, value: '95%', label: 'Customer Success Rate' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results from <span className="text-blue-600">Real Teams</span>
          </h1>
          <p className="text-xl text-gray-600">
            Discover how teams across industries are transforming their productivity with AI TaskMaster
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how different teams achieved remarkable results</p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                        <p className="text-blue-600 font-medium">{study.industry} • {study.size}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{study.results.productivity}</div>
                        <div className="text-sm text-gray-600">Productivity</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{study.results.timeToMarket || study.results.clientSatisfaction || study.results.teamGrowth}</div>
                        <div className="text-sm text-gray-600">{study.results.timeToMarket ? 'Time to Market' : study.results.clientSatisfaction ? 'Client Satisfaction' : 'Team Growth'}</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{study.results.teamSatisfaction || study.results.projectDelivery || study.results.burnoutReduction}</div>
                        <div className="text-sm text-gray-600">{study.results.teamSatisfaction ? 'Team Satisfaction' : study.results.projectDelivery ? 'Project Delivery' : 'Burnout Reduction'}</div>
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-4">
                      "{study.quote}"
                    </blockquote>
                    <p className="text-gray-600 font-medium">— {study.author}</p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams already transforming their productivity with AI TaskMaster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/pricing"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;