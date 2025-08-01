import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  CheckCircle, 
  Award, 
  Globe,
  Users,
  FileText,
  AlertTriangle,
  Key,
  Database
} from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-12 h-12 text-blue-600" />,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256) using industry-leading encryption standards.',
      details: [
        'TLS 1.3 for data in transit',
        'AES-256 encryption at rest',
        'Zero-knowledge architecture',
        'Encrypted database backups'
      ]
    },
    {
      icon: <Server className="w-12 h-12 text-green-600" />,
      title: 'Secure Infrastructure',
      description: 'Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA and automated security monitoring.',
      details: [
        'AWS/Google Cloud hosting',
        '99.9% uptime guarantee',
        '24/7 security monitoring',
        'Automated threat detection'
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: 'Access Controls',
      description: 'Granular role-based permissions, multi-factor authentication, and single sign-on integration.',
      details: [
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA)',
        'Single Sign-On (SSO)',
        'Session management'
      ]
    },
    {
      icon: <Eye className="w-12 h-12 text-orange-600" />,
      title: 'Audit & Monitoring',
      description: 'Comprehensive audit logs, real-time monitoring, and detailed security reporting for compliance.',
      details: [
        'Complete audit trails',
        'Real-time activity monitoring',
        'Security incident alerts',
        'Compliance reporting'
      ]
    }
  ];

  const certifications = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      name: 'SOC 2 Type II',
      description: 'Independently audited for security, availability, and confidentiality'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      name: 'ISO 27001',
      description: 'International standard for information security management'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      name: 'GDPR Compliant',
      description: 'Full compliance with European data protection regulations'
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      name: 'HIPAA Ready',
      description: 'Healthcare-grade security for sensitive data handling'
    }
  ];

  const dataProtection = [
    {
      title: 'Data Residency',
      description: 'Choose where your data is stored with regional data centers in US, EU, and Asia-Pacific.',
      icon: <Globe className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Data Backup',
      description: 'Automated daily backups with 30-day retention and point-in-time recovery.',
      icon: <Database className="w-6 h-6 text-green-600" />
    },
    {
      title: 'Data Portability',
      description: 'Export your data anytime in standard formats (JSON, CSV, XML).',
      icon: <FileText className="w-6 h-6 text-purple-600" />
    },
    {
      title: 'Data Deletion',
      description: 'Complete data deletion within 30 days of account termination.',
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />
    }
  ];

  const securityPractices = [
    'Regular security audits by third-party firms',
    'Penetration testing every 6 months',
    'Employee security training and background checks',
    'Incident response plan with 4-hour notification',
    'Vulnerability management program',
    'Secure development lifecycle (SDLC)',
    'Regular security updates and patches',
    'Business continuity and disaster recovery'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade <span className="text-blue-600">Security</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your data security is our top priority. AI TaskMaster is built with enterprise-grade 
            security controls, compliance certifications, and privacy protection.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              SOC 2 Type II Certified
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              99.9% Uptime SLA
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Security Controls</h2>
            <p className="text-xl text-gray-600">Multi-layered security architecture protecting your data at every level</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Certifications</h2>
            <p className="text-xl text-gray-600">Independently verified security and compliance standards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Protection & Privacy</h2>
            <p className="text-xl text-gray-600">Complete control over your data with transparent privacy practices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataProtection.map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Security Practices</h2>
            <p className="text-xl text-blue-100">
              Continuous security improvements and industry best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityPractices.map((practice, index) => (
              <div key={index} className="flex items-center p-4 bg-blue-500 bg-opacity-30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" />
                <span className="text-blue-100">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Team */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Key className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dedicated Security Team</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our security experts work around the clock to protect your data and maintain the highest security standards.
          </p>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Contact</h3>
            <p className="text-gray-600 mb-4">
              Report security vulnerabilities or concerns directly to our security team:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> security@aitaskmaster.com</p>
              <p><strong>Response Time:</strong> Within 4 hours</p>
              <p><strong>PGP Key:</strong> Available upon request</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Enterprise-Grade Security?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial and experience the most secure task management platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/pricing"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Security Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;