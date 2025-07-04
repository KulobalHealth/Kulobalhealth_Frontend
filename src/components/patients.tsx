<<<<<<< HEAD
"use client";

import { useState } from "react";
import {
  Download,
  Upload,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PatientTable } from "@/components/patient-table";
import { StatCard } from "@/components/stats-card";
import { Badge } from "@/components/ui/badge";
import type { Patient } from "@/lib/data";
import { patients } from "@/lib/data";

export function Patients() {
  const [searchQuery, setSearchQuery] = useState("");
  //eslint-disable-next-line
  const [data, setData] = useState<Patient[]>(patients);

  const totalPatients = data.length;
  const activePatients = data.filter(
    (patient) => patient.status === "active"
  ).length;
  const inactivePatients = data.filter(
    (patient) => patient.status === "inactive"
  ).length;
  const refillPatients = data.filter((patient) => patient.needsRefill).length;

  const filteredPatients = data.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.telephone.includes(searchQuery) ||
      patient.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPatient = () => {
    // This would open a modal or navigate to add patient form
    alert("Add patient functionality would go here");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Patient Care</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Upload className="h-4 w-4" />
            Import customers
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                More options
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            className="bg-emerald-500 hover:bg-emerald-600"
            onClick={handleAddPatient}
          >
            Add Patient
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatCard
          title="TOTAL PATIENT"
          value={totalPatients}
          status="current"
          statusColor="text-emerald-500"
        />
        <StatCard
          title="ACTIVE PATIENT"
          value={activePatients}
          status="current"
          statusColor="text-emerald-500"
        />
        <StatCard
          title="INACTIVE PATIENT"
          value={inactivePatients}
          status="current"
          statusColor="text-rose-500"
        />
        <div className="rounded-lg border bg-emerald-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium uppercase text-white">
                REFILL PATIENTS
              </p>
              <h2 className="text-4xl font-bold text-white">
                {refillPatients}
              </h2>
            </div>
            <Badge
              variant="outline"
              className="bg-white text-emerald-500 border-white"
            >
              Active
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search patient"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          filter By
        </Button>
      </div>

      <PatientTable data={filteredPatients} />
    </div>
  );
}
=======
'use client';

import {
  Download,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
  Upload,
} from 'lucide-react';
import { useState } from 'react';
import { PatientTable } from '@/components/patient-table';
import { StatCard } from '@/components/stats-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import type { Patient } from '@/lib/data';
import { patients } from '@/lib/data';

export function Patients() {
  const [searchQuery, setSearchQuery] = useState('');
  //eslint-disable-next-line
  const [data, setData] = useState<Patient[]>(patients);

  const totalPatients = data.length;
  const activePatients = data.filter(
    (patient) => patient.status === 'active'
  ).length;
  const inactivePatients = data.filter(
    (patient) => patient.status === 'inactive'
  ).length;
  const refillPatients = data.filter((patient) => patient.needsRefill).length;

  const filteredPatients = data.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.telephone.includes(searchQuery) ||
      patient.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPatient = () => {
    // This would open a modal or navigate to add patient form
    alert('Add patient functionality would go here');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Patient Care</h1>
        <div className="flex items-center gap-2">
          <Button className="gap-2" size="sm" variant="outline">
            <Upload className="h-4 w-4" />
            Import customers
          </Button>
          <Button className="gap-2" size="sm" variant="outline">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2" size="sm" variant="outline">
                More options
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            className="bg-emerald-500 hover:bg-emerald-600"
            onClick={handleAddPatient}
            size="sm"
          >
            Add Patient
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatCard
          status="current"
          statusColor="text-emerald-500"
          title="TOTAL PATIENT"
          value={totalPatients}
        />
        <StatCard
          status="current"
          statusColor="text-emerald-500"
          title="ACTIVE PATIENT"
          value={activePatients}
        />
        <StatCard
          status="current"
          statusColor="text-rose-500"
          title="INACTIVE PATIENT"
          value={inactivePatients}
        />
        <div className="rounded-lg border bg-emerald-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm text-white uppercase">
                REFILL PATIENTS
              </p>
              <h2 className="font-bold text-4xl text-white">
                {refillPatients}
              </h2>
            </div>
            <Badge
              className="border-white bg-white text-emerald-500"
              variant="outline"
            >
              Active
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-8"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search patient"
            type="search"
            value={searchQuery}
          />
        </div>
        <Button className="gap-2" size="sm" variant="outline">
          <SlidersHorizontal className="h-4 w-4" />
          filter By
        </Button>
      </div>

      <PatientTable data={filteredPatients} />
    </div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
