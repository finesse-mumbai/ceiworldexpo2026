"use client";

import React, { useState } from 'react';

export default function Newsletter() {
  const [bemail, setBemail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bemail.trim()) return;

    setStatus('loading');
    setMessage('');

    const params = new URLSearchParams();
    params.append('bemail', bemail);

    try {
      const response = await fetch(
        '/api/proxy?type=newsLetter',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        }
      );

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error('Invalid response format from server.');
      }

      if (data && data.status === 'Success') {
        setStatus('success');
        setMessage(data.message || 'Subscribed successfully!');
        setBemail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Failed to subscribe. Please try again.');
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Server connection failed. Please try again later.';
      setStatus('error');
      setMessage(errorMsg);
    }
  };

  return (
    <div className="bg-[#dce319] rounded-[2rem] p-8 md:p-12 w-full max-w-[850px] text-center md:text-left shadow-lg">
      <h2 className="text-black text-5xl sm:text-6xl md:text-[5rem] font-black mb-3 font-sans tracking-[0.03em]">newsletter!</h2>
      <p className="text-black font-medium mb-10 text-base sm:text-lg opacity-90">Subscribe to our newsletter!</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[90%] mx-auto md:mx-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-stretch w-full">
          <input
            type="email"
            value={bemail}
            onChange={(e) => setBemail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full sm:flex-[2] px-6 py-3.5 bg-white rounded-full outline-none text-[15px] text-black placeholder-gray-400 font-medium text-center sm:text-left shadow-sm"
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:flex-[1] sm:w-auto px-8 py-3.5 bg-transparent border-[1.5px] border-black text-black text-[15px] font-semibold rounded-full hover:bg-black hover:text-[#dce319] transition-colors whitespace-nowrap shadow-sm disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Subscribe'}
          </button>
        </div>

        {message && (
          <p className={`text-sm font-bold mt-2 text-left px-2 ${status === 'success' ? 'text-emerald-800' : 'text-red-700'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

