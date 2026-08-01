"use client";

import React, { useState, useEffect } from 'react';
import { User, Mail, Building, Briefcase, Phone } from 'lucide-react';
import ContactSection from './ContactSection';
import Footer from './Footer';
import SubmitStatusModal from './forms/SubmitStatusModal';
import TitleSelector from './forms/TitleSelector';

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
  { value: "Computer Storage Solutions", label: "Computer Storage Solutions" },
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

interface ExhibitorRegistrationFormProps {
  defaultSource: string;
  /**
   * Optional page heading. This component is shared by 6 routes, most of them
   * association landing pages, so the title is opt-in — passing it also swaps
   * the bare top padding for the site's standard title block. Routes that omit
   * it render exactly as before.
   */
  pageTitle?: string;
}

export default function ExhibitorRegistrationForm({ defaultSource, pageTitle }: ExhibitorRegistrationFormProps) {
  // Source Tracking state
  const [source, setSource] = useState(defaultSource);

  // Fields State
  const [txt_name, setTxtName] = useState<string>('');
  const [des, setDes] = useState<string>('');
  const [txt_co_name, setTxtCoName] = useState<string>('');
  const [txt_mobile, setTxtMobile] = useState<string>('');
  const [bemail, setBemail] = useState<string>('');
  const [title, setTitle] = useState<string>(''); // Space requirement choice
  const [comment, setComment] = useState<string>('');
  const [nob, setNob] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [agree, setAgree] = useState<boolean>(false);

  // Validation / Submission states
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Sync source with URL parameter on mount if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const mySource = urlParams.get('source');
      if (mySource) {
        setSource(mySource);
      }
    }
  }, []);

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
    if (!agree) tempErrors.agree = "You must agree to the terms";

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
    params.append('title', title); 
    params.append('comment', comment);
    params.append('nob', nob);
    params.append('agree', 'agree');
    params.append('source', source); // Source tracking parameter

    // Append each product category checkbox
    selectedCategories.forEach(val => params.append('exampleRadios', val));

    try {
      const response = await fetch(
        '/api/proxy?type=bookStand',
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
      } catch {
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
      const errorMsg = err instanceof Error ? err.message : "Server connection failed. Please try again later.";
      setSubmitStatus({
        success: false,
        message: errorMsg
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
      <main className={pageTitle ? "pb-24" : "pt-48 md:pt-56 pb-24"}>
        {pageTitle && (
          /* Top Spacer for Header */
          <div className="w-full pt-48 pb-12 md:pt-56 md:pb-16 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight text-center px-4">
              {pageTitle}
            </h1>
          </div>
        )}

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
                  <span className="text-white">Exhibitor</span> <br /> <span className="text-white">Registration</span>
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
                  <TitleSelector
                    value={title}
                    onChange={setTitle}
                    error={errors.title}
                    label="Space Requirement"
                    options={['Standard booth', 'Raw space', 'N/A']}
                    name="space_req"
                  />

                  <div>
                    <label htmlFor="exhibitor-comment" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Comment
                    </label>
                    <input
                      id="exhibitor-comment"
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

                <div className="border-t border-slate-100 pt-6">
                  {/* Agree checkbox */}
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
                    <strong>Note:</strong> For exhibitor registrations and related inquiries, please reach out to <strong>Akash Prabhu</strong> at <strong>Mobile: <a href="https://wa.me/919137587951?text=Hi%2C%20I%20have%20a%20query%20regarding%20Exhibitor%20Registration%20at%20CEI%20World%20Expo%202026%3A%0A" target="_blank" rel="noopener noreferrer" className="hover:text-[#009ad7] hover:underline transition-colors" title="Chat on WhatsApp">+91-9137587951</a> </strong> or via email at <strong> <a href="mailto:akash@worldexindia.com?subject=Query%20regarding%20Exhibitor%20Registration%20-%20CEI%20World%20Expo%202026" className="hover:text-[#009ad7] hover:underline transition-colors" title="Send an Email">akash@worldexindia.com</a></strong>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SubmitStatusModal status={submitStatus} onClose={() => setSubmitStatus(null)} />

      <ContactSection />
      <Footer />
    </div>
  );
}
