"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Building, Briefcase, Phone, Globe, CheckCircle2, AlertCircle, X } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Media Category Options
const mediaCategories = [
  { value: "Daily Newspaper", label: "Daily Newspaper" },
  { value: "Magazine", label: "Magazine" },
  { value: "News Agency", label: "News Agency" },
  { value: "Radio", label: "Radio" },
  { value: "TV", label: "TV" },
  { value: "Trade Media", label: "Trade Media" },
  { value: "online", label: "Online" },
  { value: "other", label: "Other" }
];

export default function MediaRegistrationPage() {
  // Fields State
  const [title, setTitle] = useState<string>('');
  const [txt_name, setTxtName] = useState<string>('');
  const [job_title, setJobTitle] = useState<string>('');
  const [txt_co_name, setTxtCoName] = useState<string>('');
  const [media_name, setMediaName] = useState<string>('');
  const [std_code, setStdCode] = useState<string>('');
  const [txt_tel, setTxtTel] = useState<string>('');
  const [bemail, setBemail] = useState<string>('');
  const [txt_website, setTxtWebsite] = useState<string>('');

  // Checkbox groups
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [mediaCatOther, setMediaCatOther] = useState<string>('');
  const [agree, setAgree] = useState<boolean>(false);

  // Validation & UI states
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleCategoryChange = (val: string) => {
    if (selectedCats.includes(val)) {
      setSelectedCats(selectedCats.filter(item => item !== val));
      if (val === 'other') setMediaCatOther('');
    } else {
      setSelectedCats([...selectedCats, val]);
    }
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};

    if (!title) tempErrors.title = "Please select your title";
    if (!txt_name.trim()) tempErrors.txt_name = "Full name is required";
    if (!job_title.trim()) tempErrors.job_title = "Job title is required";
    if (!txt_co_name.trim()) tempErrors.txt_co_name = "Company is required";
    if (!media_name.trim()) tempErrors.media_name = "Name of media is required";
    if (!bemail.trim()) {
      tempErrors.bemail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(bemail)) {
      tempErrors.bemail = "Invalid email format";
    }
    if (selectedCats.length === 0) {
      tempErrors.categories = "Please select at least one media category";
    }
    if (selectedCats.includes('other') && !mediaCatOther.trim()) {
      tempErrors.media_cat_other = "Please specify your media category";
    }
    if (!agree) tempErrors.agree = "You must agree to the terms and conditions";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Build URL-encoded request body
    const params = new URLSearchParams();
    params.append('title', title);
    params.append('txt_name', txt_name);
    params.append('job_title', job_title);
    params.append('txt_co_name', txt_co_name);
    params.append('media_name', media_name);
    params.append('std_code', std_code);
    params.append('txt_tel', txt_tel);
    params.append('bemail', bemail);
    params.append('txt_website', txt_website);

    // Append checkboxes using array format matching php name
    selectedCats.forEach(val => params.append('media_cat[]', val));
    if (selectedCats.includes('other')) {
      params.append('media_cat_other', mediaCatOther);
    }

    params.append('agree', 'agree');

    try {
      const response = await fetch(
        'https://api.worldexindia.com/ceifair/php/controller/buyerController.php?type=mediaRegistration',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        }
      );

      const text = await response.text();
      let resData;
      try {
        resData = JSON.parse(text);
      } catch (err) {
        throw new Error("Invalid response format from server");
      }

      if (resData && resData.status === "Success") {
        setSubmitStatus({
          success: true,
          message: resData.message || "Registration Successful!"
        });
        resetForm();
      } else {
        setSubmitStatus({
          success: false,
          message: resData.message || "Notice: Registration could not complete. Check details."
        });
      }
    } catch (err) {
      setSubmitStatus({
        success: false,
        message: "Server connection failed. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setTxtName('');
    setJobTitle('');
    setTxtCoName('');
    setMediaName('');
    setStdCode('');
    setTxtTel('');
    setBemail('');
    setTxtWebsite('');
    setSelectedCats([]);
    setMediaCatOther('');
    setAgree(false);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">

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
                  <span className="text-white">Media</span> <br /> <span className="text-white">Registration</span>
                </h2>
              </div>
            </div>

            {/* Right side form content */}
            <div className="lg:col-span-9 p-6 md:p-10 bg-slate-50/40 z-10">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Section header: Personal Details */}
                <div>
                  <h3 className="text-base font-bold text-[#10729c] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                    Personal Details
                  </h3>

                  {/* Title Selector */}
                  <div className="mb-6">
                    <span className="block text-sm font-bold text-slate-700 mb-2">
                      Title <span className="text-red-500">*</span>
                    </span>
                    <div className="flex flex-wrap gap-6">
                      {['mr', 'ms', 'mrs', 'dr'].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 font-semibold text-slate-700 capitalize cursor-pointer select-none">
                          <input
                            type="radio"
                            name="title"
                            value={opt}
                            checked={title === opt}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-5 h-5 text-[#009ad7] border-slate-300 focus:ring-[#009ad7] cursor-pointer"
                          />
                          <span>{opt}.</span>
                        </label>
                      ))}
                    </div>
                    {errors.title && <p className="text-red-500 text-xs mt-2 font-semibold">{errors.title}</p>}
                  </div>

                  {/* Name and Job Title */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={txt_name}
                          onChange={(e) => setTxtName(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                          placeholder="Enter Full Name"
                        />
                      </div>
                      {errors.txt_name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Job Title <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={job_title}
                          onChange={(e) => setJobTitle(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                          placeholder="Enter Job Title"
                        />
                      </div>
                      {errors.job_title && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.job_title}</p>}
                    </div>
                  </div>
                </div>

                {/* Section header: Company Details */}
                <div className="pt-6">
                  <h3 className="text-base font-bold text-[#10729c] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                    Company Details
                  </h3>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={txt_co_name}
                          onChange={(e) => setTxtCoName(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                          placeholder="Company Name"
                        />
                      </div>
                      {errors.txt_co_name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_co_name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Name of Media <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={media_name}
                        onChange={(e) => setMediaName(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        placeholder="e.g. Newspaper, News portal"
                      />
                      {errors.media_name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.media_name}</p>}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 mt-4">
                    <div className="flex gap-4">
                      <div className="w-1/4">
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          STD
                        </label>
                        <input
                          type="text"
                          value={std_code}
                          onChange={(e) => setStdCode(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                          placeholder="91"
                        />
                      </div>
                      <div className="w-3/4">
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Telephone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            value={txt_tel}
                            onChange={(e) => setTxtTel(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                            placeholder="Landline number"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          value={bemail}
                          onChange={(e) => setBemail(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                          placeholder="name@media.com"
                        />
                      </div>
                      {errors.bemail && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.bemail}</p>}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 mt-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Website
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={txt_website}
                          onChange={(e) => setTxtWebsite(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                          placeholder="www.media.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Media Category Checkboxes */}
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-base font-bold text-[#10729c] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                    Media Category <span className="text-red-500">*</span>
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {mediaCategories.map((cat) => (
                      <label key={cat.value} className="flex items-start gap-2.5 text-sm font-semibold text-slate-600 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={selectedCats.includes(cat.value)}
                          onChange={() => handleCategoryChange(cat.value)}
                          className="w-5 h-5 rounded text-[#009ad7] border-slate-300 focus:ring-[#009ad7] mt-0.5 shrink-0"
                        />
                        <span>{cat.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.categories && <p className="text-red-500 text-xs mt-2 font-semibold">{errors.categories}</p>}

                  {/* "Others" specify text field */}
                  <AnimatePresence>
                    {selectedCats.includes('other') && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 overflow-hidden"
                      >
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Please Specify Media Category <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={mediaCatOther}
                          onChange={(e) => setMediaCatOther(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#009ad7] font-semibold"
                          placeholder="Mention your media type"
                        />
                        {errors.media_cat_other && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.media_cat_other}</p>}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-t border-slate-100 pt-6"></div>

                {/* Agree Checkbox */}
                <div>
                  <label className="flex items-start gap-3 text-sm font-semibold text-slate-600 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="w-5 h-5 rounded text-[#009ad7] border-slate-300 focus:ring-[#009ad7] mt-0.5 shrink-0"
                    />
                    <span>
                      I agree that the above information may be used by Worldex India Exhibition & Promotion Pvt. Ltd. for incorporation in all of their databases for business matching & trade promotional activities and for any other purposes.
                    </span>
                  </label>
                  {errors.agree && <p className="text-red-500 text-xs mt-2 font-semibold">{errors.agree}</p>}
                </div>

                {/* Submit triggers */}
                <div className="pt-8 flex flex-col items-center justify-center gap-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#009ad7] to-[#007ba8] hover:from-[#008cc2] hover:to-[#006a91] text-white font-black px-12 py-4 rounded-xl shadow-lg shadow-[#009ad7]/35 border border-[#009ad7]/80 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed uppercase tracking-wider text-sm w-full md:w-auto"
                  >
                    {isSubmitting ? "Processing..." : "Submit Registration"}
                  </button>

                  <p className="text-left text-sm text-slate-500 leading-relaxed mt-4 w-full border-t border-slate-100 pt-4">
                    <strong>Note:</strong> For media registrations and related inquiries, please reach out to <strong>Akash Prabhu</strong> at <strong>Mobile: +91-9137587951 </strong> or via email at <strong> akash@worldexindia.com</strong>
                  </p>
                </div>

              </form>
            </div> {/* close lg:col-span-9 */}
          </div> {/* close grid */}

        </section>

      </main>

      {/* Success/Error Modal Overlay */}
      <AnimatePresence>
        {submitStatus && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative border border-slate-100 flex flex-col items-center text-center"
            >
              <button
                onClick={() => setSubmitStatus(null)}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {submitStatus.success ? (
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
              ) : (
                <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="w-10 h-10 text-rose-500" />
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {submitStatus.success ? "Registration Successful!" : "Notice"}
              </h3>

              <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {submitStatus.message}
              </p>

              <button
                onClick={() => setSubmitStatus(null)}
                className={`font-bold px-8 py-3 rounded-xl transition-all text-white w-full ${submitStatus.success
                  ? 'bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/20'
                  : 'bg-rose-500 hover:bg-rose-600 shadow-lg shadow-rose-500/20'
                  }`}
              >
                OK
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ContactSection />
      <Footer />
    </div>
  );
}
