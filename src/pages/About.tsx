import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, TrendingUp, Globe, Shield, Zap, Heart, Lightbulb, Rocket, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50,000+', label: 'Active Teams', icon: <Users className="w-5 h-5" /> },
    { number: '150+', label: 'Countries', icon: <Globe className="w-5 h-5" /> },
    { number: '40%', label: 'Time Saved on Average', icon: <Clock className="w-5 h-5" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-5 h-5" /> },
    { number: '4.9/5', label: 'Customer Rating', icon: <Star className="w-5 h-5" /> },
    { number: '2022', label: 'Founded', icon: <Rocket className="w-5 h-5" /> }
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'CEO & Founder',
      description: 'Former VP of Engineering at leading tech companies with 15+ years experience in AI and productivity tools. Previously led engineering teams at Google and Microsoft.',
      expertise: ['AI Strategy', 'Product Vision', 'Team Leadership'],
      education: 'Stanford University - MS Computer Science'
    },
    {
      name: 'Dr. Sarah Kim',
      role: 'Head of AI & Machine Learning',
      description: 'PhD in Machine Learning from MIT. Previously led AI research teams at Google DeepMind and Microsoft Research. Published 50+ papers in top-tier conferences.',
      expertise: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics'],
      education: 'MIT - PhD Machine Learning'
    },
    {
      name: 'Michael Zhang',
      role: 'Head of Product',
      description: 'Product strategy expert with a track record of building user-centric solutions for remote teams. Former Product Manager at Slack and Atlassian.',
      expertise: ['Product Strategy', 'User Experience', 'Growth'],
      education: 'UC Berkeley - MBA'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Engineering',
      description: 'Full-stack engineering leader with expertise in scalable systems. Built infrastructure serving millions of users at Netflix and Uber.',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps'],
      education: 'Carnegie Mellon - MS Software Engineering'
    },
    {
      name: 'David Chen',
      role: 'Head of Customer Success',
      description: 'Customer experience specialist who has helped thousands of teams optimize their workflows. Former Director at Salesforce.',
      expertise: ['Customer Success', 'Team Training', 'Process Optimization'],
      education: 'Harvard Business School - MBA'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Security',
      description: 'Cybersecurity expert with 12+ years protecting enterprise data. Former Security Architect at Amazon Web Services.',
      expertise: ['Enterprise Security', 'Compliance', 'Data Protection'],
      education: 'MIT - MS Cybersecurity'
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Human-Centered AI',
      description: 'We believe AI should amplify human potential, not replace it. Every feature we build puts people first.',
      examples: ['Intuitive interfaces', 'Transparent AI decisions', 'Human oversight controls']
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Privacy & Security',
      description: 'Your data is sacred. We implement the highest security standards and never compromise on privacy.',
      examples: ['End-to-end encryption', 'GDPR compliance', 'Zero data mining']
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: 'Global Accessibility',
      description: 'Great productivity tools should be available to everyone, everywhere, in their preferred language.',
      examples: ['25+ languages', 'Global data centers', 'Inclusive design']
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: 'Continuous Innovation',
      description: 'We never stop improving. Our AI learns, our features evolve, and our impact grows every day.',
      examples: ['Weekly updates', 'AI model improvements', 'User feedback integration']
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'AI TaskMaster was born from the frustration of managing scattered workflows in remote teams.',
      achievement: 'Secured $2M seed funding'
    },
    {
      year: '2022',
      title: 'First 1,000 Users',
      description: 'Reached our first milestone with early adopters from tech startups and design agencies.',
      achievement: 'Beta launch success'
    },
    {
      year: '2023',
      title: 'AI Breakthrough',
      description: 'Launched revolutionary AI auto-assignment feature, achieving 40% productivity improvement.',
      achievement: '10,000+ active teams'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to serve teams in 100+ countries with multi-language support.',
      achievement: 'Series A: $15M funding'
    },
    {
      year: '2024',
      title: 'Enterprise Ready',
      description: 'Achieved SOC 2 Type II compliance and launched enterprise features for large organizations.',
      achievement: '50,000+ teams served'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Named "Best AI Tool 2024" by TechCrunch and achieved 4.9/5 customer satisfaction rating.',
      achievement: 'Award-winning platform'
    }
  ];

  const partnerships = [
    {
      name: 'Microsoft',
      type: 'Technology Partner',
      description: 'Deep integration with Microsoft 365 ecosystem'
    },
    {
      name: 'Google',
      type: 'Cloud Partner',
      description: 'Powered by Google Cloud infrastructure'
    },
    {
      name: 'Slack',
      type: 'Integration Partner',
      description: 'Official Slack app directory partner'
    },
    {
      name: 'AWS',
      type: 'Infrastructure Partner',
      description: 'Enterprise hosting and security'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'USA',
      type: 'Headquarters',
      address: '123 Innovation Street, Tech City, CA 94105',
      team: '45 employees'
    },
    {
      city: 'London',
      country: 'UK',
      type: 'European Office',
      address: '456 Tech Hub, London EC2A 4DP',
      team: '25 employees'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      type: 'APAC Office',
      address: '789 Business District, Singapore 018956',
      team: '15 employees'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning AI Task Management Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Revolutionizing How Teams
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Founded in 2022 by AI researchers and productivity experts, AI TaskMaster has grown to serve 
              <strong className="text-blue-600"> 50,000+ teams across 150+ countries</strong>, helping them save 
              40% of their time through intelligent automation.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center text-blue-600 mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that technology should amplify human potential, not complicate it. 
                AI TaskMaster was born from the frustration of managing scattered workflows and 
                inefficient task distribution in remote teams.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to create an AI-powered assistant that understands your team's 
                unique dynamics and continuously optimizes productivity without adding complexity. 
                We're building the future where teams can focus on what matters most: creating 
                amazing products and serving their customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Rocket className="w-12 h-12 text-purple-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To become the world's most trusted AI-powered productivity platform, enabling 
                every team to achieve their full potential through intelligent automation and 
                seamless collaboration.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a world where mundane tasks are automated, human creativity is 
                unleashed, and teams can accomplish extraordinary things together, regardless 
                of where they are in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  {value.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{value.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{value.description}</p>
                <ul className="space-y-2">
                  {value.examples.map((example, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Zap className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to serving teams worldwide - here's how we got here
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 mb-3">{milestone.description}</p>
                      <div className="text-sm font-semibold text-green-600">{milestone.achievement}</div>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate experts from world-class companies, united by a vision to revolutionize team productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  <strong>Education:</strong> {member.education}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across three continents, we're close to our customers worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl text-center">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city}, {office.country}</h3>
                <p className="text-blue-600 font-semibold mb-4">{office.type}</p>
                <p className="text-gray-600 text-sm mb-3">{office.address}</p>
                <p className="text-gray-700 font-medium">{office.team}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Strategic Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with industry leaders to provide the best possible experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-gray-400 mb-3">{partner.name}</div>
                <p className="text-blue-600 font-semibold text-sm mb-2">{partner.type}</p>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than just software - we're creating a culture of innovation and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Remote-First Culture</h3>
              <p className="text-gray-700">Work from anywhere in the world with flexible hours and unlimited PTO.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Opportunities</h3>
              <p className="text-gray-700">$5,000 annual learning budget and mentorship from industry leaders.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Benefits</h3>
              <p className="text-gray-700">Health, dental, vision insurance plus equity participation for all employees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're looking to transform your team's productivity or join our growing company, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/pricing"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;