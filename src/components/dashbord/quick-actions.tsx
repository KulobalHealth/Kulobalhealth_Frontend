<<<<<<< HEAD
import type React from "react"

interface QuickActionsProps {
  text: string
  icon: React.ReactNode
  color?: string
  description?: string
}

export function QuickActions({
  text,
  icon,
  color = "bg-green-100 hover:bg-green-200 text-green-800",
  description,
}: QuickActionsProps) {
  return (
    <button
      className={`${color} dark:bg-transparent dark:border-gray-800 dark:text-white  rounded-2xl p-6 flex flex-col items-start space-y-4 transition-all duration-300 hover:scale-105 w-full text-left border-2 border-transparent hover:border-green-300`}
    >
      <div className="p-3 bg-white rounded-xl border-2 border-green-200 dark:bg-transparent">{icon}</div>
      <div>
        <h3 className="font-bold text-lg mb-1 ">{text}</h3>
        {description && <p className="text-sm opacity-80">{description}</p>}
      </div>
    </button>
  )
}
=======
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function QuickActions({
  color,
  text,
  icon,
}: {
  color?: string;
  text: string;
  icon?: React.ReactNode;
}) {
  return (
    <Button
      className={`${color} w-full justify-between rounded-xl px-6 py-6 text-white hover:${color} h-18`}
    >
      <div className="flex items-center gap-2 text-lg">
        {icon}
        <span>{text}</span>
      </div>
      <ChevronRight className="h-4 w-4" />
    </Button>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
