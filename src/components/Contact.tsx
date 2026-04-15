import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Zap } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // You can add actual form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-section" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            💌 Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
        </div>

        {/* Availability Banner */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-1 rounded-2xl animate-pulse">
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold text-white">✅ Actively Looking for Work</span>
              </div>
              <p className="text-gray-300">Available for full-time positions</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">raghavtiwari972003@email.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">+91 9993800465</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Remote / Indore, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Response Time</h4>
              <p className="text-gray-300 mb-2">📧 Email: Within 24 hours</p>
              <p className="text-gray-300">💬 Messages: Same day response</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <form action="https://formspree.io/f/mqabvadg" method="POST" className="space-y-6">
              <div className="group">
                <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="group">
                <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 p-1 rounded-full animate-pulse">
            <div className="bg-gray-900 px-6 py-3 rounded-full">
              <span className="text-white font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Let's Build Something Amazing Together
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;