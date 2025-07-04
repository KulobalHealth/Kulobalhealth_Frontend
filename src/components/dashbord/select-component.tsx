import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  data?: [];
  placeholder: string;
}

const SelectComponent = ({ placeholder }: SelectProps) => {
  const names = [
    "Isaac Desi Amare",
    "Mary",
    "Nasir Obel",
    "Martha",
    "Isaac",
    "James",
    "John",
    "Philip",
    "George",
  ];

  const [selected, setSelected] = useState("");

  return (
    <label className="block space-y-1 text-sm">
      {placeholder}
      <Select onValueChange={setSelected} value={selected}>
        <SelectTrigger>
          <SelectValue placeholder="Select patient" />
        </SelectTrigger>
        <SelectContent className="w-72">
          <Command>
            <CommandInput placeholder="Search patient..." />
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {names.map((name) => (
                <CommandItem
                  key={name}
                  onSelect={() => setSelected(name)}
                  value={name}
                >
                  {name}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </SelectContent>
      </Select>
    </label>
  );
};

export default SelectComponent;
