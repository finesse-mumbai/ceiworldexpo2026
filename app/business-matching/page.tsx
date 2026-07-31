"use client";

import React, { useState } from 'react';
import { Building2, Calendar, Clock, MessageSquare, User, Mail, Phone, Briefcase, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

// Placeholder array for companies until we get the excel file content
const COMPANY_LIST = [
  "Select Company",
  "GUANGDONG ZHAOLI MOTOR GROUP CO., LTD - Consumer Electronics",
  "CIXI GAITE ELECTRIC CO.,LTD - Consumer Electronics",
  "KELI MOTOR GROUP CO., LTD. - Home Appliances",
  "YUYAO ZHONGHONG ELECTRIC APPLIANCE CO ., LTD - Consumer Electronics",
  "SHENZHEN YUYUANXIN ELECTRONIC TECHNOLOGY CO.,LTD - Electronic Components",
  "ANIONTE INTERNATIONAL (ZHEJIANG)CO., LTD - Home Appliances",
  "ZHONGSHAN REALLINK ELECTRIC APPLIANCES CO.,LTD. - Home Appliances",
  "CIXI UTRUST ELECTRIC APPLIANCE CO.,LTD. - Electronic Components",
  "CIXI BEILIAN ELECTRICAL APPLIANCE CO., LTD. - Consumer Electronics",
  "NINGBO PUBEI ELECTRICAL APPLIANCE CO., LTD. - Electronic Components",
  "CIXI FUYUN ELECTRIC APPLIANCE CO.,LTD - Electronic Components",
  "NINGBO TIANXIANG ELECTRICAL APPLIANCES CO., LTD. - Home Appliances",
  "ZHONGSHAN RUIJEEP ELECTRICAL CO., LTD - Home Appliances",
  "FOSHAN JINLAN HEATING APPLIANCE CO., LTD. - Electronic Components",
  "SHENZHEN JINTONGTAI PLASTIC ELECTRONICS CO., LTD. - Consumer Electronics",
  "FOSHAN CITY SHUNDE DISTRICT HONGYE ELECTRICAL APPLIANCES CO., LTD. - Home Appliances",
  "NINGBO BOXIKE HARDWARE TOOLS CO., LTD - Consumer Electronics",
  "SANLIDA ELECTRICAL TECHNOLOGY CO., LTD - Home Appliances",
  "SHENZHEN XINYANG SEMICONDUCTOR APPLICATION TECHNOLOGY CO., LTD. - Electronic Components",
  "NINGBO RUNSHANG HOME APPLIANCES CO.,LTD - Home Appliances",
  "SHENZHEN YUANSU CHUANGDA TECHNOLOGY CO., LTD. - Consumer Electronics",
  "FOSHAN SHUDA ELECTRICAPPLIANCE CO.LTD - Consumer Electronics",
  "SHENZHEN TIANZHENGDA ELECTRONICS CO.,LTD. - Electronic Components",
  "SHENZHEN XINYU ELECTRONICS CO., LTD. - Consumer Electronics",
  "DONGGUAN ZERO ONE CREATIVE ELECTRONIC TECHNOLOGY CO.,LTD - Consumer Electronics",
  "SHENZHEN YUANPU TECHNOLOGY CO., LIMITED - Home Appliances",
  "GUANGZHOU XINYUE E-COMMERCE CO., LTD. - Home Appliances",
  "HUAYUN ELECTRIC MOTOR (SHENZHEN) CO., LTD. - Electronic Components",
  "S.A.S GT COMPANY - Consumer Electronics"
];

export default function BusinessMatching() {
  const [formData, setFormData] = useState<{
    meetings: { company: string; date: string; timeSlot: string }[];
    specificQuery: string;
    companyName: string;
    personName: string;
    designation: string;
    emailAddress: string;
    mobileNo: string;
    hasRegisteredVisitor: string;
  }>({
    meetings: [{ company: '', date: '', timeSlot: '' }],
    specificQuery: '',
    companyName: '',
    personName: '',
    designation: '',
    emailAddress: '',
    mobileNo: '',
    hasRegisteredVisitor: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMeetingChange = (index: number, field: string, value: string) => {
    setFormData(prev => {
      const newMeetings = [...prev.meetings];
      newMeetings[index] = { ...newMeetings[index], [field]: value };
      return { ...prev, meetings: newMeetings };
    });
  };

  const addMeetingSlot = () => {
    setFormData(prev => {
      if (prev.meetings.length >= 5) return prev;
      return {
        ...prev,
        meetings: [...prev.meetings, { company: '', date: '', timeSlot: '' }]
      };
    });
  };

  const removeMeetingSlot = (index: number) => {
    setFormData(prev => {
      const newMeetings = [...prev.meetings];
      newMeetings.splice(index, 1);
      return { ...prev, meetings: newMeetings };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (formData.meetings.some(m => !m.company || !m.date || !m.timeSlot)) {
        setStatus({ type: 'error', message: 'Please select Company, Date, and Time Slot for all meeting slots.' });
        setIsSubmitting(false);
        return;
    }

    if (!formData.hasRegisteredVisitor) {
        setStatus({ type: 'error', message: 'Please indicate if you have registered to visit CEI 2026.' });
        setIsSubmitting(false);
        return;
    }

    try {
      const params = new URLSearchParams();
      formData.meetings.forEach(m => {
        params.append('selectedCompany[]', m.company);
        params.append('preferredDate[]', m.date);
        params.append('preferredTimeSlot[]', m.timeSlot);
      });
      params.append('specificQuery', formData.specificQuery);
      params.append('companyName', formData.companyName);
      params.append('personName', formData.personName);
      params.append('designation', formData.designation);
      params.append('emailAddress', formData.emailAddress);
      params.append('mobileNo', formData.mobileNo);
      params.append('hasRegisteredVisitor', formData.hasRegisteredVisitor);

      const response = await fetch('/api/proxy?type=businessMatching', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Invalid response format from server");
      }

      if (result && result.status === 'Success') {
        setStatus({ type: 'success', message: 'Your business matching request has been submitted successfully.' });
        setFormData({
          meetings: [{ company: '', date: '', timeSlot: '' }],
          specificQuery: '',
          companyName: '',
          personName: '',
          designation: '',
          emailAddress: '',
          mobileNo: '',
          hasRegisteredVisitor: ''
        });
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Failed to submit request. Please check your network connection.';
      console.error('Submission error:', error);
      setStatus({ type: 'error', message: errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      <Navbar />
      
      <main className="pt-64 md:pt-72 pb-24">
        {/* Form Container Section */}
        <section className="mx-auto max-w-[95rem] px-4 md:px-8">
          {/* 2-Partition Form Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white relative">
            {/* Ambient Background Glowing Blobs for Refraction */}
            <div className="absolute top-10 left-5 w-44 h-44 rounded-full bg-[#009ad7]/25 blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute bottom-20 left-2 w-48 h-48 rounded-full bg-[#dae020]/15 blur-3xl pointer-events-none" />

            {/* Left side blue patch */}
            <div className="lg:col-span-3 bg-gradient-to-b from-[#009ad7] to-[#007ba8] backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-slate-200/50 p-8 md:p-10 flex flex-col justify-start items-center text-center relative overflow-hidden min-h-[250px] lg:min-h-[600px] lg:pt-16 z-10">
              {/* Decorative backgrounds */}
              <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full bg-[#009ad7]/5 pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-36 h-36 rounded-full bg-[#009ad7]/5 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-2xl lg:text-3xl font-black leading-tight tracking-wider uppercase font-sans">
                  <span className="text-white">Business</span> <br /> <span className="text-white">Matching</span>
                </h2>
                <p className="text-white/90 text-sm mt-4 max-w-xs font-semibold">
                  Schedule your B2B meetings and connect with the right partners for your business growth
                </p>
              </div>
            </div>

            {/* Right side form content */}
            <div className="lg:col-span-9 p-6 md:p-10 bg-slate-50/40 z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status.message && (
                  <div className={`mb-6 p-4 rounded-lg font-semibold ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {status.message}
                  </div>
                )}

                {/* Registration Status Section */}
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Have you registered to visit CEI 2026? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="hasRegisteredVisitor"
                          value="Yes"
                          checked={formData.hasRegisteredVisitor === 'Yes'}
                          onChange={(e) => setFormData(prev => ({ ...prev, hasRegisteredVisitor: e.target.value }))}
                          className="peer w-5 h-5 cursor-pointer appearance-none rounded-full border border-slate-300 bg-white checked:border-[#009ad7] transition-all hover:border-[#009ad7]"
                        />
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#009ad7] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                        Yes
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="hasRegisteredVisitor"
                          value="No"
                          checked={formData.hasRegisteredVisitor === 'No'}
                          onChange={(e) => setFormData(prev => ({ ...prev, hasRegisteredVisitor: e.target.value }))}
                          className="peer w-5 h-5 cursor-pointer appearance-none rounded-full border border-slate-300 bg-white checked:border-[#009ad7] transition-all hover:border-[#009ad7]"
                        />
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-[#009ad7] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                        No
                      </span>
                    </label>
                  </div>

                  {formData.hasRegisteredVisitor === 'No' && (
                    <div className="mt-6 p-8 bg-blue-50 border-2 border-blue-200 rounded-2xl flex flex-col items-center text-center">
                      <p className="text-blue-900 font-black mb-2 text-xl">
                        Business Matching is exclusively for registered visitors.
                      </p>
                      <p className="text-sm text-blue-800 mb-6 font-medium max-w-lg">
                        Please complete your visitor registration first to proceed with booking meetings with our exhibitors.
                      </p>
                      <a href="https://www.ceiworldexpo.com/buyer-reg-form" target="_blank" rel="noopener noreferrer" className="bg-[#009ad7] hover:bg-[#007ba8] text-white font-bold px-10 py-3.5 rounded-xl shadow-lg shadow-[#009ad7]/30 transition-all hover:-translate-y-0.5 uppercase tracking-wider text-sm">
                        Register Now
                      </a>
                    </div>
                  )}
                </div>

                {formData.hasRegisteredVisitor === 'Yes' && (
                  <>
                {/* Meeting Details Section */}
                <div className="border-b border-slate-100 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-bold text-[#10729c] tracking-wide uppercase flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Meeting Details
                    </h4>
                  </div>
                  
                  {formData.meetings.map((meeting, idx) => (
                    <div key={idx} className="bg-slate-100/50 p-4 rounded-xl mb-4 relative border border-slate-200">
                      {formData.meetings.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeMeetingSlot(idx)}
                          className="absolute top-3 right-4 text-red-500 hover:text-red-700 text-sm font-semibold"
                        >
                          Remove
                        </button>
                      )}
                      <h5 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Slot {idx + 1}</h5>
                      <div className="grid gap-4 md:grid-cols-3">
                        {/* Select Company */}
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Company <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={meeting.company}
                            onChange={(e) => handleMeetingChange(idx, 'company', e.target.value)}
                            required
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] font-semibold appearance-none"
                          >
                            {COMPANY_LIST.map((company, cIdx) => (
                              <option key={cIdx} value={company === "Select Company" ? "" : company} disabled={company === "Select Company"}>
                                {company}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Date */}
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Date <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={meeting.date}
                            onChange={(e) => handleMeetingChange(idx, 'date', e.target.value)}
                            required
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] font-semibold appearance-none"
                          >
                            <option value="" disabled>Select Date</option>
                            {["11th August 2026", "12th August 2026", "13th August 2026"].map((date, dIdx) => (
                              <option key={dIdx} value={date}>{date}</option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Time Slot */}
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Time Slot <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={meeting.timeSlot}
                            onChange={(e) => handleMeetingChange(idx, 'timeSlot', e.target.value)}
                            required
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] font-semibold appearance-none"
                          >
                            <option value="" disabled>Select Time Slot</option>
                            {["11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "02:00 PM - 03:00 PM", "03:00 PM - 04:00 PM"].map((time, tIdx) => (
                              <option key={tIdx} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}

                  {formData.meetings.length < 5 && (
                    <button
                      type="button"
                      onClick={addMeetingSlot}
                      className="text-[#009ad7] font-bold text-sm flex items-center gap-1 hover:text-[#007ba8] transition-colors mt-2"
                    >
                      + Add More Slot
                    </button>
                  )}
                  <p className="text-sm text-slate-600 mt-3 font-medium bg-[#009ad7]/5 border border-[#009ad7]/20 p-3 rounded-lg leading-relaxed">
                    <span className="font-bold text-[#009ad7]">Note:</span> You can select a maximum of 5 companies for business matching meetings. However, you are welcome to visit and explore all other product categories and exhibitors during the event.
                  </p>

                  {/* Specific Query / Agenda */}
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Specific Query / Agenda <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                      <textarea 
                        name="specificQuery"
                        value={formData.specificQuery}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Please specify your query or agenda for the meeting..."
                        className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div>
                  <h4 className="text-sm font-bold text-[#10729c] tracking-wide mb-6 uppercase flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Contact Information
                  </h4>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Your Company Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input 
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          placeholder="e.g. ABC Enterprises"
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* Person Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Contact Person Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input 
                          type="text"
                          name="personName"
                          value={formData.personName}
                          onChange={handleChange}
                          required
                          placeholder="e.g. John Doe"
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* Designation */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input 
                          type="text"
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Director"
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input 
                          type="email"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          required
                          placeholder="e.g. user@company.com"
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input 
                          type="tel"
                          name="mobileNo"
                          value={formData.mobileNo}
                          onChange={handleChange}
                          required
                          placeholder="e.g. 9876543210"
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit triggers */}
                <div className="pt-6 flex flex-col items-center justify-center gap-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#009ad7] to-[#007ba8] hover:from-[#008cc2] hover:to-[#006a91] text-white font-black px-12 py-4 rounded-xl shadow-lg shadow-[#009ad7]/35 border border-[#009ad7]/80 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed uppercase tracking-wider text-sm w-full md:w-auto"
                  >
                    {isSubmitting ? "Processing..." : "Submit Registration"}
                  </button>
                </div>
                  </>
                )}

              </form>
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
