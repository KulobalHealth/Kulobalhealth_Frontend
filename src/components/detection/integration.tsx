import { Badge } from "@/components/ui/badge";
import { requestData, responseData } from "./data";

export default function HowItWorksSection() {
  return (
    <section className="bg-primary-50 py-16 dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-bold text-3xl">How it works</h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Badge className="rounded-full bg-primary-100 font-bold text-[#166534]">
                Request
              </Badge>
              <span className="font-semibold">API Call</span>
            </div>
            <div className="overflow-x-auto whitespace-pre rounded-lg bg-gray-900 p-6 font-mono text-green-400 text-sm">
              {requestData.map((line, index) => (
                <div className={index > 0 ? "mt-1" : ""} key={index}>
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <Badge className="rounded-full bg-[#DBEAFE] font-bold text-[#1E40AF]">
                Response
              </Badge>
              <span className="font-semibold">API Response</span>
            </div>
            <div className="overflow-x-auto whitespace-pre rounded-lg bg-gray-900 p-6 font-mono text-blue-400 text-sm">
              {responseData.map((line, index) => (
                <div className={index > 0 ? "mt-1" : ""} key={index}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
