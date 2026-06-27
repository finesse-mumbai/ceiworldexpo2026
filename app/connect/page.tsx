import React from 'react';

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 md:mb-24 flex items-start justify-start font-sans text-black select-none">
            {/* L */}
            <span className="text-[6rem] md:text-[11rem] font-black leading-none transform translate-y-3 md:translate-y-10">
              L
            </span>
            
            {/* e */}
            <span className="text-[11rem] md:text-[22rem] font-black leading-none mx-0 md:mx-1">
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
            <div className="space-y-10 text-sm">
              <div>
                <h4 className="mb-3 font-sans text-base font-bold text-[#009ad7]">Mumbai</h4>
                <p className="text-black">309, Parvati Premises, Sun Mill Complex,<br />Lower Parel (W), Mumbai 400013, India.</p>
                <p className="mt-3 text-black">+91 022 40376700</p>
                <p className="text-black">contactus@worldexindia.com</p>
              </div>
              <div>
                <h4 className="mb-3 font-sans text-base font-bold text-[#009ad7]">Delhi</h4>
                <p className="text-black">F-10, First Floor, Kalkaji,<br />New Delhi 110019, India.</p>
                <p className="mt-3 text-black">+91 11 41802033 | +91 11 26285142</p>
                <p className="text-black">contactus@worldexindia.com</p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="First Name" />
                <Field label="Last Name" />
              </div>
              <Field label="Designation" />
              <Field label="Company Name" />
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Email" type="email" />
                <Field label="Mobile" />
              </div>
              <Field label="Website" />

              <div>
                <div className="mb-3 text-sm font-semibold text-black">Interested in:<span className="text-[#009ad7] ml-1">*</span></div>
                <div className="flex flex-wrap gap-6 text-sm">
                  {["Exhibiting", "Visiting", "Others"].map((label) => (
                    <label key={label} className="flex items-center gap-2 text-black cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 accent-black cursor-pointer" /> {label}
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                rows={4}
                placeholder="Message"
                className="w-full rounded-md border border-gray-200 bg-white p-3 text-sm text-black focus:border-[#009ad7] focus:outline-none transition-colors"
              />

              <button
                type="button"
                className="rounded-full bg-[#009ad7] px-8 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Submit
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
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold text-black">{label}</label>
      <input
        type={type}
        className="mt-2 w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm text-black focus:border-[#009ad7] focus:outline-none transition-colors"
      />
    </div>
  );
}
