import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Star } from 'lucide-react';
import { createCheckoutSession, STRIPE_PRICES } from '../lib/stripe';

const CheckCircle = ({ className }: { className: string }) => (
  <Check className={className} />
);

const Shield = ({ className }: { className: string }) => (
  <div className={`${className} flex items-center justify-center`}>🛡️</div>
);

const Pricing = () => {
  const handleSubscribe = async (priceId: string) => {
    try {
      await createCheckoutSession(priceId);
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to start subscription. Please try again.');
    }
  };

  const plans = [
    {
      name: 'Free',
      price: '€0',
      period: 'forever',
      description: 'Perfect for small teams getting started with AI task management',
      features: [
        { name: 'Up to 5 team members', included: true },
        { name: 'Basic task management', included: true },
        { name: '10 AI auto-assignments/month', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Email support', included: true },
        { name: 'Unlimited AI auto-assignments', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Custom integrations', included: false },
        { name: 'Priority support', included: false }
      ],
      cta: 'Start Free Forever',
      popular: false,
      priceId: null
    },
    {
      name: 'Pro',
      price: '€19',
      period: 'per user/month',
      description: 'Advanced AI features for growing teams (Most Popular)',
      features: [
        { name: 'Unlimited team members', included: true },
        { name: 'Advanced task management', included: true },
        { name: 'Unlimited AI auto-assignments', included: true },
        { name: 'Real-time collaboration', included: true },
        { name: 'Predictive analytics dashboard', included: true },
        { name: 'All integrations', included: true },
        { name: 'Priority support', included: true },
        { name: 'Custom workflows', included: true },
        { name: 'API access', included: false }
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
      priceId: STRIPE_PRICES.PRO_MONTHLY
    },
    {
      name: 'Enterprise',
      price: '€99',
      period: 'per user/month',
      description: 'Custom AI solutions for large organizations (500+ employees)',
      features: [
        { name: 'Everything in Pro', included: true },
        { name: 'Custom AI models', included: true },
        { name: 'SOC 2 Type II compliance', included: true },
        { name: 'Dedicated customer success manager', included: true },
        { name: 'Custom integrations', included: true },
        { name: '99.9% uptime SLA', included: true },
        { name: 'On-premise deployment', included: true },
        { name: 'Training & onboarding', included: true },
        { name: 'API access', included: true }
      ],
      cta: 'Schedule Demo',
      popular: false,
      priceId: STRIPE_PRICES.ENTERPRISE_MONTHLY
    }
  ];

  const faqs = [
    {
      question: 'How does the 14-day free trial work?',
      answer: 'Start with full Pro features for 14 days, no credit card required. You can cancel anytime during the trial period without any charges. After the trial, choose to continue with Pro, downgrade to Free, or upgrade to Enterprise.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You can export all your data at any time in multiple formats (CSV, JSON, PDF). We retain your data for 90 days after cancellation, giving you time to reactivate or export if needed. All data is permanently deleted after 90 days for security.'
    },
    {
      question: 'Is my data secure and GDPR compliant?',
      answer: 'Absolutely. We are SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data is stored in secure European data centers with regular security audits and 99.9% uptime SLA.'
    },
    {
      question: 'Can I change or cancel my plan anytime?',
      answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Upgrades take effect immediately, while downgrades and cancellations take effect at the end of your current billing cycle. No cancellation fees.'
    },
    {
      question: 'Do you offer discounts for non-profits and educational institutions?',
      answer: 'Yes! We offer 50% discounts for qualified non-profit organizations and educational institutions. We also provide volume discounts for teams over 100 users. Contact our sales team for custom pricing.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'Free users get email support with 48-hour response time. Pro users get priority support with 24-hour response. Enterprise customers get dedicated support with 4-hour response time, phone support, and a dedicated customer success manager.'
    },
    {
      question: 'How does AI auto-assignment actually work?',
      answer: 'Our AI analyzes team member skills, current workload, availability, past performance, and task complexity to make intelligent assignments. It learns from your team\'s patterns and gets smarter over time, resulting in 40% faster task completion on average.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Trusted by 50,000+ teams worldwide
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
            <br />
            <span className="text-blue-600">That Scales With You</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Start free forever. Upgrade when you're ready. Cancel anytime. 
            <strong className="text-blue-600"> Save 40% time from day one.</strong>
          </p>
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
              <div className="flex">
                <button className="px-4 py-2 rounded-md bg-white text-gray-900 font-medium shadow-sm">
                  Monthly
                </button>
                <button className="px-4 py-2 rounded-md text-gray-600 font-medium">
                  Annual <span className="text-green-600 font-bold">(Save 25%)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 transition-all hover:shadow-xl ${plan.popular ? 'border-blue-600 shadow-2xl scale-105' : 'border-gray-200 hover:border-blue-300'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                    {plan.name === 'Pro' && (
                      <div className="text-green-600 text-sm font-semibold mt-2">
                        💰 Save €57/year with annual billing
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => {
                      if (plan.name === 'Free') {
                        // Redirect to signup for free plan
                        window.location.href = '/';
                      } else if (plan.name === 'Enterprise') {
                        // Redirect to contact for enterprise
                        window.location.href = '/contact';
                      } else if (plan.priceId) {
                        handleSubscribe(plan.priceId);
                      } else if (plan.priceId) {
                        handleSubscribe(plan.priceId);
                      }
                    }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg' 
                        : 'bg-gray-100 text-gray-900 hover:bg-blue-50 hover:text-blue-600 border-2 border-transparent hover:border-blue-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`${feature.included ? 'text-gray-900 font-medium' : 'text-gray-400'} leading-relaxed`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Money Back Guarantee */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-green-50 text-green-800 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-semibold">30-Day Money-Back Guarantee</span>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Not satisfied? Get a full refund within 30 days, no questions asked. 
              We're confident AI TaskMaster will transform your team's productivity.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about AI TaskMaster pricing and features
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join 50,000+ Teams Already Saving 40% Time
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Start your free trial today and experience the future of team productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/pricing"
              className="bg-white text-blue-600 px-12 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-colors shadow-2xl"
            >
              Start Free Trial - No Credit Card Required
            </Link>
            <Link to="/contact" className="text-white underline hover:text-blue-200 font-semibold">
              Questions? Talk to our team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;