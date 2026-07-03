"use client";

import { Phone } from 'lucide-react';

interface PhoneFieldProps {
  stdCode: string;
  onStdCodeChange: (value: string) => void;
  telephone: string;
  onTelephoneChange: (value: string) => void;
  inputType?: 'text' | 'number';
  idPrefix?: string;
}

export default function PhoneField({
  stdCode,
  onStdCodeChange,
  telephone,
  onTelephoneChange,
  inputType = 'text',
  idPrefix = 'phone',
}: PhoneFieldProps) {
  return (
    <div className="flex gap-4">
      <div className="w-1/3 sm:w-1/4">
        <label htmlFor={`${idPrefix}-std`} className="block text-sm font-semibold text-slate-700 mb-1.5">
          STD
        </label>
        <input
          id={`${idPrefix}-std`}
          type={inputType}
          value={stdCode}
          onChange={(e) => onStdCodeChange(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
          placeholder="91"
        />
      </div>
      <div className="w-2/3 sm:w-3/4">
        <label htmlFor={`${idPrefix}-tel`} className="block text-sm font-semibold text-slate-700 mb-1.5">
          Telephone
        </label>
        <div className="relative">
          <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            id={`${idPrefix}-tel`}
            type={inputType}
            value={telephone}
            onChange={(e) => onTelephoneChange(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009ad7]/20 focus:border-[#009ad7] transition-all font-semibold"
            placeholder="Landline number"
          />
        </div>
      </div>
    </div>
  );
}
