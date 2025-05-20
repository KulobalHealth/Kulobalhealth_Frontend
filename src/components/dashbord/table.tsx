"use client"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight,  } from "lucide-react"

const patients = [
    {
        name: "Olivia Rhye",
        dob: "9 Mar 2000",
        gender: "Male",
        contact: "0540777343",
        condition: "Asthma",
        lastVisit: "7 May, 2025",
        avatar: "/avatars/olivia.png"
    },
    {
        name: "Olivia Rhye",
        dob: "9 Mar 2000",
        gender: "Male",
        contact: "0540777343",
        condition: "Asthma",
        lastVisit: "7 May, 2025",
        avatar: "/avatars/olivia.png"
    },
    {
        name: "Olivia Rhye",
        dob: "9 Mar 2000",
        gender: "Male",
        contact: "0540777343",
        condition: "Asthma",
        lastVisit: "7 May, 2025",
        avatar: "/avatars/olivia.png"
    },
    {
        name: "Olivia Rhye",
        dob: "9 Mar 2000",
        gender: "Male",
        contact: "0540777343",
        condition: "Asthma",
        lastVisit: "7 May, 2025",
        avatar: "/avatars/olivia.png"
    },
    {
        name: "Olivia Rhye",
        dob: "9 Mar 2000",
        gender: "Male",
        contact: "0540777343",
        condition: "Asthma",
        lastVisit: "7 May, 2025",
        avatar: "/avatars/olivia.png"
    },
    {
        name: "Olivia Rhye",
        dob: "9 Mar 2000",
        gender: "Male",
        contact: "0540777343",
        condition: "Asthma",
        lastVisit: "7 May, 2025",
        avatar: "/avatars/olivia.png"
    },
    

    // ... more patients
]

export default function PatientTable() {
    

    return (
        <div className="p-6">

            <Table className="">
                
            
                <TableHeader className=" bg-gray-100">
                    <TableRow>
                        <TableHead className="rounded-tl-2xl">Name</TableHead>
                        <TableHead>Date of Birth</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Medical Conditions</TableHead>
                        <TableHead>Last Visit</TableHead>
                        <TableHead className="rounded-tr-2xl">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {patients.map((patient, i) => (
                        <TableRow key={i}>
                            <TableCell className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src={patient.avatar} />
                                    <AvatarFallback>
                                        {patient.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                {patient.name}
                            </TableCell>
                            <TableCell>{patient.dob}</TableCell>
                            <TableCell>{patient.gender}</TableCell>
                            <TableCell>{patient.contact}</TableCell>
                            <TableCell>{patient.condition}</TableCell>
                            <TableCell>{patient.lastVisit}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="icon">
                                    ⟳
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-between items-center mt-4">
                <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </Button>

                <div className="space-x-1">
                    {[1, 2, 3, 8, 9, 10].map((page) => (
                        <Button key={page} variant="outline" size="sm">
                            {page}
                        </Button>
                    ))}
                </div>

                <Button variant="outline" size="sm">
                    Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
            </div>
        </div>
    )
}
