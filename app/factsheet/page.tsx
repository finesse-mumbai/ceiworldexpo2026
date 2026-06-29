"use client";

import React from 'react';
import { Download } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function FactsheetPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-black relative">
      <main className="pt-48 md:pt-56 pb-20">

        {/* Download PDF Option outside the document sheet */}
        <div className="max-w-[95rem] mx-auto px-4 md:px-8 mb-6 flex justify-end">
          <a
            href="https://www.ceiworldexpo.com/pdf/CEI-Fact-Sheet-Bharat-Mandapam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#009ad7] hover:bg-[#0087bd] text-white transition-colors px-5 py-2.5 rounded-full font-bold text-sm shadow-md"
          >
            <Download className="w-4 h-4" />
            Download PDF Factsheet
          </a>
        </div>

        {/* Factsheet Document Container */}
        <div className="max-w-[95rem] mx-auto px-4 md:px-8 overflow-x-auto">
          {/* Factsheet White Paper */}
          <div className="min-w-[800px] bg-white p-10 shadow-lg border border-gray-200 rounded-[4px] text-[15px] leading-relaxed">

            {/* Header Section: Logo & Factsheet Text */}
            <div className="flex justify-between items-start mb-8 pb-6 border-b border-gray-100">
              <div className="flex flex-col">
                <img
                  src="https://www.ceiworldexpo.com/img/CEI-August-2026-logo.png"
                  alt="CEI India Logo"
                  className="h-16 w-auto object-contain object-left mb-3"
                />
                <div className="text-[11px] text-gray-700 font-bold uppercase tracking-wider">
                  11-12-13 August 2026
                </div>
                <div className="text-[10px] text-gray-500 font-medium">
                  Bharat Mandapam, New Delhi
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-4xl font-extrabold tracking-tight text-[#009ad7] font-sans">
                  FACT SHEET
                </h1>
              </div>
            </div>

            {/* Factsheet Core Grid Table */}
            <div className="border-[1.5px] border-[#b0def4] rounded-[3px] overflow-hidden">
              <table className="w-full border-collapse">
                <tbody>
                  {/* Exhibition Title */}
                  <tr>
                    <td className="w-[20%] font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Exhibition Title
                    </td>
                    <td className="w-[80%] font-bold text-gray-900 p-3 border-b border-[#b0def4] align-top">
                      Consumer Electronics & Home Appliances Exhibition
                    </td>
                  </tr>

                  {/* Edition */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Edition
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      3rd
                    </td>
                  </tr>

                  {/* Date */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Date
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      11-12-13 Aug, 2026
                    </td>
                  </tr>

                  {/* Exhibition Timings */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Exhibition Timings
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      <div className="max-w-[450px] border border-[#b0def4] rounded-[2px] overflow-hidden mt-1 mb-1">
                        <table className="w-full text-left text-[14px] border-collapse">
                          <thead>
                            <tr className="bg-[#009ad7] text-white">
                              <th className="p-2 font-bold border-r border-[#b0def4]/30">Fair Date</th>
                              <th className="p-2 font-bold">Opening Hours</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#b0def4]/30">
                            <tr>
                              <td className="p-2 border-r border-[#b0def4]/30 text-gray-700">11 Aug (Tue)</td>
                              <td className="p-2 text-gray-700">10.00 a.m. – 6.00 p.m.</td>
                            </tr>
                            <tr>
                              <td className="p-2 border-r border-[#b0def4]/30 text-gray-700">12 Aug (Wed)</td>
                              <td className="p-2 text-gray-700">10.00 a.m. – 6.00 p.m.</td>
                            </tr>
                            <tr>
                              <td className="p-2 border-r border-[#b0def4]/30 text-gray-700">13 Aug (Thu)</td>
                              <td className="p-2 text-gray-700">10.00 a.m. – 5.00 p.m.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>

                  {/* Venue */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Venue
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      Bharat Mandapam, New Delhi, India
                    </td>
                  </tr>

                  {/* Organiser */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Organiser
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      Worldex India Exhibition & Promotion Pvt. Ltd.
                    </td>
                  </tr>

                  {/* Special Highlights */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Special Highlights
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      <div className="grid grid-cols-2 gap-4 my-1">
                        <ul className="list-disc pl-4 space-y-1 text-gray-700">
                          <li>Opening Ceremony</li>
                          <li>LaunchPad@CEI</li>
                          <li>Buying Missions</li>
                          <li>Business Centre</li>
                        </ul>
                        <ul className="list-disc pl-4 space-y-1 text-gray-700">
                          <li>Industry Seminars and Networking Reception</li>
                          <li>VIP Buyer&apos;s Lounge</li>
                          <li>Media Lounge</li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  {/* Major Categories */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Major Categories
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">

                      {/* Consumer Electronics Sub-section */}
                      <div className="mt-1 mb-4 border border-[#b0def4] rounded-[2px] overflow-hidden">
                        <div className="bg-[#009ad7] text-white font-bold px-3 py-1.5 text-[15px]">
                          Consumer Electronics
                        </div>
                        <div className="p-3 grid grid-cols-3 gap-4 bg-white">
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            <li>Home Entertainment</li>
                            <li>Digital Imaging Equipment</li>
                            <li>Wearables</li>
                            <li>Automation & IoT</li>
                          </ul>
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            <li>Telecommunications</li>
                            <li>Healthcare Electronics</li>
                            <li>Office Automation and Equipment</li>
                          </ul>
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            <li>In-Vehicle Electronics</li>
                            <li>Computers and Peripherals</li>
                            <li>Smart Security</li>
                          </ul>
                        </div>
                      </div>

                      {/* Home Appliances Sub-section */}
                      <div className="mb-4 border border-[#b0def4] rounded-[2px] overflow-hidden">
                        <div className="bg-[#009ad7] text-white font-bold px-3 py-1.5 text-[15px]">
                          Home Appliances
                        </div>
                        <div className="p-3 grid grid-cols-3 gap-4 bg-white">
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            <li>Large Appliances</li>
                            <li>Personal Care Appliances</li>
                          </ul>
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            <li>Kitchen Appliances</li>
                          </ul>
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            <li>Home Appliances</li>
                          </ul>
                        </div>
                      </div>

                      {/* Components Sub-section */}
                      <div className="mb-1 border border-[#b0def4] rounded-[2px] overflow-hidden">
                        <div className="bg-[#009ad7] text-white font-bold px-3 py-1.5 text-[15px]">
                          Components
                        </div>
                        <div className="p-3 bg-white">
                          <ul className="list-disc pl-4 text-gray-700">
                            <li>All types of components for electronic products</li>
                          </ul>
                        </div>
                      </div>

                    </td>
                  </tr>

                  {/* Major Exhibiting Countries/Regions */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Major Exhibiting Countries/Regions
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top text-gray-700">
                      China, Hong Kong, India, Japan, Korea, Singapore, Taiwan, Thailand, United Kingdom, United States of America amongst others
                    </td>
                  </tr>

                  {/* Format */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Format
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      <ul className="list-disc pl-4 space-y-1 text-gray-700 my-1">
                        <li>Business to Business (B2B)</li>
                        <li>Entry strictly for trade buyers on production of valid business card. (Pre-register online or onsite)</li>
                        <li>No registration fee. No retail sale.</li>
                        <li>Entry below 18 years will not be permitted.</li>
                        <li>Rights of admission reserved.</li>
                      </ul>
                    </td>
                  </tr>

                  {/* Buyers Profile */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Buyers Profile
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      <div className="grid grid-cols-3 gap-4 my-1">
                        <ul className="list-disc pl-4 space-y-1 text-gray-700">
                          <li>Importers</li>
                          <li>Trading Houses</li>
                          <li>Buying Houses</li>
                          <li>Franchisor</li>
                          <li>E-Tailers</li>
                          <li>OEM, ODM, ECM, EMS</li>
                          <li>Manufacturers</li>
                          <li>Super Stockists</li>
                        </ul>
                        <ul className="list-disc pl-4 space-y-1 text-gray-700">
                          <li>Dealers</li>
                          <li>Wholesalers</li>
                          <li>Corporate Sourcing Heads</li>
                          <li>Government Procurement Agencies</li>
                          <li>Retail Chain Aggregators</li>
                          <li>Battery Management Systems Provider</li>
                          <li>Charger Manufacturers</li>
                          <li>Resellers</li>
                        </ul>
                        <ul className="list-disc pl-4 space-y-1 text-gray-700">
                          <li>Distributors</li>
                          <li>Agents</li>
                          <li>Brand Owners</li>
                          <li>Retailers</li>
                          <li>Large Format Retailers</li>
                          <li>LED/Lighting Manufacturing</li>
                          <li>Stockists</li>
                          <li>Consumer Electronic Product Manufacturers</li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  {/* Show Summary 2019 */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Show Summary 14,15,16 November 2019
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      <div className="grid grid-cols-2 divide-x divide-[#b0def4] border border-[#b0def4] rounded-[2px] bg-white my-1">
                        {/* Buyer Summary */}
                        <div className="p-3">
                          <h4 className="font-bold text-[15px] text-gray-900 border-b border-gray-100 pb-1 mb-2">
                            BUYER SUMMARY
                          </h4>
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            <li>Total Numbers of Buyers 9400</li>
                            <li>
                              International Buyers from 16 Countries:
                              <div className="grid grid-cols-2 gap-2 mt-1.5 text-[13px] bg-gray-50 p-2 rounded-[2px] border border-gray-100">
                                <ul className="list-none pl-0 space-y-0.5">
                                  <li>• Bangladesh</li>
                                  <li>• China</li>
                                  <li>• Hong Kong</li>
                                  <li>• Japan</li>
                                  <li>• USA</li>
                                  <li>• Malaysia</li>
                                  <li>• Nepal</li>
                                  <li>• Qatar</li>
                                  <li>• Saudi Arabia</li>
                                </ul>
                                <ul className="list-none pl-0 space-y-0.5">
                                  <li>• South Africa</li>
                                  <li>• Thailand</li>
                                  <li>• Turkey</li>
                                  <li>• UAE</li>
                                  <li>• United Kingdom</li>
                                  <li>• Vietnam</li>
                                  <li>• West Indies</li>
                                </ul>
                              </div>
                            </li>
                            <li className="mt-2">Indian Buyers from 21 States</li>
                          </ul>
                        </div>
                        {/* Exhibitor Summary */}
                        <div className="p-3">
                          <h4 className="font-bold text-[15px] text-gray-900 border-b border-gray-100 pb-1 mb-2">
                            EXHIBITOR SUMMARY
                          </h4>
                          <ul className="list-disc pl-4 space-y-1 text-gray-700">
                            <li>280 Exhibiting Booths</li>
                            <li>
                              3 Exhibiting Countries / Regions:
                              <p className="mt-1 pl-4 text-gray-600 font-semibold text-[13px]">
                                India, China, Hong Kong-PRC
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Website */}
                  <tr>
                    <td className="font-bold text-black bg-[#f2f9fc] p-3 border-b border-r border-[#b0def4] align-top">
                      Website
                    </td>
                    <td className="p-3 border-b border-[#b0def4] align-top">
                      <a
                        href="https://www.ceiworldexpo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#009ad7] font-bold hover:underline"
                      >
                        www.ceiworldexpo.com
                      </a>
                    </td>
                  </tr>

                  {/* For Booth Participation & Show Information footer contacts */}
                  <tr className="border-t border-[#b0def4]">
                    <td className="p-0" colSpan={2}>
                      <div className="grid grid-cols-3 divide-x divide-[#b0def4] text-center md:text-left">
                        {/* Contact 1 */}
                        <div className="p-3">
                          <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                            For Booth Participation
                          </span>
                          <span className="block font-bold text-gray-900">Ruzbeh Mistry</span>
                          <span className="block text-gray-600 mt-0.5">+91 9820888278</span>
                          <a
                            href="mailto:ruzbeh@worldexindia.com"
                            className="block text-[#009ad7] hover:underline break-all mt-0.5"
                          >
                            ruzbeh@worldexindia.com
                          </a>
                        </div>
                        {/* Contact 2 */}
                        <div className="p-3">
                          <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                            Show Information
                          </span>
                          <span className="block font-bold text-gray-900">Ashish Bhagat</span>
                          <span className="block text-gray-600 mt-0.5">+91 8369801694</span>
                          <a
                            href="mailto:ashish@worldexindia.com"
                            className="block text-[#009ad7] hover:underline break-all mt-0.5"
                          >
                            ashish@worldexindia.com
                          </a>
                        </div>
                        {/* Contact 3 */}
                        <div className="p-3">
                          <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                            &nbsp;
                          </span>
                          <span className="block font-bold text-gray-900">Akash Prabhu</span>
                          <span className="block text-gray-600 mt-0.5">+91 9137587951</span>
                          <a
                            href="mailto:akash@worldexindia.com"
                            className="block text-[#009ad7] hover:underline break-all mt-0.5"
                          >
                            akash@worldexindia.com
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>

      </main>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
