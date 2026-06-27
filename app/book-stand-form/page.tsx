"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

const PRODUCT_CATEGORIES = [
  {
    title: "Consumer Tech & Entertainment",
    items: [
      "Consumer Electronics", "Home Entertainment", "Telecommunications",
      "In-Vehicle Electronics", "Digital Imaging Equipment", "Healthcare Electronics",
      "Wearables", "Car & Home systems", "Wireless", "IOT Devices"
    ]
  },
  {
    title: "Home & Kitchen Appliances",
    items: [
      "Large Appliances", "Kitchen Appliances", "Home Appliances",
      "Personal Care Appliances", "Smart Pool Automation"
    ]
  },
  {
    title: "Components & Production Technology",
    items: [
      "Electronic Components & Equipment", "Active & Passive Components",
      "Components & Production Technology", "Semiconductors", "Discrete Components",
      "Assemblies and Subsystems", "Display manufacturing", "PCB and other Circuit-Carrier Manufacturing",
      "Electronics Manufacturing Technologies", "Hybrid-Component Manufacturing",
      "Micro-nano production (MEMS)", "Sensors & Sensor Technology", "Electronic Design (ED/EDA)"
    ]
  },
  {
    title: "IT, Automation & Robotics",
    items: [
      "IT & Digital solutions", "Computers and Peripherals", "Computer Storage Solutions",
      "Office Automation and Equipment", "Automation & IoT", "Smart Security",
      "IoT Software and Solutions", "Embedded Systems, Products & Technologies",
      "Robotics", "Medical Electronics", "Fire Protection Systems",
      "Manufacturers of Light Emitting Diodes(LED)", "Automotive & EV solutions",
      "Automobile Electronic Components", "Electronic Manufacturing Service Providers"
    ]
  }
];

const NATURE_OF_BUSINESS = [
  "Manufacturer", "Brand Owner", "E-Tailers", "Importers", "Designer",
  "Exporter", "Importer", "Trading company", "Service provider", "Startup",
  "Trade Body", "Trade Association"
];

export default function BookStandFormPage() {
  const [formData, setFormData] = useState({
    txt_name: '',
    des: '',
    txt_co_name: '',
    txt_mobile: '',
    bemail: '',
    title: 'Standard booth', // Space Requirement
    comment: '',
    nob: '' // Nature of Business
  });

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedCategories.length === 0) {
      setStatus('error');
      setStatusMessage('Please select at least one Product Category.');
      return;
    }

    setStatus('submitting');

    try {
      // Replicate jQuery's .serialize() via URLSearchParams
      const payload = new URLSearchParams();
      payload.append('txt_name', formData.txt_name);
      payload.append('des', formData.des);
      payload.append('txt_co_name', formData.txt_co_name);
      payload.append('txt_mobile', formData.txt_mobile);
      payload.append('bemail', formData.bemail);
      payload.append('title', formData.title);
      payload.append('comment', formData.comment);
      payload.append('nob', formData.nob);

      // Append checkboxes using the same key name to match jQuery serialize
      selectedCategories.forEach(category => {
        payload.append('exampleRadios', category);
      });

      const response = await fetch('https://api.worldexindia.com/ceifair/php/controller/buyerController.php?type=bookStand', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString()
      });

      const text = await response.text();
      let res;
      try {
        res = JSON.parse(text);
      } catch {
        // Fallback if the response is not valid JSON
        res = { status: text.includes('Success') ? 'Success' : 'Error', message: text };
      }

      if (res.status === 'Success') {
        setStatus('success');
        setStatusMessage(res.message || 'Registration request submitted successfully!');
        // Reset form
        setFormData({
          txt_name: '',
          des: '',
          txt_co_name: '',
          txt_mobile: '',
          bemail: '',
          title: 'Standard booth',
          comment: '',
          nob: ''
        });
        setSelectedCategories([]);
      } else {
        setStatus('error');
        setStatusMessage(res.message || 'Something went wrong, please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error occurred. Please check your internet connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pt-48 pb-24 md:pt-56">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-[#009ad7] tracking-widest uppercase block mb-3">Exhibitor Registration</span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-800 leading-tight">Book Your Stand</h2>
          <div className="w-16 h-[2px] bg-[#009ad7] mx-auto mt-5"></div>
        </div>

        {/* Glassmorphic Form Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Basic Information Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="txt_name"
                  value={formData.txt_name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#009ad7] focus:ring-1 focus:ring-[#009ad7] transition-all bg-gray-50/50"
                />
              </div>

              {/* Designation */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Designation <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="des"
                  value={formData.des}
                  onChange={handleInputChange}
                  required
                  placeholder="Job Title"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#009ad7] focus:ring-1 focus:ring-[#009ad7] transition-all bg-gray-50/50"
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Company Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="txt_co_name"
                  value={formData.txt_co_name}
                  onChange={handleInputChange}
                  required
                  placeholder="Organization / Company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#009ad7] focus:ring-1 focus:ring-[#009ad7] transition-all bg-gray-50/50"
                />
              </div>

              {/* Mobile */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Mobile No <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="txt_mobile"
                  value={formData.txt_mobile}
                  onChange={handleInputChange}
                  required
                  placeholder="Mobile / Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#009ad7] focus:ring-1 focus:ring-[#009ad7] transition-all bg-gray-50/50"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-sm font-semibold text-gray-700">Email ID <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="bemail"
                  value={formData.bemail}
                  onChange={handleInputChange}
                  required
                  placeholder="corporate@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#009ad7] focus:ring-1 focus:ring-[#009ad7] transition-all bg-gray-50/50"
                />
              </div>
            </div>

            {/* Space Requirement & Comments */}
            <div className="grid gap-6 sm:grid-cols-2 pt-4 border-t border-gray-100">
              
              {/* Space Requirement Options */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-gray-700">Space Requirement <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-4 mt-1">
                  {["Standard booth", "Raw space", "N/A"].map((option) => (
                    <label key={option} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="title"
                        value={option}
                        checked={formData.title === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#009ad7] border-gray-300 focus:ring-[#009ad7]"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Comments */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Comment</label>
                <input
                  type="text"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Special requests or comments"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#009ad7] focus:ring-1 focus:ring-[#009ad7] transition-all bg-gray-50/50"
                />
              </div>
            </div>

            {/* Nature of Business */}
            <div className="flex flex-col gap-1.5 pt-4 border-t border-gray-100">
              <label className="text-sm font-semibold text-gray-700">Nature of Business <span className="text-red-500">*</span></label>
              <select
                name="nob"
                value={formData.nob}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#009ad7] focus:ring-1 focus:ring-[#009ad7] transition-all bg-gray-50/50 text-gray-700"
              >
                <option value="" disabled>Select Nature of Business</option>
                {NATURE_OF_BUSINESS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Product Category Groupings */}
            <div className="pt-6 border-t border-gray-100">
              <label className="text-sm font-semibold text-gray-700 block mb-4">
                Product Category <span className="text-red-500">*</span> <span className="text-xs font-normal text-gray-500">(Select all that apply)</span>
              </label>

              <div className="space-y-6">
                {PRODUCT_CATEGORIES.map((group) => (
                  <div key={group.title} className="bg-gray-50/40 p-5 rounded-lg border border-gray-100">
                    <h4 className="text-xs font-bold text-[#009ad7] tracking-wider uppercase mb-3">{group.title}</h4>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <label key={item} className="flex items-start gap-2.5 text-sm text-gray-600 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(item)}
                            onChange={() => handleCategoryChange(item)}
                            className="w-4.5 h-4.5 rounded border-gray-300 text-[#009ad7] focus:ring-[#009ad7] mt-0.5"
                          />
                          <span className="leading-tight">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8 border-t border-gray-100 flex justify-center">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-12 py-3 bg-[#009ad7] hover:bg-[#0081b5] text-white font-medium rounded-full text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Registration</span>
                )}
              </button>
            </div>

          </form>

          {/* Feedback Modal Overlay */}
          <AnimatePresence>
            {status !== 'idle' && status !== 'submitting' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 15 }}
                  className="max-w-md w-full text-center space-y-5 p-8 border border-gray-100 rounded-2xl shadow-xl bg-white"
                >
                  {status === 'success' ? (
                    <div className="flex flex-col items-center">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mb-2" />
                      <h3 className="text-2xl font-bold text-gray-800">Registration Complete!</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">{statusMessage}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <XCircle className="w-16 h-16 text-red-500 mb-2" />
                      <h3 className="text-2xl font-bold text-gray-800">Submission Failed</h3>
                      <p className="text-red-500/80 mt-2 leading-relaxed">{statusMessage}</p>
                    </div>
                  )}

                  <button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-all duration-300"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
