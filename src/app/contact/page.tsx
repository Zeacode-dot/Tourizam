"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-14 text-white text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f97150]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact Travel Tour
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Our expert journey planners are available 24/7 to craft your dream itinerary and assist with any booking inquiries.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#f97150] flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900">Phone & WhatsApp</h3>
            <p className="text-xs text-slate-500">Toll-Free Worldwide Assistance</p>
            <a
              href="tel:1820334533"
              className="text-sm font-bold text-[#f97150] hover:underline block"
            >
              1.820.3345.33
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#f97150] flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900">Email Inquiries</h3>
            <p className="text-xs text-slate-500">Fast response within 2 hours</p>
            <a
              href="mailto:contact@traveltour.com"
              className="text-sm font-bold text-[#f97150] hover:underline block"
            >
              contact@traveltour.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#f97150] flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900">Global Head Office</h3>
            <p className="text-xs text-slate-500">Melbourne HQ, Australia</p>
            <span className="text-xs font-semibold text-slate-700 block">
              12 South Burlington, Victoria 3000
            </span>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Message Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                Thank you for contacting us. A dedicated journey specialist will review your request and get in touch within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#f97150] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Have a custom destination in mind or need assistance with your booking?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Custom Tour Inquiry / Booking Assistance"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your travel dates, preferred destinations, or group size..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#f97150]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#f97150] hover:bg-[#e85e34] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
