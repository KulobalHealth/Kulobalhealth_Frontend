"use client"
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AppBadge } from '@/components/dashbord/badge'
import { Package, ChevronLeft, ChevronRight, UserRound, MoreHorizontal,  Eye, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import TableHeaderComponent from '@/components/dashbord/table-header'

const prescriptionData = [
  {
    id: 1,
    patientName: "Kelvin Lee",
    medication: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice a day",
    startDate: "11th Jan 2023",
    endDate: "11th Feb 2023",
    status: "Active",
  },
  {
    id: 2,
    patientName: "Sophia Walker",
    medication: "Amoxicillin",
    dosage: "250mg",
    frequency: "Three times a day",
    startDate: "5th Feb 2023",
    endDate: "15th Feb 2023",
    status: "Completed",
  },
  {
    id: 3,
    patientName: "James Smith",
    medication: "Ibuprofen",
    dosage: "400mg",
    frequency: "Once a day",
    startDate: "10th Mar 2023",
    endDate: "20th Mar 2023",
    status: "Active",
  },
  {
    id: 4,
    patientName: "Linda Johnson",
    medication: "Metformin",
    dosage: "850mg",
    frequency: "Twice a day",
    startDate: "1st Apr 2023",
    endDate: "1st Jul 2023",
    status: "Ongoing",
  },
  {
    id: 5,
    patientName: "Michael Brown",
    medication: "Atorvastatin",
    dosage: "10mg",
    frequency: "Once a day",
    startDate: "15th May 2023",
    endDate: "15th Nov 2023",
    status: "Active",
  },
  {
    id: 6,
    patientName: "Emily Davis",
    medication: "Lisinopril",
    dosage: "20mg",
    frequency: "Once a day",
    startDate: "20th Jun 2023",
    endDate: "20th Dec 2023",
    status: "Ongoing",
  },
  {
    id: 7,
    patientName: "Daniel Martinez",
    medication: "Azithromycin",
    dosage: "500mg",
    frequency: "Once daily for 3 days",
    startDate: "25th Jul 2023",
    endDate: "28th Jul 2023",
    status: "Completed",
  },
  {
    id: 8,
    patientName: "Ava Wilson",
    medication: "Prednisone",
    dosage: "10mg",
    frequency: "Once a day",
    startDate: "1st Aug 2023",
    endDate: "31st Aug 2023",
    status: "Completed",
  },
  {
    id: 9,
    patientName: "Ethan Thomas",
    medication: "Losartan",
    dosage: "50mg",
    frequency: "Once a day",
    startDate: "10th Sep 2023",
    endDate: "10th Mar 2024",
    status: "Active",
  },
  {
    id: 10,
    patientName: "Mia Garcia",
    medication: "Omeprazole",
    dosage: "20mg",
    frequency: "Once before meals",
    startDate: "5th Oct 2023",
    endDate: "5th Nov 2023",
    status: "Completed",
  },
]

const ITEMS_PER_PAGE = 10

export default function Prescriotions() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase())
    setCurrentPage(1) // Reset to page 1 on new search
  }

  const filteredData = prescriptionData.filter((item) =>
    item.patientName.toLowerCase().includes(searchTerm) ||
    item.medication.toLowerCase().includes(searchTerm) ||
    item.dosage.toLowerCase().includes(searchTerm)
  )

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  const paginatedOrders = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="py-6 ">
      <TableHeaderComponent 
        handleSearch={handleSearch} 
        title="Prescription Management"
        text="Manage your prescriptions effectively"
        component={
          <Button variant="outline" size="sm">
            <Package className="w-4 h-4 mr-2" /> New Prescription
          </Button>
        }
       />
      <Table className="border-2 border-gray-100 rounded-t-2xl">
        <TableHeader className="bg-gray-100 h-5">
          <TableRow>
            <TableHead className="text-left rounded-tl-2xl font-bold">Patient</TableHead>
            <TableHead className="text-left font-bold">Medication</TableHead>
            <TableHead className="text-left font-bold">Dosage</TableHead>
            <TableHead className="text-left font-bold">Frequency</TableHead>
            <TableHead className="text-left font-bold">Start</TableHead>
            <TableHead className="text-left font-bold">End Date</TableHead>
            <TableHead className="text-left font-bold">Status</TableHead>
            <TableHead className="text-left font-bold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedOrders.map((order) => (
            <TableRow key={order.id} className='h-18'>
              <TableCell>
                <div className="flex items-center space-x-2 pl-6">
                  <UserRound />
                  <div>
                    <small>{order.patientName}</small>
                  </div>
                </div>
              </TableCell>
              <TableCell>{order.medication}</TableCell>
              <TableCell>{order.dosage}</TableCell>
              <TableCell>{order.frequency}</TableCell>
              <TableCell>{order.startDate}</TableCell>
              <TableCell>{order.endDate}</TableCell>
              <TableCell>
                <AppBadge type={order.status} />
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <MoreHorizontal className="w-4 h-4 cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-2">
                    <div className="font-semibold text-sm px-2 py-1">Actions</div>
                    <div className="mt-1 space-y-1 text-sm">
                      <button className="flex items-center gap-2 w-full px-2 py-1.5 rounded hover:bg-gray-100">
                        <Eye className="w-4 h-4" /> View Details
                      </button>
                      <button className="flex items-center gap-2 w-full px-2 py-1.5 rounded hover:bg-gray-100">
                        <Plus className="w-4 h-4" /> New Prescription
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Previous
        </Button>

        <div className="space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={page === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => goToPage(page)}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}

