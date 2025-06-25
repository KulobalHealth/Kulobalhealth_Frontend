'use client';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const DateSelectorComponent = ({ placeholder }: { placeholder: string }) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <label className="text-sm" htmlFor="">
          {placeholder}
          <Button className="w-full justify-start text-left" variant="outline">
            {startDate ? format(startDate, 'PPP') : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </label>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="single"
          onSelect={setStartDate}
          selected={startDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateSelectorComponent;
