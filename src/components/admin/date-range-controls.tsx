'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';
import type { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DateRangeControlsProps {
  selectedDateRange: string;
  onDateRangeChange: (range: string) => void;
  onCustomDateRangeChange?: (dateRange: DateRange | undefined) => void;
}

export function DateRangeControls({
  selectedDateRange,
  onDateRangeChange,
  onCustomDateRangeChange,
}: DateRangeControlsProps) {
  const dateRangeOptions = ['12 months', '30 days', '7 days', '24 hours'];
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 0, 6), // January 6, 2025
    to: new Date(2025, 1, 10), // February 10, 2025
  });
  const [open, setOpen] = React.useState(false);

  const handleCancel = () => {
    setDateRange(undefined);
    setOpen(false);
  };

  const handleApply = () => {
    onCustomDateRangeChange?.(dateRange);
    setOpen(false);
  };

  const formatDateRange = () => {
    if (!dateRange?.from) return 'Select Dates';
    if (!dateRange?.to) return format(dateRange.from, 'MMM d, yyyy');
    return `${format(dateRange.from, 'MMM d, yyyy')} - ${format(
      dateRange.to,
      'MMM d, yyyy'
    )}`;
  };

  return (
    <div className="flex items-center justify-between">
      <Tabs onValueChange={onDateRangeChange} value={selectedDateRange}>
        <TabsList className="bg-gray-100">
          {dateRangeOptions.map((option) => (
            <TabsTrigger
              className="bg-white text-xs data-[state=active]:bg-secondary data-[state=active]:text-black"
              key={option}
              value={option}
            >
              {option}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            className="bg-white text-gray-700"
            size="sm"
            variant="outline"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDateRange()}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-auto p-0">
          <div className="w-fit rounded-lg border bg-white shadow-lg">
            <Calendar
              className="p-4"
              classNames={{
                months: 'flex flex-row space-x-4',
                month: 'space-y-4',
                caption: 'flex justify-center pt-1 relative items-center',
                caption_label: 'text-sm font-medium',
                nav: 'space-x-1 flex items-center',
                nav_button:
                  'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',
                table: 'w-full border-collapse space-y-1',
                head_row: 'flex',
                head_cell:
                  'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
                row: 'flex w-full mt-2',
                cell: 'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
                day: 'h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md',
                day_range_start:
                  'day-range-start bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-l-md rounded-r-none',
                day_range_end:
                  'day-range-end bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-r-md rounded-l-none',
                day_selected:
                  'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
                day_today: 'bg-accent text-accent-foreground',
                day_outside:
                  'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
                day_disabled: 'text-muted-foreground opacity-50',
                day_range_middle:
                  'aria-selected:bg-accent aria-selected:text-accent-foreground rounded-none',
                day_hidden: 'invisible',
              }}
              defaultMonth={dateRange?.from || new Date(2025, 0, 1)}
              mode="range"
              numberOfMonths={2}
              onSelect={setDateRange}
              selected={dateRange}
            />

            <div className="flex items-center justify-between border-t px-4 pt-2 pb-4">
              <div className="font-medium text-sm">{formatDateRange()}</div>
              <div className="flex gap-2">
                <Button
                  className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  onClick={handleCancel}
                  size="sm"
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button className="" onClick={handleApply} size="sm">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
