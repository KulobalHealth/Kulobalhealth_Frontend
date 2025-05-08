import {
  PlusIcon,
  MoreVertical,
  CheckCircle,
  Share,
  Download,
  Link2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";

export default function MedicalLabDashboard() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Welcome, Dr.Lydia</h1>
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          <PlusIcon className="h-4 w-4 mr-2" /> Request a Lab
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-6 flex justify-center items-center flex-col">
          <div className="text-sm uppercase font-medium text-gray-600">
            Projects
          </div>
          <div className="text-5xl font-bold mt-2 text-emerald-500">150</div>
          <div className="flex gap-5 mt-4 text-sm">
            <div className="">
              <p className="text-emerald-500 font-medium flex justify-end">
                12
              </p>
              <p className="text-gray-500">change</p>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div>
              <p className="font-medium">5</p>
              <p className="text-gray-500">last week</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 flex justify-center items-center flex-col">
          <div className="flex items-center text-sm uppercase font-medium text-gray-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
            <p>Successful Conversions</p>
          </div>
          <p className="text-5xl font-bold mt-2">25</p>
          <div className="flex gap-5 mt-4 text-sm">
            <div className="">
              <p className="text-emerald-500 font-medium flex justify-end">
                5.6
              </p>
              <p className="text-gray-500">change</p>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div>
              <p className="font-medium">7</p>
              <p className="text-gray-500">last week</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 justify-center items-center flex-col flex">
          <div className="flex items-center text-sm uppercase font-medium text-gray-600">
            <span className="h-2 w-2 rounded-full bg-rose-500 mr-2"></span>
            <p>Failed Conversions</p>
          </div>
          <p className="text-5xl font-bold mt-2">4</p>
          <div className="flex gap-5 mt-4 text-sm">
            <div className="">
              <p className="text-rose-500 font-medium flex justify-end">2.3</p>
              <p className="text-gray-500">change</p>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div>
              <p className="font-medium">1</p>
              <p className="text-gray-500">last week</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-xs col-span-2">
          <div className="p-4 flex justify-between items-center border-b">
            <h1 className="text-lg font-medium">Test records</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 text-muted-foreground"
              >
                <div className="px-3 py-2 text-xs text-muted-foreground">
                  SETTINGS
                </div>
                <DropdownMenuItem>
                  <Share className="mr-2 h-4 w-4" />
                  <span>Share reports</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link2 className="mr-2 h-4 w-4" />
                  <span>Connect other apps</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="px-3 py-2 text-xs text-muted-foreground">
                  FEEDBACK
                </div>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Report</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4">
              {testRecords.map((record, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border"
                >
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                    </div>
                    <div>
                      <div className="font-medium">{record.name}</div>
                      <div className="text-sm text-gray-500">Sample Test</div>
                    </div>
                  </div>
                  <Badge
                    className={`px-3 py-1 rounded-full ${
                      record.status === "Completed"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {record.status}
                  </Badge>
                  <div className="text-right">
                    <div className="font-medium">
                      ₵{record.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">{record.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="lg:col-span-1">
          <Card className="bg-emerald-500 text-white p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Payments</h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-emerald-600"
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex justify-center mb-8">
              <Badge className="bg-white rounded-full text-emerald-600 flex items-center px-4 py-1">
                <CheckCircle className="h-4 w-4 mr-2" /> On track
              </Badge>
            </div>

            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 flex items-center justify-center">
                  <Icons.Payment />
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="uppercase text-sm font-medium mb-2">
                Total Test Payment
              </div>
              <div className="text-4xl font-bold">₵0.00</div>
            </div>

            <div className="border-t border-emerald-400  pt-4 flex justify-between gap-2 w-full">
              <div className="text-end w-full">
                <p className="text-2xl font-bold text-white">0</p>
                <p className="text-sm text-white">Total Test Conducted</p>
              </div>
              <Separator orientation="vertical" className="h-10" />
              <div className="text-start w-full">
                <p className="text-2xl font-bold text-white">0</p>
                <p className="text-sm text-white">since last visit</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

const testRecords = [
  {
    name: "HB Count Test",
    status: "Completed",
    price: 120.0,
    date: "12 May, 2024",
  },
  {
    name: "Liver Function Test",
    status: "Completed",
    price: 120.0,
    date: "10 May, 2020",
  },
  {
    name: "Kidney Function Test",
    status: "Processing",
    price: 120.0,
    date: "12 May, 2020",
  },
  {
    name: "Kidney Function Test",
    status: "Processing",
    price: 120.0,
    date: "12 May, 2020",
  },
  {
    name: "Kidney Function Test",
    status: "Completed",
    price: 120.0,
    date: "12 May, 2020",
  },
];
