"use client";

import React, { useState } from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    txt_name: '',
    des: '',
    txt_co_name: '',
    email: '',
    mobile: '',
    interested_in_cei: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when typing/selecting
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.txt_name.trim()) {
      newErrors.txt_name = 'Name is required';
    } else if (formData.txt_name.trim().length < 2) {
      newErrors.txt_name = 'Name must be at least 2 characters';
    }

    if (!formData.des.trim()) {
      newErrors.des = 'Designation is required';
    }

    if (!formData.txt_co_name.trim()) {
      newErrors.txt_co_name = 'Company Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d+$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter numbers only';
    } else if (formData.mobile.length < 8 || formData.mobile.length > 15) {
      newErrors.mobile = 'Mobile number must be between 8 and 15 digits';
    }

    if (!formData.interested_in_cei) {
      newErrors.interested_in_cei = 'Please select your interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const urlEncodedData = new URLSearchParams(formData).toString();
      
      const response = await fetch('/api/proxy?type=Visitor_Exhibitor_Interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData,
      });

      const result = await response.json();

      if (response.ok && result.status === 'Success') {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank You! Your submission was successful.',
        });
        // Reset form
        setFormData({
          txt_name: '',
          des: '',
          txt_co_name: '',
          email: '',
          mobile: '',
          interested_in_cei: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <section id="contact" className="bg-white pt-48 pb-24 md:pt-56 md:pb-24">
        <div className="mx-auto max-w-[95rem] px-4 md:px-8">
          <div className="mb-16 md:mb-24 flex items-start justify-start font-sans text-black select-none">
            {/* L */}
            <span className="text-[6rem] md:text-[11rem] font-black leading-none transform translate-y-3 md:translate-y-10">
              L
            </span>
            
            {/* e */}
            <span className="text-[11rem] md:text-[22rem] font-medium leading-none mx-0 md:mx-1">
              e
            </span>
            
            {/* Connect + t's */}
            <div className="flex flex-col transform translate-y-10 md:translate-y-[7.5rem]">
              <span className="text-xl md:text-[2.5rem] font-medium tracking-tight leading-none mb-1 md:mb-2 ml-1 md:ml-3">Connect</span>
              <span className="text-[6rem] md:text-[11rem] font-black leading-none tracking-tight">t&apos;s</span>
            </div>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-[1fr_2fr]">
            {/* Addresses */}
            <div className="space-y-10 text-[17px] leading-relaxed">
              <div>
                <h4 className="mb-3 font-sans text-xl font-bold text-[#009ad7]">Mumbai</h4>
                <p className="text-slate-800 font-medium">309, Parvati Premises, Sun Mill Complex,<br />Lower Parel (W), Mumbai 400013, India.</p>
                <p className="mt-3 mb-1 text-slate-900 font-semibold">+91 022 40376700</p>
                <p className="text-slate-900 font-semibold">contactus@worldexindia.com</p>
              </div>
              <div>
                <h4 className="mb-3 font-sans text-xl font-bold text-[#009ad7]">Delhi</h4>
                <p className="text-slate-800 font-medium">F-10, First Floor, Kalkaji,<br />New Delhi 110019, India.</p>
                <p className="mt-3 mb-1 text-slate-900 font-semibold">+91 11 41802033 | +91 11 26285142</p>
                <p className="text-slate-900 font-semibold">contactus@worldexindia.com</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus.type && (
                <div className={`p-4 rounded-xl mb-6 flex items-start gap-3 border ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <div className="mt-0.5">
                    {submitStatus.type === 'success' ? (
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{submitStatus.type === 'success' ? 'Thank You!' : 'Error'}</h5>
                    <p className="text-xs mt-0.5 leading-relaxed">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              <Field 
                label="Name" 
                name="txt_name"
                value={formData.txt_name}
                onChange={handleChange}
                error={errors.txt_name}
              />
              <Field 
                label="Designation" 
                name="des"
                value={formData.des}
                onChange={handleChange}
                error={errors.des}
              />
              <Field 
                label="Company Name" 
                name="txt_co_name"
                value={formData.txt_co_name}
                onChange={handleChange}
                error={errors.txt_co_name}
              />
              <div className="grid gap-6 md:grid-cols-2">
                <Field 
                  label="Email Address" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <Field 
                  label="Mobile No" 
                  name="mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={handleChange}
                  error={errors.mobile}
                />
              </div>

              <div>
                <label className="text-[17px] font-semibold text-slate-800">
                  Interested in visiting or exhibiting at CEI <span className="text-[#009ad7]">*</span>
                </label>
                <select
                  name="interested_in_cei"
                  value={formData.interested_in_cei}
                  onChange={handleChange}
                  className="mt-2 w-full border-0 border-b border-gray-200 bg-transparent py-3 text-[17px] text-black focus:border-[#009ad7] focus:outline-none transition-colors cursor-pointer font-medium"
                >
                  <option value="" className="text-gray-400">-- Please Select --</option>
                  <option value="Interested in Visiting">Interested in Visiting</option>
                  <option value="Interested in Exhibiting">Interested in Exhibiting</option>
                  <option value="Interested in Both">Interested in Both (Visiting & Exhibiting)</option>
                </select>
                {errors.interested_in_cei && (
                  <p className="mt-1.5 text-xs text-red-500 font-semibold">{errors.interested_in_cei}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#009ad7] px-10 py-3.5 text-[17px] font-bold text-white transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Maps Section */}
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {/* Mumbai Map */}
            <div className="w-full aspect-square rounded-md overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=Worldex+India+Exhibition+%26+Promotion+Pvt.+Ltd.,+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mumbai Office Location"
              ></iframe>
            </div>

            {/* Delhi Map */}
            <div className="w-full aspect-square rounded-md overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=F-10,+First+Floor,+Kalkaji,+New+Delhi+110019,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delhi Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
}

function Field({ label, name, value, onChange, error, type = "text", required = true }: FieldProps) {
  return (
    <div>
      <label className="text-[17px] font-semibold text-slate-800">
        {name === "email" ? "Email Address" : name === "mobile" ? "Mobile No" : label} {required && <span className="text-[#009ad7]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full border-0 border-b border-gray-200 bg-transparent py-3 text-[17px] text-black focus:border-[#009ad7] focus:outline-none transition-colors font-medium"
      />
      {error && <p className="mt-1.5 text-xs text-red-500 font-semibold">{error}</p>}
    </div>
  );
}
