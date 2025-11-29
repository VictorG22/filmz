import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-600 py-2">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-2 text-left"
      >
        <span className="text-lg font-medium">{title}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="pt-2 pb-4 text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;