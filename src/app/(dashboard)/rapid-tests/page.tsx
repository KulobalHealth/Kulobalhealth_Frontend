"use client";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  MoreHorizontal,
  Plus,
  User,
  UserRound,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AppBadge } from "@/components/dashbord/badge";
import TableHeaderComponent from "@/components/dashbord/table-header";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const patientsData = [
  {
    id: 1,
    name: "John Doe",
    testType: "Blood Test",
    results: "145mg/dL",
    status: "Normal",
    date: "7th March 2023",
    conductedBy: "Dr. Smith",
  },
  {
    id: 1,
    name: "John Doe",
    testType: "Blood Test",
    results: "145mg/dL",
    status: "Elevated",
    date: "7th March 2023",
    conductedBy: "Dr. Smith",
  },
  {
    id: 1,
    name: "John Doe",
    testType: "Blood Test",
    results: "145mg/dL",
    status: "High",
    date: "7th March 2023",
    conductedBy: "Dr. Smith",
  },
  {
    id: 1,
    name: "John Doe",
    testType: "Blood Test",
    results: "145mg/dL",
    status: "BorderLine High",
    date: "7th March 2023",
    conductedBy: "Dr. Smith",
  },
];

const ITEMS_PER_PAGE = 10;

export default function RapidTests() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to page 1 on new search
  };

  const filteredData = patientsData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.testType.toLowerCase().includes(searchTerm) ||
      item.conductedBy.toLowerCase().includes(searchTerm)
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
        component={
          <Button
            className="w-[200px] bg-emerald-600 text-white"
            onClick={() => router.push("/rapid-tests/add-new-test")}
          >
            <User height={24} width={24} />
            Add Patient
          </Button>
        }
        handleSearch={handleSearch}
        text="Manage your prescriptions effectively"
        title="Prescription Management"
      />
      <Table className="rounded-t-2xl border-2 border-gray-100">
        <TableHeader className="h-5 bg-gray-100">
          <TableRow>
            <TableHead className="rounded-tl-2xl text-left font-bold">
              Patient
            </TableHead>
            <TableHead className="text-left font-bold">Test Type</TableHead>
            <TableHead className="text-left font-bold">Results</TableHead>
            <TableHead className="text-left font-bold">Date</TableHead>
            <TableHead className="text-left font-bold">Status</TableHead>
            <TableHead className="text-left font-bold">Conducted By</TableHead>
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
              <TableCell>{order.testType}</TableCell>
              <TableCell>{order.results}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <AppBadge type={order.status} />
              </TableCell>
              <TableCell>{order.conductedBy}</TableCell>

              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <MoreHorizontal className="h-4 w-4 cursor-pointer" />
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
              variant={page === currentPage ? "default" : "outline"}
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
