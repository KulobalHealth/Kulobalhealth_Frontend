<<<<<<< HEAD
import React from 'react'


interface HelperProps {
  icon: React.ReactNode;
}

export default function Helper({ icon }: HelperProps) {
  return (
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-300">
                {icon}
          </div>
      </div>
  )
}
=======
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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
