import type React from 'react';

interface HelperProps {
  icon: React.ReactNode;
}

export default function Helper({ icon }: HelperProps) {
  return (
    <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-300">
        {icon}
      </div>
    </div>
  );
}
