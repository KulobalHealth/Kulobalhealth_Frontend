<<<<<<< HEAD
"use client"
import PatientRegistration from "@/components/dashbord/add-patients"
import type React from "react"

import { useState } from "react"
import TableHeaderComponent from "@/components/dashbord/table-header"
import PatientTable from "@/components/dashbord/patients"


export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="w-full min-h-screen dark:bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <TableHeaderComponent
            handleSearch={handleSearch}
            title="Patient Management"
            text="Manage your patients effectively and track their medical records mb-10"
            component={<PatientRegistration />}
          />

          <PatientTable searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  )
}
=======
'use client';
import {
  ChevronLeft,
  ChevronRight,
  CircleEllipsis,
  Eye,
  Plus,
  UserRound,
} from 'lucide-react';
import { useState } from 'react';
import PatientRegistration from '@/components/dashbord/add-patients';
import TableHeaderComponent from '@/components/dashbord/table-header';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const patientsData = [
  {
    id: 1,
    name: 'Olivia Rhye',
    dob: '9 Mar 2000',
    gender: 'Male',
    contact: '0540777343',
    condition: 'Asthma',
    lastVisit: '7 May, 2025',
    avatar: '/avatars/olivia.png',
  },
];

const ITEMS_PER_PAGE = 10;

export default function Patients() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to page 1 on new search
  };

  const filteredData = patientsData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.condition.toLowerCase().includes(searchTerm) ||
      item.contact.toLowerCase().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedOrders = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="py-6 ">
      <TableHeaderComponent
        component={<PatientRegistration />}
        handleSearch={handleSearch}
        text="Manage your prescriptions effectively"
        title="Prescription Management"
      />
      <Table className="rounded-t-2xl border-2 border-gray-100">
        <TableHeader className="h-5 bg-gray-100">
          <TableRow>
            <TableHead className="rounded-tl-2xl text-left font-bold">
              Name
            </TableHead>
            <TableHead className="text-left font-bold">Date of Birth</TableHead>
            <TableHead className="text-left font-bold">Gender</TableHead>
            <TableHead className="text-left font-bold">Contact</TableHead>
            <TableHead className="text-left font-bold">
              Medical Condition
            </TableHead>
            <TableHead className="text-left font-bold">Last Visit</TableHead>
            <TableHead className="text-left font-bold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedOrders.map((order) => (
            <TableRow className="h-18" key={order.id}>
              <TableCell>
                <div className="flex items-center space-x-2 pl-6">
                  <UserRound />
                  <div>
                    <small>{order.name}</small>
                  </div>
                </div>
              </TableCell>
              <TableCell>{order.dob}</TableCell>
              <TableCell>{order.gender}</TableCell>
              <TableCell>{order.contact}</TableCell>
              <TableCell>{order.condition}</TableCell>
              <TableCell>{order.lastVisit}</TableCell>

              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <CircleEllipsis />
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-2">
                    <div className="px-2 py-1 font-semibold text-sm">
                      Actions
                    </div>
                    <div className="mt-1 space-y-1 text-sm">
                      <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-100">
                        <Eye className="h-4 w-4" /> View Details
                      </button>
                      <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 hover:bg-gray-100">
                        <Plus className="h-4 w-4" /> New Prescription
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex items-center justify-between">
        <Button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          size="sm"
          variant="outline"
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Previous
        </Button>

        <div className="space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => goToPage(page)}
              size="sm"
              variant={page === currentPage ? 'default' : 'outline'}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
          size="sm"
          variant="outline"
        >
          Next <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
