"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value,onChange }: Props) {

  return (
    <div className="relative w-full max-w-xl">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search repositories..."
        className="
          w-full
          rounded-xl
          border
          border-neutral-800
          bg-neutral-950
          py-3
          pl-11
          pr-4
          text-white
          placeholder:text-neutral-500
          outline-none
          transition
          focus:border-amber-500
        "
      />
    </div>
  );
}