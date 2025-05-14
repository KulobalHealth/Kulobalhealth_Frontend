"use client";

import type React from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

const filterData = [
  {
    title: "Sort By",
    type: "radio",
    options: [
      { label: "Price: High - Low", value: "high-low" },
      { label: "Price: Low - High", value: "low-high" },
    ],
  },
  {
    title: "Price, GHC",
    type: "radio",
    options: [
      { label: "₵0 - ₵100", value: "0-100" },
      { label: "₵100 - ₵200", value: "100-200" },
      { label: "₵200 - ₵300", value: "200-300" },
      { label: "₵300 - ₵400", value: "300-400" },
      { label: "₵400 - ₵500", value: "400-500" },
      { label: "₵500+", value: "500+" },
    ],
    customInputs: true,
  },
  {
    title: "Category",
    type: "checkbox",
    options: [
      "Testing Kits",
      "Vaccines",
      "Antibiotics",
      "Vital Monitoring Devices",
      "Diagnostic Tools",
      "Medications",
      "Sanitation & PPE",
      "Emergency Equipment",
      "Medical Consumables",
      "Rehabilitation Tools",
      "Wearable Tech",
      "First Aid Supplies",
      "Telehealth Devices",
    ].map((label) => ({ label, value: label })),
  },
  {
    title: "Brand",
    type: "checkbox",
    options: [
      "Abbott",
      "Roche Diagnostics",
      "Bio-Rad",
      "Quidel Technologies",
      "Moderna",
      "Johnson & Johnson",
      "Amphaster",
      "Emergent BioSolutions",
      "Garmin",
      "Dexcom",
    ].map((label) => ({ label, value: label })),
  },
];

export default function Filters() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-[26px] mb-2">Filters</h3>

      {filterData.map(({ title, type, options, customInputs }) => (
        <FilterSection
          key={title}
          title={title}
          defaultOpen={title === "Sort By"}
        >
          {customInputs && (
            <div className="flex items-center gap-2 mb-2">
              <Input type="text" placeholder="Min" className="w-full text-sm" />
              <span>-</span>
              <Input type="text" placeholder="Max" className="w-full text-sm" />
            </div>
          )}
          <div className="space-y-2 text-sm">
            {type === "radio" ? (
              <RadioGroup defaultValue={options[0].value}>
                {options.map(({ label, value }) => (
                  <div className="flex items-center space-x-2" key={value}>
                    <RadioGroupItem value={value} id={value} />
                    <Label htmlFor={value}>{label}</Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              options.map(({ label, value }) => (
                <div className="flex items-center space-x-2" key={value}>
                  <Checkbox id={value} value={value} />
                  <Label htmlFor={value}>{label}</Label>
                </div>
              ))
            )}
          </div>
        </FilterSection>
      ))}
    </div>
  );
}
