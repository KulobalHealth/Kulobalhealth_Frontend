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
import { Package, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const orderData = [
  {
    id: 1,
    productName: "Maleria Test Kit",
    orderNumber: "123456",
    paymentType: "Full Payment",
    paymentAmount: "$100.00",
    lastPaid: "11th Jan 2023",
    amountPaid: "$100.00",
    amountRemaining: "$0.00",
    orderStatus: "Delivered",
    orderDate: "10th Jan 2023",
  },
  {
    id: 2,
    productName: "HIV Test Kit",
    orderNumber: "123457",
    paymentType: "Credit",
    paymentAmount: "$200.00",
    lastPaid: "12th Jan 2023",
    amountPaid: "$100.00",
    amountRemaining: "$100.00",
    orderStatus: "Shipped",
    orderDate: "11th Jan 2023",
  },
  {
    id: 3,
    productName: "COVID-19 Rapid Test",
    orderNumber: "123460",
    paymentType: "Installment",
    paymentAmount: "$300.00",
    lastPaid: "15th Jan 2023",
    amountPaid: "$150.00",
    amountRemaining: "$150.00",
    orderStatus: "Shipped",
    orderDate: "14th Jan 2023",
  },
  {
    id: 4,
    productName: "Blood Glucose Meter",
    orderNumber: "123461",
    paymentType: "Full Payment",
    paymentAmount: "$75.00",
    lastPaid: "13th Jan 2023",
    amountPaid: "$75.00",
    amountRemaining: "$0.00",
    orderStatus: "Delivered",
    orderDate: "12th Jan 2023",
  },
  {
    id: 5,
    productName: "Pregnancy Test Kit",
    orderNumber: "123462",
    paymentType: "Credit",
    paymentAmount: "$120.00",
    lastPaid: "16th Jan 2023",
    amountPaid: "$60.00",
    amountRemaining: "$60.00",
    orderStatus: "Processing",
    orderDate: "15th Jan 2023",
  },
  {
    id: 6,
    productName: "Cholesterol Monitoring Kit",
    orderNumber: "123463",
    paymentType: "Full Payment",
    paymentAmount: "$90.00",
    lastPaid: "17th Jan 2023",
    amountPaid: "$90.00",
    amountRemaining: "$0.00",
    orderStatus: "Delivered",
    orderDate: "16th Jan 2023",
  },
  {
    id: 7,
    productName: "Blood Pressure Monitor",
    orderNumber: "123464",
    paymentType: "Installment",
    paymentAmount: "$250.00",
    lastPaid: "18th Jan 2023",
    amountPaid: "$100.00",
    amountRemaining: "$150.00",
    orderStatus: "Processing",
    orderDate: "17th Jan 2023",
  },
  {
    id: 8,
    productName: "Urine Test Strips",
    orderNumber: "123465",
    paymentType: "Credit",
    paymentAmount: "$60.00",
    lastPaid: "19th Jan 2023",
    amountPaid: "$30.00",
    amountRemaining: "$30.00",
    orderStatus: "Cancelled",
    orderDate: "18th Jan 2023",
  },
  {
    id: 9,
    productName: "Stethoscope",
    orderNumber: "123466",
    paymentType: "Full Payment",
    paymentAmount: "$45.00",
    lastPaid: "20th Jan 2023",
    amountPaid: "$45.00",
    amountRemaining: "$0.00",
    orderStatus: "Delivered",
    orderDate: "19th Jan 2023",
  },
  {
    id: 10,
    productName: "Thermometer Digital",
    orderNumber: "123467",
    paymentType: "Installment",
    paymentAmount: "$40.00",
    lastPaid: "21st Jan 2023",
    amountPaid: "$20.00",
    amountRemaining: "$20.00",
    orderStatus: "Processing",
    orderDate: "20th Jan 2023",
  },
  {
    id: 11,
    productName: "Allergy Test Kit",
    orderNumber: "123468",
    paymentType: "Full Payment",
    paymentAmount: "$150.00",
    lastPaid: "22nd Jan 2023",
    amountPaid: "$150.00",
    amountRemaining: "$0.00",
    orderStatus: "Shipped",
    orderDate: "21st Jan 2023",
  },
  {
    id: 12,
    productName: "Vision Test Chart",
    orderNumber: "123469",
    paymentType: "Credit",
    paymentAmount: "$30.00",
    lastPaid: "23rd Jan 2023",
    amountPaid: "$15.00",
    amountRemaining: "$15.00",
    orderStatus: "Processing",
    orderDate: "22nd Jan 2023",
  },
  {
    id: 13,
    productName: "Pulse Oximeter",
    orderNumber: "123470",
    paymentType: "Full Payment",
    paymentAmount: "$65.00",
    lastPaid: "24th Jan 2023",
    amountPaid: "$65.00",
    amountRemaining: "$0.00",
    orderStatus: "Delivered",
    orderDate: "23rd Jan 2023",
  },
  {
    id: 14,
    productName: "First Aid Kit",
    orderNumber: "123471",
    paymentType: "Credit",
    paymentAmount: "$90.00",
    lastPaid: "25th Jan 2023",
    amountPaid: "$40.00",
    amountRemaining: "$50.00",
    orderStatus: "Shipped",
    orderDate: "24th Jan 2023",
  },
  {
    id: 15,
    productName: "HbA1c Test Kit",
    orderNumber: "123472",
    paymentType: "Installment",
    paymentAmount: "$180.00",
    lastPaid: "26th Jan 2023",
    amountPaid: "$60.00",
    amountRemaining: "$120.00",
    orderStatus: "Processing",
    orderDate: "25th Jan 2023",
  },
  {
    id: 16,
    productName: "Nebulizer",
    orderNumber: "123473",
    paymentType: "Full Payment",
    paymentAmount: "$100.00",
    lastPaid: "27th Jan 2023",
    amountPaid: "$100.00",
    amountRemaining: "$0.00",
    orderStatus: "Delivered",
    orderDate: "26th Jan 2023",
  },
  {
    id: 17,
    productName: "Medical Gloves - Box",
    orderNumber: "123474",
    paymentType: "Credit",
    paymentAmount: "$50.00",
    lastPaid: "28th Jan 2023",
    amountPaid: "$25.00",
    amountRemaining: "$25.00",
    orderStatus: "Shipped",
    orderDate: "27th Jan 2023",
  },
  {
    id: 18,
    productName: "Otoscope",
    orderNumber: "123475",
    paymentType: "Full Payment",
    paymentAmount: "$80.00",
    lastPaid: "29th Jan 2023",
    amountPaid: "$80.00",
    amountRemaining: "$0.00",
    orderStatus: "Delivered",
    orderDate: "28th Jan 2023",
  },
  {
    id: 19,
    productName: "Diagnostic Penlight",
    orderNumber: "123476",
    paymentType: "Credit",
    paymentAmount: "$25.00",
    lastPaid: "30th Jan 2023",
    amountPaid: "$10.00",
    amountRemaining: "$15.00",
    orderStatus: "Processing",
    orderDate: "29th Jan 2023",
  },
  {
    id: 20,
    productName: "Reflex Hammer",
    orderNumber: "123477",
    paymentType: "Full Payment",
    paymentAmount: "$35.00",
    lastPaid: "31st Jan 2023",
    amountPaid: "$35.00",
    amountRemaining: "$0.00",
    orderStatus: "Delivered",
    orderDate: "30th Jan 2023",
  },
  {
    id: 21,
    productName: "Medical Mask Pack",
    orderNumber: "123478",
    paymentType: "Installment",
    paymentAmount: "$20.00",
    lastPaid: "1st Feb 2023",
    amountPaid: "$10.00",
    amountRemaining: "$10.00",
    orderStatus: "Shipped",
    orderDate: "31st Jan 2023",
  },
  {
    id: 22,
    productName: "Antiseptic Solution",
    orderNumber: "123479",
    paymentType: "Full Payment",
    paymentAmount: "$15.00",
    lastPaid: "2nd Feb 2023",
    amountPaid: "$15.00",
    amountRemaining: "$0.00",
    orderStatus: "Delivered",
    orderDate: "1st Feb 2023",
  }
  
]

const ITEMS_PER_PAGE = 10

export default function Payment() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(orderData.length / ITEMS_PER_PAGE)

  const paginatedOrders = orderData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="py-6 flex flex-col items-center">
      <Table className="border-2 border-gray-100 rounded-t-2xl w-full max-w-7xl mx-auto ">
        <TableHeader className="bg-gray-100 h-5">
          <TableRow className=''>
            <TableHead className="text-left rounded-tl-2xl font-bold">Patient/Order No.</TableHead>
            <TableHead className="text-left font-bold">Payment Type/Amount</TableHead>
            <TableHead className="text-left font-bold">Paid/Remaining</TableHead>
            <TableHead className="text-left font-bold ">Last Paid</TableHead>
            <TableHead className="text-left rounded-tr-2xl font-bold  w-[150px]">Order Status/Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >
          {paginatedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <div className="flex items-center space-x-2 pl-6">
                  <Package />
                  <div>
                    <h1>{order.productName}</h1>
                    <small>{order.orderNumber}</small>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col space-y-2 w-fit font-bold">
                  <AppBadge type={order.paymentType} />
                  <p>{order.paymentAmount}</p>
                </div>
              </TableCell>
              <TableCell>
                <p>{order.amountPaid}</p>
                <p className="font-bold">{order.amountRemaining}</p>
              </TableCell>
              <TableCell>
                <p>{order.lastPaid}</p>
              </TableCell>
              <TableCell >
                <div className="flex flex-col space-y-2 w-fit">
                  <AppBadge type={order.orderStatus} />
                  <p className="font-bold">{order.orderDate}</p>
                </div>
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
