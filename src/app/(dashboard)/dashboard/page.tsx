import React from 'react'
import  StatCard  from '@/components/dashbord/stats-card'
import { QuickActions } from '@/components/dashbord/quick-actions'
import { DataDisplay } from '@/components/dashbord/data-display'
import Calender from '@/components/dashbord/calender'
import { FilePlus, User } from 'lucide-react'
import RecentTransactions from '@/components/dashbord/transaction-card'
import  SubscriptionStatus  from '@/components/dashbord/subscription-status'
import ChronicPatients from '@/components/dashbord/chronic-patients'




export default function MedicalDashboard() {
  return (
    <div className='flex flex-col gap-4 mt-10 w-full px-10 space-y-4'>
      {/* header Section */}
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <Calender/>
      </div>

      {/* Stats Section */}
      <section className='flex flex-row items-center space-x-4'>
        <StatCard title='Patient Management' value={"128"} discription='Registered Patients' icon ={<User/>}/>
        <StatCard title='Order Value' value={"30000"} discription='Amounts of products purchased' icon ={<User/>}/>
        <StatCard title='Order Value' value={"30000"} discription='Amounts of products purchased' icon={<User />} />
        <StatCard title='Orders' value={"24"} discription='Pending orders' icon ={<User/>}/>
      </section>

      {/* Quick Actions Section */}
      <div className='flex flex-col justify-between text-2xl font-bold'>
        <p className='mb-3'>Quick Actions</p>
        <section className='flex flex-row items-center space-x-4'>
          <QuickActions color='' text='Prescription' icon={<FilePlus />} />
          <QuickActions  color='bg-black' text='Rapid Testing'/>
          <QuickActions color='bg-blue-800' text='Register Patient '/>
        </section>
      </div>
       
      
      {/* Data Display Section */}
      <section className='grid grid-cols-2 gap-4'>
        <RecentTransactions/>
        <DataDisplay/>
        <ChronicPatients/>
        <SubscriptionStatus/>
        </section>






    </div>
    
    
  )
}
