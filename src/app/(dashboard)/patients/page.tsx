"use client";
import PatientRegistration from "@/components/dashbord/add-patients";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronLeft,
  ChevronRight,
  UserRound,
  Eye,
  Plus,
  CircleEllipsis
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TableHeaderComponent from "@/components/dashbord/table-header";

const patientsData = [
  {
    id: 1,
    name: "Olivia Rhye",
    dob: "9 Mar 2000",
    gender: "Male",
    contact: "0540777343",
    condition: "Asthma",
    lastVisit: "7 May, 2025",
    avatar: "/avatars/olivia.png",
  },
];

const ITEMS_PER_PAGE = 10;

export default function Patients() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

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
        handleSearch={handleSearch}
        title="Prescription Management"
        text="Manage your prescriptions effectively"
        component={<PatientRegistration />}
      />
      <Table className="border-2 border-gray-100 rounded-t-2xl">
        <TableHeader className="bg-gray-100 h-5">
          <TableRow>
            <TableHead className="text-left rounded-tl-2xl font-bold">
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
            <TableRow key={order.id} className="h-18">
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
                    <CircleEllipsis  />
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-2">
                    <div className="font-semibold text-sm px-2 py-1">
                      Actions
                    </div>
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
  );
}
