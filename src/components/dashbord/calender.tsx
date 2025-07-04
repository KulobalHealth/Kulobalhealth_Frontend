<<<<<<< HEAD
import { CalendarIcon } from "lucide-react"

export default function Calendar() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex items-center space-x-3 bg-green-50 border border-green-200 rounded-lg px-4 py-2 dark:bg-transparent">
      <CalendarIcon className="w-5 h-5 text-green-600" />
      <span className="text-sm font-medium text-green-800">{formattedDate}</span>
    </div>
  )
}
=======
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
import { cn } from '@/lib/utils';

export default function EnhancedDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 0, 6),
    to: new Date(2025, 1, 10),
  });
  const [open, setOpen] = React.useState(false);
  const [tempDate, setTempDate] = React.useState<DateRange | undefined>(date);

  const applyDate = () => {
    setDate(tempDate);
    setOpen(false);
  };

  const cancelDate = () => {
    setTempDate(date);
    setOpen(false);
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
            id="date"
            variant={'outline'}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'MMM d, y')} -{' '}
                  {format(date.to, 'MMM d, y')}
                </>
              ) : (
                format(date.from, 'MMM d, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-4">
          <Calendar
            defaultMonth={tempDate?.from}
            initialFocus
            mode="range"
            numberOfMonths={2}
            onSelect={setTempDate}
            selected={tempDate}
          />
          <div className="mt-4 flex items-center justify-between space-x-2">
            <div className="text-muted-foreground text-sm">
              {tempDate?.from ? (
                tempDate.to ? (
                  <>
                    {format(tempDate.from, 'MMM d, y')} –{' '}
                    {format(tempDate.to, 'MMM d, y')}
                  </>
                ) : (
                  format(tempDate.from, 'MMM d, y')
                )
              ) : (
                <span>Select a date range</span>
              )}
            </div>
            <div className="flex space-x-2">
              <Button onClick={cancelDate} variant="ghost">
                Cancel
              </Button>
              <Button onClick={applyDate}>Apply</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
