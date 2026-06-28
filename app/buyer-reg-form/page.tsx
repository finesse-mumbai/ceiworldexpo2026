"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Building, Briefcase, Phone, MapPin, Globe, CheckCircle2, AlertCircle, X } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Option lists
const businessTypes = [
  "Importers", "Dealers", "Distributors", "Trading Houses", "Wholesalers", "Agents", 
  "Buying Houses", "Corporate Sourcing Heads", "Brand Owners", "Franchisor", 
  "Government Procurement Agencies", "Retailers", "E-Tailers", "Retail Chain Aggregators", 
  "Large Format Retailers", "Consumer Electronic Product Manufactures", "OEM, ODM, ECM, EMS", 
  "Electric Vehicle Manufacturers", "Battery Management Systems Provider", "LED/Lighting Manufacturing", 
  "Mobile Phone Manufacturers", "Charger Manufacturers ", "Printer Manufactures", "Supply Chain ", 
  "Stockists", "Super Stockists", "Resellers", "Equipment manufacturers", 
  "Material and parts suppliers", "others"
];

const interestedProducts = [
  "Electronic Components & Equipment", "Embedded Systems, Products & Technologies", 
  "Electronics Manufacturing Technologies, Equipment & Consumables", "Semiconductors", 
  "Micro-nano production (MEMS)", "Sensors & Sensor Technology", "Electronic Design (ED/EDA)", 
  "Wireless", "IOT Devices", "Active & Passive Components", "Components & Production Technology", 
  "Testing & Measurement Equipment", "Discrete Components (condensers, capacitors, transistors, etc.)", 
  "Medical Electronics", "Robotics", "IT & Digital solutions", "Automobile Electronic Components", 
  "Automotive & EV solutions", "Electronic Manufacturing Service (EMS) Providers", 
  "Assemblies and Subsystems", "Photovoltaic Production (materials, technology, equipment)", 
  "PCB and other Circuit-Carrier Manufacturing", "Hybrid-Component Manufacturing", 
  "Car & Home systems", "Fire Protection Systems", "Smart Pool Automation", "Display manufacturing", 
  "Manufacturers of Light Emitting Diodes(LED)", "IT Systems", "Telecom – Mobile Devices & Accessories", 
  "Security & Surveillance", "SMT (Surface Mount Technology)", 
  "Software & Firmware Developers for Electronic Systems", "Integrated Circuit (IC) Manufacturers", 
  "ASIC & FPGA Design", "Smart Home, Office & Building Automation", "Consumer Electronics", 
  "Home Entertainment", "Gaming Consoles and Controllers", "Telecommunications", "EPBAX Systems", 
  "Network Communication Devices", "In-Vehicle Electronics", "Vehicle Tracking Systems and Devices", 
  "Digital Imaging Equipment", "Cameras, Lens, Equipment & Accessories", 
  "Film Shooting & Post Production Equipment", "Graphic Image Development & Printing Equipment", 
  "Healthcare Electronics", "Digital Glucose, Blood Pressure, Heart rate & temperature devices", 
  "Wearables", "Computers and Peripherals", "Desktops, Laptops, Notebooks & Tablets", 
  "Barcode and Fingerprint Readers", "Computer Storage Solutions", "Office Automation and Equipment", 
  "Biometric Machines", "Shredders", "Smart Sensors & Access Control", 
  "Alarm Monitoring Systems & Intrusion Biometrics", 
  "Video Surveillance/CCTV Electronic/Card Key Management Software & Video Analytics", 
  "Automation & IoT", "IoT Software and Solutions", "Wired & Wireless Home Automation", 
  "Connectivity Modules & Sensors & Home Appliances", "others"
];

const purposeVisitOptions = [
  "Gather Information", "Seek Representative / Agent / Distributor", 
  "Establish Contact", "Sourcing New Products", "Meet Visit Suppliers"
];

const knowOptions = [
  { value: "Invitation", label: "Invitation" },
  { value: "Internet", label: "Internet" },
  { value: "Referrals", label: "Referrals" },
  { value: "Association Info", label: "Association Info" },
  { value: "Newspaper Advertisement", label: "Newspaper Advertisement" },
  { value: "Magazines Advertisement", label: "Magazines Advertisement" },
  { value: "Bunting/Billboard", label: "Social Media" } // Value matches PHP backend, label is displayed
];

export default function BuyerRegistrationPage() {
  // Form fields state
  const [title, setTitle] = useState<string>('');
  const [txt_name, setTxtName] = useState<string>('');
  const [family, setFamily] = useState<string>('');
  const [bemail, setBemail] = useState<string>('');
  const [txt_co_name, setTxtCoName] = useState<string>('');
  const [des, setDes] = useState<string>('');
  const [job, setJob] = useState<string>('');
  const [std_code, setStdCode] = useState<string>('');
  const [txt_tel, setTxtTel] = useState<string>('');
  const [txt_mobile, setTxtMobile] = useState<string>('');
  const [txt_fax, setTxtFax] = useState<string>('');
  const [txt_address, setTxtAddress] = useState<string>('');
  const [txt_address1, setTxtAddress1] = useState<string>('');
  const [txt_city, setTxtCity] = useState<string>('');
  const [txt_pincode, setTxtPincode] = useState<string>('');
  const [txt_state, setTxtState] = useState<string>(''); // Matches label Country
  const [txt_website, setTxtWebsite] = useState<string>('');
  const [business_type, setBusinessType] = useState<string>('');
  const [other_business_type, setOtherBusinessType] = useState<string>('');
  const [interested_products, setInterestedProducts] = useState<string>('');
  const [other_interested_products, setOtherInterestedProducts] = useState<string>('');
  
  // Checkbox groups state
  const [purposeVisit, setPurposeVisit] = useState<string[]>([]);
  const [otherPurpose, setOtherPurpose] = useState<string>('');
  const [know, setKnow] = useState<string[]>([]);
  const [otherKnow, setOtherKnow] = useState<string>('');
  
  const [agree, setAgree] = useState<boolean>(false);

  // Validation / UI States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  // Validate form fields client-side
  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};

    if (!title) tempErrors.title = "Please select your title";
    if (!txt_name.trim()) tempErrors.txt_name = "First name is required";
    if (!family.trim()) tempErrors.family = "Last name is required";
    if (!bemail.trim()) {
      tempErrors.bemail = "Business email is required";
    } else if (!/\S+@\S+\.\S+/.test(bemail)) {
      tempErrors.bemail = "Invalid email format";
    }
    if (!txt_co_name.trim()) tempErrors.txt_co_name = "Company name is required";
    if (!des.trim()) tempErrors.des = "Designation is required";
    if (!job.trim()) tempErrors.job = "Job function is required";
    if (!txt_mobile.trim()) {
      tempErrors.txt_mobile = "Mobile number is required";
    } else if (txt_mobile.length < 10) {
      tempErrors.txt_mobile = "Mobile number must be at least 10 digits";
    }
    if (!txt_address.trim()) tempErrors.txt_address = "Address Line 1 is required";
    if (!txt_address1.trim()) tempErrors.txt_address1 = "Address Line 2 is required";
    if (!txt_city.trim()) tempErrors.txt_city = "City is required";
    if (!txt_pincode.trim()) tempErrors.txt_pincode = "Pin code is required";
    if (!txt_state.trim()) tempErrors.txt_state = "Country is required";
    if (!business_type) tempErrors.business_type = "Please select business type";
    if (business_type === 'others' && !other_business_type.trim()) {
      tempErrors.other_business_type = "Please mention your business type";
    }
    if (!interested_products) tempErrors.interested_products = "Please select interested product";
    if (interested_products === 'others' && !other_interested_products.trim()) {
      tempErrors.other_interested_products = "Please mention your interested product";
    }
    if (purposeVisit.length === 0 && !otherPurpose.trim()) {
      tempErrors.purpose_visit = "Please select at least one purpose of visit";
    }
    if (know.length === 0 && !otherKnow.trim()) {
      tempErrors.know = "Please select at least one referral channel";
    }
    if (!agree) tempErrors.agree = "You must agree to the terms and conditions";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handlePurposeChange = (value: string) => {
    if (purposeVisit.includes(value)) {
      setPurposeVisit(purposeVisit.filter(item => item !== value));
    } else {
      setPurposeVisit([...purposeVisit, value]);
    }
  };

  const handleKnowChange = (value: string) => {
    if (know.includes(value)) {
      setKnow(know.filter(item => item !== value));
    } else {
      setKnow([...know, value]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Build Form UrlEncoded parameters (matches jQuery $(form).serialize())
    const params = new URLSearchParams();
    params.append('title', title);
    params.append('txt_name', txt_name);
    params.append('family', family);
    params.append('bemail', bemail);
    params.append('txt_co_name', txt_co_name);
    params.append('des', des);
    params.append('job', job);
    params.append('std_code', std_code);
    params.append('txt_tel', txt_tel);
    params.append('txt_mobile', txt_mobile);
    params.append('txt_fax', txt_fax);
    params.append('txt_address', txt_address);
    params.append('txt_address1', txt_address1);
    params.append('txt_city', txt_city);
    params.append('txt_pincode', txt_pincode);
    params.append('txt_state', txt_state);
    params.append('txt_website', txt_website);
    params.append('business_type', business_type);
    params.append('other_business_type', other_business_type);
    params.append('interested_products', interested_products);
    params.append('other_interested_products', other_interested_products);

    // Append arrays
    purposeVisit.forEach(val => params.append('purpose_visit[]', val));
    if (otherPurpose.trim()) {
      params.append('purpose_visit[]', otherPurpose);
    }

    know.forEach(val => params.append('know[]', val));
    if (otherKnow.trim()) {
      params.append('know[]', otherKnow);
    }

    params.append('agree', 'agree');

    try {
      const response = await fetch(
        'https://api.worldexindia.com/ceifair/php/controller/buyerController.php?type=buyerRegistration',
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
          message: resData.message || "Unable to complete registration. Please check your data."
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
    setFamily('');
    setBemail('');
    setTxtCoName('');
    setDes('');
    setJob('');
    setStdCode('');
    setTxtTel('');
    setTxtMobile('');
    setTxtFax('');
    setTxtAddress('');
    setTxtAddress1('');
    setTxtCity('');
    setTxtPincode('');
    setTxtState('');
    setTxtWebsite('');
    setBusinessType('');
    setOtherBusinessType('');
    setInterestedProducts('');
    setOtherInterestedProducts('');
    setPurposeVisit([]);
    setOtherPurpose('');
    setKnow([]);
    setOtherKnow('');
    setAgree(false);
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
                <h2 className="text-2xl lg:text-3xl font-black text-[#1b1464] leading-tight tracking-wider uppercase font-sans">
                  Buyer <br /> Registration
                </h2>
              </div>
            </div>

            {/* Right side form content */}
            <div className="lg:col-span-9 p-6 md:p-10 bg-slate-50/40 z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Title Selector */}
              <div className="border-b border-slate-100 pb-6">
                <span className="block text-sm font-bold text-slate-700 mb-3">
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

              {/* Row 2: Name fields */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={txt_name}
                      onChange={(e) => setTxtName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                      placeholder="Enter First Name"
                    />
                  </div>
                  {errors.txt_name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={family}
                      onChange={(e) => setFamily(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  {errors.family && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.family}</p>}
                </div>
              </div>

              {/* Row 3: Email and Company */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Business Email <span className="text-red-500">*</span>
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
                      placeholder="Enter Company Name"
                    />
                  </div>
                  {errors.txt_co_name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_co_name}</p>}
                </div>
              </div>

              {/* Row 4: Designation and Job Function */}
              <div className="grid gap-6 md:grid-cols-2">
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
                      placeholder="e.g. Sourcing Manager"
                    />
                  </div>
                  {errors.des && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.des}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Job Function <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={job}
                      onChange={(e) => setJob(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                      placeholder="e.g. Procurement"
                    />
                  </div>
                  {errors.job && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.job}</p>}
                </div>
              </div>

              {/* Row 5: Telephone and Mobile */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="w-1/4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      STD
                    </label>
                    <input 
                      type="number" 
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
                        type="number" 
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
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input 
                      type="number" 
                      value={txt_mobile}
                      onChange={(e) => setTxtMobile(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                      placeholder="10-digit Mobile number"
                    />
                  </div>
                  {errors.txt_mobile && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_mobile}</p>}
                </div>
              </div>

              {/* Row 6: Fax and Address Line 1 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Fax
                  </label>
                  <input 
                    type="text" 
                    value={txt_fax}
                    onChange={(e) => setTxtFax(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                    placeholder="Enter Fax Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Address Line 1 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={txt_address}
                      onChange={(e) => setTxtAddress(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                      placeholder="Building, Street info"
                    />
                  </div>
                  {errors.txt_address && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_address}</p>}
                </div>
              </div>

              {/* Row 7: Address Line 2 and City */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Address Line 2 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={txt_address1}
                      onChange={(e) => setTxtAddress1(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                      placeholder="Locality, Area info"
                    />
                  </div>
                  {errors.txt_address1 && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_address1}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={txt_city}
                    onChange={(e) => setTxtCity(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                    placeholder="Enter City"
                  />
                  {errors.txt_city && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_city}</p>}
                </div>
              </div>

              {/* Row 8: Pin Code and Country */}
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Pin Code <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={txt_pincode}
                    onChange={(e) => setTxtPincode(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                    placeholder="Pincode/ZIP"
                  />
                  {errors.txt_pincode && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_pincode}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={txt_state}
                    onChange={(e) => setTxtState(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
                    placeholder="Enter Country"
                  />
                  {errors.txt_state && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.txt_state}</p>}
                </div>

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
                      placeholder="www.company.com"
                    />
                  </div>
                </div>
              </div>

              {/* Row 9: Business Type Selector */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Business Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={business_type}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold cursor-pointer"
                  >
                    <option value="">Select Business Type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.business_type && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.business_type}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Other Business Type (if applicable)
                  </label>
                  <input 
                    type="text" 
                    value={other_business_type}
                    onChange={(e) => setOtherBusinessType(e.target.value)}
                    disabled={business_type !== 'others'}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
                    placeholder="Mention other business type"
                  />
                  {errors.other_business_type && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.other_business_type}</p>}
                </div>
              </div>

              {/* Row 10: Interested Product Selector */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Interested Product <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={interested_products}
                    onChange={(e) => setInterestedProducts(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold cursor-pointer"
                  >
                    <option value="">Select Interested Product</option>
                    {interestedProducts.map((prod) => (
                      <option key={prod} value={prod}>{prod}</option>
                    ))}
                  </select>
                  {errors.interested_products && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.interested_products}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Other Interested Product (if applicable)
                  </label>
                  <input 
                    type="text" 
                    value={other_interested_products}
                    onChange={(e) => setOtherInterestedProducts(e.target.value)}
                    disabled={interested_products !== 'others'}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
                    placeholder="Mention other product"
                  />
                  {errors.other_interested_products && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.other_interested_products}</p>}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6"></div>

              {/* Checkbox Sections */}
              <div className="grid gap-8 md:grid-cols-2">
                
                {/* Purpose of Visit */}
                <div>
                  <h4 className="text-sm font-bold text-[#10729c] tracking-wide mb-3 uppercase">
                    Please Indicate the Purpose Of Your Visit <span className="text-red-500">*</span>
                  </h4>
                  <div className="space-y-2.5">
                    {purposeVisitOptions.map((opt) => (
                      <label key={opt} className="flex items-start gap-2.5 text-sm font-semibold text-slate-600 cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          checked={purposeVisit.includes(opt)}
                          onChange={() => handlePurposeChange(opt)}
                          className="w-5 h-5 rounded text-[#009ad7] border-slate-300 focus:ring-[#009ad7] mt-0.5"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                    
                    <div className="flex items-center gap-2 pt-1.5">
                      <span className="text-sm font-semibold text-slate-500">Others:</span>
                      <input 
                        type="text" 
                        value={otherPurpose}
                        onChange={(e) => setOtherPurpose(e.target.value)}
                        className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[#009ad7] font-semibold"
                        placeholder="Please specify other purpose"
                      />
                    </div>
                  </div>
                  {errors.purpose_visit && <p className="text-red-500 text-xs mt-2 font-semibold">{errors.purpose_visit}</p>}
                </div>

                {/* Referral Info */}
                <div>
                  <h4 className="text-sm font-bold text-[#10729c] tracking-wide mb-3 uppercase">
                    How Did You Come To Know About Our Exhibition? <span className="text-red-500">*</span>
                  </h4>
                  <div className="space-y-2.5">
                    {knowOptions.map((opt) => (
                      <label key={opt.value} className="flex items-start gap-2.5 text-sm font-semibold text-slate-600 cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          checked={know.includes(opt.value)}
                          onChange={() => handleKnowChange(opt.value)}
                          className="w-5 h-5 rounded text-[#009ad7] border-slate-300 focus:ring-[#009ad7] mt-0.5"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                    
                    <div className="flex items-center gap-2 pt-1.5">
                      <span className="text-sm font-semibold text-slate-500">Others:</span>
                      <input 
                        type="text" 
                        value={otherKnow}
                        onChange={(e) => setOtherKnow(e.target.value)}
                        className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[#009ad7] font-semibold"
                        placeholder="Please specify"
                      />
                    </div>
                  </div>
                  {errors.know && <p className="text-red-500 text-xs mt-2 font-semibold">{errors.know}</p>}
                </div>

              </div>

              <div className="border-t border-slate-100 pt-6"></div>

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

              {/* Submit triggers */}
              <div className="pt-6 flex flex-col items-center justify-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#009ad7] hover:bg-[#0087bd] text-white font-bold px-12 py-4 rounded-xl shadow-lg shadow-[#009ad7]/20 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed uppercase tracking-wider text-sm w-full md:w-auto"
                >
                  {isSubmitting ? "Processing..." : "Submit Registration"}
                </button>
                
                <p className="text-left text-sm text-slate-500 leading-relaxed mt-4 w-full border-t border-slate-100 pt-4">
                  <strong>Note:</strong> For buyer registrations and related inquiries, please reach out to Akash Prabhu at <strong>Mobile/WhatsApp: +91-9137587951</strong> or via email at <strong>ap@worldexindia.com</strong>
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
