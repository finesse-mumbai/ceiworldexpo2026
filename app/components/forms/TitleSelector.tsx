"use client";

interface TitleSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
  options?: string[];
  name?: string;
}

export default function TitleSelector({
  value,
  onChange,
  error,
  label = "Title",
  options = ['mr', 'ms', 'mrs', 'dr'],
  name = "title",
}: TitleSelectorProps) {
  const errorId = `${name}-error`;

  return (
    <fieldset>
      <legend className="block text-sm font-bold text-slate-700 mb-3">
        {label} <span className="text-red-500">*</span>
      </legend>
      <div className="flex flex-wrap gap-6" aria-invalid={!!error} aria-describedby={error ? errorId : undefined}>
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 font-semibold text-slate-700 capitalize cursor-pointer select-none">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={(e) => onChange(e.target.value)}
              className="w-5 h-5 text-[#009ad7] border-slate-300 focus:ring-[#009ad7] cursor-pointer"
            />
            <span>{opt}.</span>
          </label>
        ))}
      </div>
      {error && <p id={errorId} className="text-red-500 text-xs mt-2 font-semibold">{error}</p>}
    </fieldset>
  );
}
