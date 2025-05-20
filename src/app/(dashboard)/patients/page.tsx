import PatientTable from "@/components/dashbord/table";
import { Button } from "@/components/ui/button";
import { User ,Search} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="py-6">
      <header className="flex flex-row items-center justify-between m-y-4">
      <div className=" flex flex-col">
        <h1 className="text-2xl font-bold">Patient Management </h1>
        <p className="text-sm text-gray-500">Manage your patients here</p>
      </div>
      <Button className="bg-emerald-500 text-white rounded-lg mt-4">
        <User width={24} height={24}/>
        Add Patient
      </Button>
      </header>

      {/* searchbar */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search..."
          className="pl-10" // padding to make room for the icon
        />
      </div>


        
      <PatientTable/>
      
      
    </div>
  );
}
