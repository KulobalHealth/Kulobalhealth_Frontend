"use client";

import type React from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// Filter section component with collapsible functionality
function FilterSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border rounded-md p-4 bg-white">
      <div
        className="flex items-center justify-between mb-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-sm font-medium">{title}</h4>
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </div>

      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}

export default function Filters() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium mb-2">Filters</h3>

      <FilterSection title="Sort By" defaultOpen={true}>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="sort"
              className="h-4 w-4 text-green-500"
            />
            Price: High - Low
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="sort"
              className="h-4 w-4 text-green-500"
            />
            Price: Low - High
          </label>
        </div>
      </FilterSection>

      <FilterSection title="Price, GHC">
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Min"
            className="w-full border rounded-md px-2 py-1 text-sm"
          />
          <span>-</span>
          <input
            type="text"
            placeholder="Max"
            className="w-full border rounded-md px-2 py-1 text-sm"
          />
        </div>

        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              className="h-4 w-4 text-green-500"
            />
            ₵0 - ₵100
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              className="h-4 w-4 text-green-500"
            />
            ₵100 - ₵200
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              className="h-4 w-4 text-green-500"
            />
            ₵200 - ₵300
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              className="h-4 w-4 text-green-500"
            />
            ₵300 - ₵400
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              className="h-4 w-4 text-green-500"
            />
            ₵400 - ₵500
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              className="h-4 w-4 text-green-500"
            />
            ₵500+
          </label>
        </div>
      </FilterSection>

      <FilterSection title="Category">
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked
              className="h-4 w-4 rounded text-green-500"
            />
            Testing Kits
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Vaccines
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Antibiotics
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Vital Monitoring Devices
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Diagnostic Tools
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Medications
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Sanitation & PPE
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Emergency Equipment
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Medical Consumables
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Rehabilitation Tools
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Wearable Tech
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            First Aid Supplies
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Telehealth Devices
          </label>
        </div>
      </FilterSection>

      <FilterSection title="Brand">
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked
              className="h-4 w-4 rounded text-green-500"
            />
            Abbott
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Roche Diagnostics
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Bio-Rad
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Quidel Technologies
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Moderna
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Johnson & Johnson
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Amphaster
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Emergent BioSolutions
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Garmin
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded text-green-500" />
            Dexcom
          </label>
        </div>
      </FilterSection>
    </div>
  );
}
