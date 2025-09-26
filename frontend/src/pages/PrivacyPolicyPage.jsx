import React, { useState, useEffect } from 'react';
import { Shield, Eye, Lock, Users, Globe, Mail, FileText, Check, ChevronDown, ChevronRight } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement industry-leading security measures to protect your personal information."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about what data we collect, how we use it, and who we share it with."
    },
    {
      icon: Lock,
      title: "Your Control",
      description: "You have full control over your data with options to access, update, or delete it anytime."
    },
    {
      icon: Users,
      title: "Minimal Collection",
      description: "We only collect data that's necessary to provide you with the best possible experience."
    }
  ];

  const sections = [
    {
      id: 'overview',
      title: 'Privacy Policy Overview',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            At our company, protecting your privacy is fundamental to how we operate. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This policy applies to all information collected through our website, mobile applications, and any related services, sales, marketing, or events (collectively referred to as the "Services").
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-blue-800 font-medium">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Name, email address, phone number, and shipping address</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Payment information (processed securely through third-party providers)</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Account preferences and communication choices</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Browser type, device information, and IP address</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Pages visited, time spent on our site, and click patterns</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Cookies and similar tracking technologies</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We use the information we collect for various purposes, always in accordance with this Privacy Policy and applicable laws:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Service Delivery</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Process and fulfill orders</li>
                <li>• Provide customer support</li>
                <li>• Send order confirmations and updates</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Send promotional emails (with consent)</li>
                <li>• Respond to inquiries</li>
                <li>• Provide important updates</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Improvement</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Analyze website usage</li>
                <li>• Enhance user experience</li>
                <li>• Develop new features</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Comply with legal obligations</li>
                <li>• Prevent fraud and abuse</li>
                <li>• Protect our rights</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
              <p className="text-gray-600 text-sm">
                We work with trusted third-party service providers who help us operate our business (payment processors, shipping companies, email services). These partners are bound by strict confidentiality agreements.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
              <p className="text-gray-600 text-sm">
                We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Business Transfers</h4>
              <p className="text-gray-600 text-sm">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, with the same privacy protections.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-security',
      title: 'Data Security and Retention',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Security Measures</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg text-center">
                <Lock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h5 className="font-medium text-gray-900">Encryption</h5>
                <p className="text-sm text-gray-600">SSL/TLS encryption for all data transmission</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h5 className="font-medium text-gray-900">Access Control</h5>
                <p className="text-sm text-gray-600">Restricted access to personal information</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h5 className="font-medium text-gray-900">Monitoring</h5>
                <p className="text-sm text-gray-600">Continuous security monitoring and updates</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Retention</h4>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Account information is typically retained for 7 years after account closure for legal and regulatory compliance.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Access</h4>
                  <p className="text-sm text-gray-600">Request a copy of the personal information we hold about you</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Correction</h4>
                  <p className="text-sm text-gray-600">Update or correct inaccurate personal information</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Deletion</h4>
                  <p className="text-sm text-gray-600">Request deletion of your personal information</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <Lock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Portability</h4>
                  <p className="text-sm text-gray-600">Receive your data in a structured, machine-readable format</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg mr-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Opt-out</h4>
                  <p className="text-sm text-gray-600">Unsubscribe from marketing communications at any time</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-lg mr-3">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Object</h4>
                  <p className="text-sm text-gray-600">Object to processing based on legitimate interests</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="text-blue-800 font-medium mb-2">How to Exercise Your Rights</p>
            <p className="text-blue-700 text-sm">
              To exercise any of these rights, please contact us at privacy@company.com or use our online privacy request form. We will respond to your request within 30 days.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
              <p className="text-gray-600 text-sm">
                These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
              <p className="text-gray-600 text-sm">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
              <p className="text-gray-600 text-sm">
                These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            You can control cookie settings through your browser preferences or our cookie consent manager available on our website.
          </p>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy or our privacy practices, please don't hesitate to contact us:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-4">Privacy Officer</h4>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Email:</strong> privacy@company.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-700"><strong>Address:</strong> 123 Privacy Lane, Suite 100, City, State 12345</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-4">Response Times</h4>
              <div className="space-y-2">
                <p className="text-gray-700">General inquiries: <strong>24-48 hours</strong></p>
                <p className="text-gray-700">Privacy requests: <strong>30 days</strong></p>
                <p className="text-gray-700">Data breaches: <strong>72 hours</strong></p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Privacy
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Policy
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information 
            when you use our services.
          </p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Privacy Principles</h2>
            <p className="text-lg text-gray-600">The foundation of our approach to data protection</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    <principle.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                {expandedSections[section.id] && (
                  <div className="px-8 pb-8 border-t border-gray-100">
                    <div className="pt-6">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;