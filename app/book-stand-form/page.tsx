"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Building, Briefcase, Phone, CheckCircle2, AlertCircle, X } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Nature of Business Options
const businessNatureOptions = [
  "Manufacturer", "Brand Owner", "E-Tailers", "Importers", "Designer", "Exporter", 
  "Importer", "Trading company", "Service provider", "Startup", "Trade Body", "Trade Association"
];

// Product Category Options
const productCategories = [
  { value: "Consumer Electronics", label: "Consumer Electronics" },
  { value: "Home Entertainment", label: "Home Entertainment" },
  { value: "Telecommunications", label: "Telecommunications" },
  { value: "In-Vehicle Electronics", label: "In-Vehicle Electronics" },
  { value: "Digital Imaging Equipment", label: "Digital Imaging Equipment" },
  { value: "Healthcare Electronics", label: "Healthcare Electronics" },
  { value: "Wearables", label: "Wearables" },
  { value: "Computers and Peripherals", label: "Computers and Peripherals" },
  { value: "Computer Storage Solutions", label: "Computer Storage Solutions" }, // Maps to Computers and Peripherals value in legacy HTML
  { value: "Office Automation and Equipment", label: "Office Automation and Equipment" },
  { value: "Automation & IoT", label: "Automation & IoT" },
  { value: "Smart Security", label: "Smart Security" },
  { value: "Large Appliances", label: "Large Appliances" },
  { value: "Kitchen Appliances", label: "Kitchen Appliances" },
  { value: "Home Appliances", label: "Home Appliances" },
  { value: "Personal Care Appliances", label: "Personal Care Appliances" },
  { value: "Micro-nano production (MEMS)", label: "Micro-nano production (MEMS)" },
  { value: "Sensors & Sensor Technology", label: "Sensors & Sensor Technology" },
  { value: "Electronic Design (ED/EDA)", label: "Electronic Design (ED/EDA)" },
  { value: "Electronic Components & Equipment", label: "Electronic Components & Equipment" },
  { value: "Wireless", label: "Wireless" },
  { value: "IOT Devices", label: "IOT Devices" },
  { value: "Active & Passive Components", label: "Active & Passive Components" },
  { value: "Components & Production Technology", label: "Components & Production Technology" },
  { value: "Testing & Measurement Equipment", label: "Testing & Measurement Equipment" },
  { value: "Hybrid-Component Manufacturing", label: "Hybrid-Component Manufacturing" },
  { value: "Medical Electronics", label: "Medical Electronics" },
  { value: "Semiconductors", label: "Semiconductors" },
  { value: "Robotics", label: "Robotics" },
  { value: "IT & Digital solutions", label: "IT & Digital solutions" },
  { value: "Automobile Electronic Components", label: "Automobile Electronic Components" },
  { value: "Automotive & EV solutions", label: "Automotive & EV solutions" },
  { value: "Assemblies and Subsystems", label: "Assemblies and Subsystems" },
  { value: "Car & Home systems", label: "Car & Home systems" },
  { value: "Fire Protection Systems", label: "Fire Protection Systems" },
  { value: "Smart Pool Automation", label: "Smart Pool Automation" },
  { value: "Display manufacturing", label: "Display manufacturing" },
  { value: "Connectivity Modules & Sensors", label: "Connectivity Modules & Sensors" },
  { value: "Photovoltaic Production", label: "Photovoltaic Production" },
  { value: "Electronic Manufacturing Service Providers", label: "Electronic Manufacturing Service Providers" },
  { value: "PCB and other Circuit-Carrier Manufacturing", label: "PCB and other Circuit-Carrier Manufacturing" },
  { value: "Electronics Manufacturing Technologies", label: "Electronics Manufacturing Technologies" },
  { value: "Discrete Components", label: "Discrete Components" },
  { value: "Embedded Systems, Products & Technologies", label: "Embedded Systems, Products & Technologies" },
  { value: "Manufacturers of Light Emitting Diodes(LED)", label: "Manufacturers of Light Emitting Diodes(LED)" },
  { value: "IoT Software and Solutions", label: "IoT Software and Solutions" }
];

export default function ExhibitorRegistrationPage() {
  // Fields State
  const [txt_name, setTxtName] = useState<string>('');
  const [des, setDes] = useState<string>('');
  const [txt_co_name, setTxtCoName] = useState<string>('');
  const [txt_mobile, setTxtMobile] = useState<string>('');
  const [bemail, setBemail] = useState<string>('');
  const [title, setTitle] = useState<string>(''); // Used for space requirement in legacy HTML name
  const [comment, setComment] = useState<string>('');
  const [nob, setNob] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Validation / Submission states
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleCategoryChange = (val: string) => {
    if (selectedCategories.includes(val)) {
      setSelectedCategories(selectedCategories.filter(item => item !== val));
    } else {
      setSelectedCategories([...selectedCategories, val]);
    }
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};

    if (!txt_name.trim()) tempErrors.txt_name = "Name is required";
    if (!des.trim()) tempErrors.des = "Designation is required";
    if (!txt_co_name.trim()) tempErrors.txt_co_name = "Company name is required";
    if (!txt_mobile.trim()) {
      tempErrors.txt_mobile = "Mobile number is required";
    }
    if (!bemail.trim()) {
      tempErrors.bemail = "Email-id is required";
    } else if (!/\S+@\S+\.\S+/.test(bemail)) {
      tempErrors.bemail = "Invalid email format";
    }
    if (!title) tempErrors.title = "Space requirement option is required";
    if (!nob) tempErrors.nob = "Please select nature of business";
    if (selectedCategories.length === 0) {
      tempErrors.categories = "Please select at least one product category";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Build URL-encoded request body matching jQuery serialize
    const params = new URLSearchParams();
    params.append('txt_name', txt_name);
    params.append('des', des);
    params.append('txt_co_name', txt_co_name);
    params.append('txt_mobile', txt_mobile);
    params.append('bemail', bemail);
    params.append('title', title); // space requirement value
    params.append('comment', comment);
    params.append('nob', nob);
    
    // Append each product category checkbox
    selectedCategories.forEach(val => params.append('exampleRadios', val));

    try {
      const response = await fetch(
        'https://api.worldexindia.com/ceifair/php/controller/buyerController.php?type=bookStand',
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
          message: resData.message || "Notice: Unable to complete. Check details."
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
    setTxtName('');
    setDes('');
    setTxtCoName('');
    setTxtMobile('');
    setBemail('');
    setTitle('');
    setComment('');
    setNob('');
    setSelectedCategories([]);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      
      <main className="pt-64 md:pt-72 pb-24">
        
        {/* Form Container Section */}
        <section className="mx-auto max-w-7xl px-6">
          
          {/* 2-Partition Form Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white relative">
            
            {/* Ambient Background Glowing Blobs for Refraction */}
            <div className="absolute top-10 left-5 w-44 h-44 rounded-full bg-[#009ad7]/25 blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute bottom-20 left-2 w-48 h-48 rounded-full bg-[#dae020]/15 blur-3xl pointer-events-none" />

            {/* Left side blue patch */}
            <div className="lg:col-span-3 bg-gradient-to-b from-[#e6f7ff]/90 to-[#66d9ff]/95 backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-slate-200/50 p-8 md:p-10 flex flex-col justify-start items-center text-center relative overflow-hidden min-h-[250px] lg:min-h-[600px] lg:pt-16 z-10">
              {/* Decorative backgrounds */}
              <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full bg-[#009ad7]/5 pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-36 h-36 rounded-full bg-[#009ad7]/5 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-2xl lg:text-3xl font-black leading-tight tracking-wider uppercase font-sans">
                  <span className="text-black">Exhibitor</span> <br /> <span className="text-[#009ad7]">Registration</span>
                </h2>
              </div>
            </div>

            {/* Right side form content */}
            <div className="lg:col-span-9 p-6 md:p-10 bg-slate-50/40 z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Designation */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        value={txt_name}
                        onChange={(e) => setTxtName(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    {errors.txt_name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        value={des}
                        onChange={(e) => setDes(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        placeholder="Enter Designation"
                      />
                    </div>
                    {errors.des && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.des}</p>}
                  </div>
                </div>

                {/* Row 2: Company and Mobile */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        value={txt_co_name}
                        onChange={(e) => setTxtCoName(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        placeholder="Enter Company Name"
                      />
                    </div>
                    {errors.txt_co_name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_co_name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Mobile No <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="number" 
                        value={txt_mobile}
                        onChange={(e) => setTxtMobile(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                    {errors.txt_mobile && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_mobile}</p>}
                  </div>
                </div>

                {/* Row 3: Email ID */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email-id <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input 
                      type="email" 
                      value={bemail}
                      onChange={(e) => setBemail(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                      placeholder="name@company.com"
                    />
                  </div>
                  {errors.bemail && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.bemail}</p>}
                </div>

                {/* Row 4: Space Requirement Options */}
                <div className="border-t border-b border-slate-100 py-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="block text-sm font-bold text-slate-700 mb-3">
                      Space Requirement <span className="text-red-500">*</span>
                    </span>
                    <div className="flex flex-wrap gap-4">
                      {['Standard booth', 'Raw space', 'N/A'].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 font-semibold text-slate-700 cursor-pointer select-none">
                          <input 
                            type="radio" 
                            name="space_req" 
                            value={opt}
                            checked={title === opt}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-5 h-5 text-[#009ad7] border-slate-300 focus:ring-[#009ad7] cursor-pointer"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                    {errors.title && <p className="text-red-500 text-xs mt-2 font-semibold">{errors.title}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Comment
                    </label>
                    <input 
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                      placeholder="Space requirements/booth comments"
                    />
                  </div>
                </div>

                {/* Row 5: Nature of Business */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Nature of Business <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={nob}
                    onChange={(e) => setNob(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold cursor-pointer"
                  >
                    <option value="">Select Nature of Business</option>
                    {businessNatureOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                    <option value="Trade Association">Other, please specify.</option>
                  </select>
                  {errors.nob && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.nob}</p>}
                </div>

                {/* Product Categories */}
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-sm font-bold text-[#10729c] tracking-wide mb-4 uppercase">
                    Product Category <span className="text-red-500">*</span>
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {productCategories.map((cat) => (
                      <label key={cat.value} className="flex items-start gap-2.5 text-sm font-semibold text-slate-600 cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          checked={selectedCategories.includes(cat.value)}
                          onChange={() => handleCategoryChange(cat.value)}
                          className="w-5 h-5 rounded text-[#009ad7] border-slate-300 focus:ring-[#009ad7] mt-0.5"
                        />
                        <span>{cat.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.categories && <p className="text-red-500 text-xs mt-2 font-semibold">{errors.categories}</p>}
                </div>

                {/* Submit triggers */}
                <div className="pt-8 flex flex-col items-center justify-center gap-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#e6f7ff] to-[#66d9ff] hover:from-[#d5f0ff] hover:to-[#4dd0ff] text-black font-black px-12 py-4 rounded-xl shadow-lg shadow-[#66d9ff]/35 border border-[#b0def4]/60 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed uppercase tracking-wider text-sm w-full md:w-auto"
                  >
                    {isSubmitting ? "Processing..." : "Submit Registration"}
                  </button>
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
                className={`font-bold px-8 py-3 rounded-xl transition-all text-white w-full ${
                  submitStatus.success 
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
