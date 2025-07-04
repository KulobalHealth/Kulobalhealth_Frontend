import { FilePlus, Package, ShoppingBag, TestTube, Users } from "lucide-react";
import React from "react";
import Calender from "@/components/dashbord/calender";
import ChronicPatients from "@/components/dashbord/chronic-patients";
import { DataDisplay } from "@/components/dashbord/data-display";
import { QuickActions } from "@/components/dashbord/quick-actions";
import StatCard from "@/components/dashbord/stats-card";
import SubscriptionStatus from "@/components/dashbord/subscription-status";
import RecentTransactions from "@/components/dashbord/transaction-card";

export default function MedicalDashboard() {
  return (
    <div className="mt-10 flex w-full flex-col gap-4 space-y-4 px-3">
      {/* header Section */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <Calender />
      </div>

      {/* Stats Section */}
      <section className="flex flex-row items-center space-x-4 ">
        <StatCard
          discription="Registered Patients"
          icon={<Users />}
          title="Patient Management"
          value={"128"}
        />
        <StatCard
          discription="Amounts of products purchased"
          icon={<TestTube />}
          title="Rapid Tests"
          value={"24"}
        />
        <StatCard
          discription="Amounts of products purchased"
          icon={<ShoppingBag />}
          title="Order Value"
          value={"30000"}
        />
        <StatCard
          discription="Pending orders"
          icon={<Package />}
          title="Orders"
          value={"40"}
        />
      </section>

      {/* Quick Actions Section */}
      <div className="flex flex-col justify-between font-bold text-2xl">
        <p className="mb-3">Quick Actions</p>
        <section className="flex flex-row items-center space-x-4">
          <QuickActions icon={<FilePlus />} text="Prescription" />
          <QuickActions
            color="bg-black"
            icon={<TestTube />}
            text="Rapid Testing"
          />
          <QuickActions
            color="bg-blue-800"
            icon={<Users />}
            text="Register Patient "
          />
        </section>
      </div>

      {/* Data Display Section */}
      <section className="grid grid-cols-2 gap-4">
        <RecentTransactions />
        <DataDisplay />
        <ChronicPatients />
        <SubscriptionStatus />
      </section>
    </div>
  );
}
