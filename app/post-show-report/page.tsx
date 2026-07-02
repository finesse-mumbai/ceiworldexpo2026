import React from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function PostShowReportPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative flex flex-col">
      <main className="pt-64 md:pt-72 pb-20 flex-grow flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-12">
            Post Show Report
          </h1>

          {/* Report Grid Container */}
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center px-4">

            {/* Report 2018 */}
            <div className="w-full max-w-sm mb-5">
              <div className="report-main-wrapper text-center flex flex-col items-center">
                <div className="flipbook-card relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <a href="https://online.anyflip.com/qpeq/tkpn/mobile/index.html" target="_blank" rel="noopener noreferrer" className="block relative">
                    <div className="book-spine"></div>
                    <img
                      src="https://online.anyflip.com/qpeq/tkpn/files/thumb/34ebd7790da9124494dc409573305072.webp"
                      className="w-full h-auto max-h-[450px] object-cover tall-report-img"
                      alt="Report 1"
                    />
                    <div className="glass-overlay absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <div className="overlay-content flex flex-col items-center gap-2">
                        <i className="fas fa-expand-arrows-alt text-2xl"></i>
                        <span className="font-semibold">Post Show Report 2018</span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="button-wrapper mt-6 w-full">
                  <a
                    href="https://online.anyflip.com/qpeq/tkpn/mobile/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#00a4e4' }}
                    className="vibrant-btn inline-block w-full py-3 px-6 hover:opacity-90 text-white font-bold rounded-xl transition-opacity shadow-md"
                  >
                    Post Show Report - 2018
                  </a>
                </div>
              </div>
            </div>

            {/* Report 2019 */}
            <div className="w-full max-w-sm mb-5">
              <div className="report-main-wrapper text-center flex flex-col items-center">
                <div className="flipbook-card relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  <a href="https://online.anyflip.com/qpeq/pisv/mobile/index.html" target="_blank" rel="noopener noreferrer" className="block relative">
                    <div className="book-spine"></div>
                    <img
                      src="https://online.anyflip.com/qpeq/pisv/files/thumb/8c6a6e3738a6c7fcc91ff4b9f07d6819.webp"
                      className="w-full h-auto max-h-[450px] object-cover tall-report-img"
                      alt="Report 2"
                    />
                    <div className="glass-overlay absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <div className="overlay-content flex flex-col items-center gap-2">
                        <i className="fas fa-expand-arrows-alt text-2xl"></i>
                        <span className="font-semibold">Post Show Report 2019</span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="button-wrapper mt-6 w-full">
                  <a
                    href="https://online.anyflip.com/qpeq/pisv/mobile/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#00a4e4' }}
                    className="vibrant-btn inline-block w-full py-3 px-6 hover:opacity-90 text-white font-bold rounded-xl transition-opacity shadow-md"
                  >
                    Post Show Report - 2019
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}