import { Button } from "@/components/ui/button"
import { FilePlus, ChevronRight } from "lucide-react"

export function QuickActions({ color, text }: { color: string; text: string ,icon: React.ReactNode }) {
    return (
        <Button
            className={`${color}  text-white px-6 py-6 rounded-xl w-full justify-between  `}
        >
            <div className="flex items-center gap-2">
                <FilePlus className="w-4 h-4" />
                <span>{text}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
        </Button>
    )
}
