"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { DateRange } from "react-day-picker"

export default function EnhancedDateRangePicker({
    className,
}: React.HTMLAttributes<HTMLDivElement>) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2025, 0, 6),
        to: new Date(2025, 1, 10),
    })
    const [open, setOpen] = React.useState(false)
    const [tempDate, setTempDate] = React.useState<DateRange | undefined>(date)

    const applyDate = () => {
        setDate(tempDate)
        setOpen(false)
    }

    const cancelDate = () => {
        setTempDate(date)
        setOpen(false)
    }

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-[300px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "MMM d, y")} - {format(date.to, "MMM d, y")}
                                </>
                            ) : (
                                format(date.from, "MMM d, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={tempDate?.from}
                        selected={tempDate}
                        onSelect={setTempDate}
                        numberOfMonths={2}
                    />
                    <div className="flex items-center justify-between space-x-2 mt-4">
                        <div className="text-sm text-muted-foreground">
                            {tempDate?.from ? (
                                tempDate.to ? (
                                    <>
                                        {format(tempDate.from, "MMM d, y")} – {format(tempDate.to, "MMM d, y")}
                                    </>
                                ) : (
                                    format(tempDate.from, "MMM d, y")
                                )
                            ) : (
                                <span>Select a date range</span>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="ghost" onClick={cancelDate}>
                                Cancel
                            </Button>
                            <Button onClick={applyDate}>Apply</Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
