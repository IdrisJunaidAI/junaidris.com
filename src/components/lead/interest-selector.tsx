"use client";

type InterestSelectorProps = {
  id: string;
  interests: string[];
  label: string;
  name: string;
  onChange: (value: string) => void;
  theme?: "light" | "dark";
  value: string;
};

export function InterestSelector({
  id,
  interests,
  label,
  name,
  onChange,
  theme = "light",
  value,
}: InterestSelectorProps) {
  const isDark = theme === "dark";

  return (
    <div>
      <label
        className={`block text-sm font-semibold ${isDark ? "text-white" : "text-zinc-900"}`}
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
        id={id}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        <option value="">Choose an interest</option>
        {interests.map((interest) => (
          <option key={interest} value={interest}>
            {interest}
          </option>
        ))}
      </select>
    </div>
  );
}
