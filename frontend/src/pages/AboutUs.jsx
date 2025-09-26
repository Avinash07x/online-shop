import React, { useState, useEffect } from 'react';
import { Heart, Users, Award, Globe, ShoppingBag, Truck, Shield, Star } from 'lucide-react';
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    products: 0,
    countries: 0,
    years: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Animate counters
    const timer = setTimeout(() => {
      const targetValues = {
        customers: 50000,
        products: 10000,
        countries: 25,
        years: 8
      };

      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      const counterInterval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          customers: Math.floor(targetValues.customers * progress),
          products: Math.floor(targetValues.products * progress),
          countries: Math.floor(targetValues.countries * progress),
          years: Math.floor(targetValues.years * progress)
        });

        if (currentStep >= steps) {
          clearInterval(counterInterval);
        }
      }, interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "10+ years in retail innovation"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former tech lead at major platforms"
    },
    {
      name: "Emma Johnson",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning UX designer"
    },
    {
      name: "David Kim",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Supply chain optimization expert"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with our customers in mind. We're committed to delivering exceptional experiences that exceed expectations."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We protect your data and ensure secure transactions with industry-leading security measures and transparent practices."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building a sustainable future by connecting local artisans with global markets and reducing our environmental footprint."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We curate only the finest products and maintain rigorous quality standards to ensure you receive the best."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id='AboutUs'
        className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Commerce
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              With Purpose
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're more than just an online store. We're a community of creators, innovators, and dreamers
            building the future of retail through technology, sustainability, and human connection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-gray-700 font-medium">4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <Truck className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-gray-700 font-medium">Free Shipping Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{counters.customers.toLocaleString()}+</div>
                <p className="text-gray-600 font-medium">Happy Customers</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300">
                <ShoppingBag className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{counters.products.toLocaleString()}+</div>
                <p className="text-gray-600 font-medium">Products</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300">
                <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{counters.countries}+</div>
                <p className="text-gray-600 font-medium">Countries</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300">
                <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{counters.years}+</div>
                <p className="text-gray-600 font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  It all started in 2016 when our founder, Sarah Chen, noticed a gap in the market for
                  high-quality, ethically-sourced products that didn't compromise on style or sustainability.
                  What began as a small passion project in a garage has grown into a global platform
                  serving customers in over 25 countries.
                </p>
                <p>
                  We believe that commerce should be a force for good. That's why we partner with
                  artisans, small businesses, and sustainable manufacturers who share our values of
                  quality, integrity, and environmental responsibility.
                </p>
                <p>
                  Today, we're proud to be more than just a marketplace – we're a community that
                  celebrates craftsmanship, innovation, and the stories behind every product we sell.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                  alt="Our story"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every relationship we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-6 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind our success, dedicated to creating exceptional experiences for our customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-white shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-24 h-24 mx-auto"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of a community that values quality, sustainability, and authentic connections.
            Discover products with stories worth sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collection">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Shop Our Collection
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;