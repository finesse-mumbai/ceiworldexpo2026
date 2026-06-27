import React from "react";
// import StickyNavbar from "../components/StickyNavbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export default function RulesAndRegulationsPage() {
  const sections = [
    {
      title: "Terms of Reference",
      content:
        "In these terms and conditions for participation, the term “Exhibitor” shall include all employees and agents of any individual company, partnership firm or organisation who have applied for space for the purpose of exhibiting.\nThe term “Exhibition” shall mean: Consumer Electronics & Home Appliances Exhibition\nThe term “Organiser” shall be: WORLDEX INDIA EXHIBITION & PROMOTION PVT. LTD.",
    },
    {
      title: "Application for Participation",
      content:
        "All applications for participation shall be made on the prescribed exhibition space contract which shall be submitted to the Organiser or his representative sales agents. The contract shall be established when the Exhibitor submits the application form duly signed and pays to the Organiser the required payment of the space and/or shell scheme costs. The Organiser, however, may defer or refuse the acceptance of an application in the event that sufficient space is not available or the announced exhibits are considered by the Organiser not germane to the Exhibition.",
    },
    {
      title: "Terms of Payment & Default on Payment",
      content:
        "The required payment of the participation fee and/or relevant stand charges must be paid by the Exhibitor together with the return of this contract. The Organisers reserve the right to cancel any reservation of space in the event of an Exhibitor not having paid the dues of the booth charges within specified period. Payment already received will be forfeited in such cases.",
    },
    {
      title: "Standfitting Services",
      content:
        "Shell scheme: For Exhibits under the shell scheme, standfitting works can only be carried out by the official contractor of the Organiser.\nSpace Only: Exhibitors must make their own arrangements for stand design and construction. All stands on space-only sites will be subject to the approval of the Organisers, although the Exhibitor has freedom of design and choice of stand fitting. Exhibitors are reminded that they must satisfy the Organisers that the erection and demolition of the stands can be safely carried out within the allotted time. The Organisers reserve the right to prevent work being carried out by, or on behalf of, any Exhibitor who has not complied with these Terms and Conditions, including the requirement to submit stand design drawings in accordance with the terms above. The Exhibitor could also sub-contract stand design construction to the official contractor of the organiser.",
    },
    {
      title: "Booth Interiors",
      content:
        "While the Exhibitors are free to decorate their stands to the best of their ability for projecting the right image of their products and company, they should take care not to cause any damage to the walls, panels and floors by use of nails, painting or any other such activity.",
    },
    {
      title: "Booth Alteration",
      content:
        "No alteration in size of an Exhibitor’s booth is permitted without the prior written approval of the Organisers.\nNo fixings should be made to the flush plywood of the Shell Scheme. Damaging them in anyway, alterations in the fascia structure or the format is not permitted. Any attempt to do this will involve the restoration of the original structure at the expense of the Exhibitor or his/her agent.\nNeither are the booth displays allowed to overhang the allotted area, nor are any obstructions permitted near gangways, fire points, extinguishers and emergency exits.\nDesigners are particularly requested to avoid designs which may block or box in on other Exhibitors’ booths or the aisles.",
    },
    {
      title: "Booth Exhibits",
      content:
        "The Organiser reserves the right to determine the eligibility of any company or product for inclusion in exhibition space and may reject its inclusion at its sole discretion.\nDisplay material must be confined to the individual Exhibitor’s own booth area.\nNo horns, bells, alarms, or flashing lights will be permitted to be operated. No amplifiers, television receivers or loudspeakers may be operated in the individual exhibits except with the signed approval of Organisers.\nNo advertising or printed material, which in the Organiser’s opinion is undignified or otherwise objectionable, shall be distributed. Exhibitors have the right to distribute brochures and other printed matter approved by organisers, only from the space occupied by them and no other way.\nThe Organisers reserve the right to reject, eject or prohibit any exhibit in whole or part, or the Exhibitor or his representative, with or without giving cause. If the Exhibitor is ejected by the Show Management, there shall be no return of any amount paid by the Exhibitor.",
    },
    {
      title: "Electrical Installations",
      content:
        "All outside electrical installations must be carried out by the officially appointed electrical contractors before connection to the main supply. Exhibitors will be responsible for safeguarding their equipment against any voltage fluctuations and/or power failure and the Organisers will not be liable for any consequences thereof.",
    },
    {
      title: "Fascia",
      content:
        "Only one fascia board per booth will be provided. Shell Scheme exhibitors are not allowed to change the standard fascia as part of the display. The information provided in the Registration Form will be used for fascia board at your stand and in the official Show Directory.",
    },
    {
      title: "Delivery of Exhibits",
      content:
        "Exhibitors must comply with the Build-up Timetable and Delivery Schedule published in the Exhibitors’ Manual. In no circumstances will the Organisers accept or sign for any goods, exhibits or other material on behalf of an Exhibitor.",
    },
    {
      title: "Removal of Exhibits",
      content:
        "Immediately after the Exhibition closes, Exhibitors will be permitted to remove portable exhibits and personal effects from their stands under the supervision of authorised members of their staff. Portable exhibits should be removed that evening to ensure their safety.",
    },
    {
      title: "Subletting of space",
      content:
        "No Exhibitor shall assign or sublet the whole or part of the space allotted, or exhibits therein, any programme or services other than those specified in the contract for exhibit space unless such is preapproved in writing by the Organiser.",
    },
    {
      title: "Failure of Service",
      content:
        "The Organisers will endeavour to ensure that the services of the suppliers are provided. However, neither they nor the suppliers shall be liable to the Exhibitors for any loss or damage, should any such service wholly or partially fail or cease to be available. Also the Exhibitors shall not be entitled to any concession in respect of the stand charges due or paid under the contract.",
    },
    {
      title: "Opening Hours",
      content:
        "The exhibition will be open to visitors daily during the event period from 10:00 AM to 6:00 PM, as stated in the Exhibitor Manual.",
    },
    {
      title: "Photographs",
      content:
        "An official photographer will be appointed for Exhibitors who desire their stands or goods photographed. No other photographer will be allowed to take photographs, draw, copy or reproduce any stand or article in the Venue without the permission of the Organisers.",
    },
    {
      title: "Catering",
      content:
        "All food and drink for serving on stands or to be consumed within the venue must be obtained from the official venue caterer.",
    },
    {
      title: "Cleaning",
      content:
        "Exhibitors are responsible to the Organisers for seeing that their stand is maintained in a clean state throughout the period of the Exhibition. Exhibitors may not carry out their own stand cleaning and accordingly such stand cleaning will be carried out by the official Stand Cleaning Contractor. Cleaning of the stand is free of charge but cleaning of exhibits is extra. Organiser accepts no liability for any damages caused to the exhibits/products/branding during the process of cleaning.",
    },
    {
      title: "Promotion by Exhibitors",
      content:
        "In all communication inviting buyers to visit their booth, Exhibitors must specify clearly that registration is a must for entry to our trade show.",
    },
    {
      title: "No Guarantee of Attendance",
      content:
        "The Organiser does not guarantee specific volumes or levels of attendance at the Event. Exhibitor shall not be entitled to any refund, in full or in part, of any amounts paid based on actual attendance level.",
    },
    {
      title: "Loss or Damage",
      content:
        "The Organiser shall not be responsible for any loss or damage to the Exhibitor’s property caused during moving, transportation or shipment. In such cases, the Exhibitor is still liable to pay the full stand rental and any other amount payable to the Organisers. The Organisers shall not be responsible for any loss or damage to the Exhibitor’s property caused during moving, transportation or shipment. In such cases, the Exhibitor is still liable to pay the full stand rental and any other amount payable to the Organisers.",
    },
    {
      title: "Indemnity",
      content:
        "The Exhibitor represents, warrants and undertakes that it is entering into this agreement as principal and not as agent or nominee of any third party, and the exhibits do not infringe or are likely to infringe any patent, trademark, copyright and other intellectual property right of any party and it agrees that in the event of any breach of the representations, warranties and undertakings herein contained or any breach of the provisions of this Agreement, this Agreement and the licence herein granted may be terminated by the Organisers (without the Organisers being liable for any damages or claims whatsoever and without prejudice to the Organisers’ other rights and remedies) and the Exhibitors shall indemnify the Organizers against any and all costs, claims, demands, losses, liabilities, charges, actions and expenses. Exhibitor shall purchase its own insurance coverage sufficient to insure against any possible liability.",
    },
    {
      title: "Cancellation of the Exhibition",
      content:
        "If the Exhibition is abandoned, cancelled or suspended in whole or in part by reason of war, fire, national emergency, labour dispute, strike, lockout, civil disturbance, inevitable accident, the non-availability of the Exhibition premises, or any other cause not within the control of the organisers, the organisers shall be under no obligation to repay the whole or part of the participation fees and shall be under no liability to the Exhibitor in respect of any such abandonment, cancellation or suspension. In such event, the organisers reserve the right to change the venue for the exhibition and to substitute the new venue for the venue named in the exhibition.",
    },
    {
      title: "Verbal Agreement",
      content:
        "Any verbal agreement concerning any aspect of the contract or the exhibition is not valid unless confirmed in writing.",
    },
    {
      title: "Exit Permit",
      content:
        "No material/exhibit shall be allowed to be taken out of the hall before 6.30 pm on the last day and without valid exit permit obtained from the authorised person/s appointed by the Organiser.",
    },
    {
      title: "Compliance with Laws",
      content:
        "Exhibitors shall not engage in any display, publication, performance, or other activity which is in conflict with any applicable law, regulation, rule or ordinance, nor shall Exhibitor, or its representatives or employees, engage in any lewd display, publication or performance. Exhibitor will be responsible for obtaining all necessary governmental permits and licences. Exhibitor shall comply with any rules promulgated by the owners or manager of the Trade Show premises.",
    },
    {
      title: "Choice of Law",
      content:
        "This contract shall be governed by and construed in accordance with the laws of the country of India.",
    },
    {
      title: "Unforeseen Occurrences",
      content:
        "In the event of any occurrences not foreseen in the Terms & Conditions, and the Rules & Regulations enclosed in the Exhibitor Manual, the decision of the Organiser shall be final.",
    },
  ];

  return (
    <>
      {/* <StickyNavbar /> */}

      <main className="min-h-screen bg-white pt-[160px] md:pt-[200px] pb-24">
        {/* Header Section */}
        <div className="w-full">
          <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Rules & Regulations
            </h1>
            <div className="h-1 w-20 bg-[#009ad7] rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl text-lg leading-relaxed">
              Please carefully review the terms, conditions, and guidelines for participating in the Consumer Electronics & Home Appliances Exhibition.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="mx-auto max-w-5xl px-6 py-4 md:py-8">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#009ad7]/10 text-[#009ad7] text-sm font-black">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="pl-11 text-gray-600 leading-relaxed space-y-3">
                  {section.content.split("\n").map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
