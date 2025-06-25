'use client';
import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PatientCardProps {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  contact: string;
  pharmacy: string;
  lastVisit: string;
  avatar: string;
}

export function PatientCard({
  id,
  name,
  dateOfBirth,
  gender,
  contact,
  pharmacy,
  lastVisit,
  avatar,
}: PatientCardProps) {
  return (
    <tr className="border-gray-100 border-b hover:bg-gray-50">
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-200">
            <img
              alt={name}
              className="h-full w-full object-cover"
              src={avatar || '/placeholder.svg'}
            />
          </div>
          <span className="font-medium">{name}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-gray-600">{dateOfBirth}</td>
      <td className="px-4 py-4 text-gray-600">{gender}</td>
      <td className="px-4 py-4 text-gray-600">{contact}</td>
      <td className="px-4 py-4 text-gray-600">{pharmacy}</td>
      <td className="px-4 py-4 text-gray-600">{lastVisit}</td>
      <td className="px-4 py-4">
        <Link href={`/patients/${id}`}>
          <Button size="sm" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </Link>
      </td>
    </tr>
  );
}
