<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import type { TestResult } from "@/lib/data";

interface TestHistoryProps {
  testHistory: TestResult[];
}

export function TestHistory({ testHistory = [] }: TestHistoryProps) {
  return (
    <div className="border rounded-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Test History</h2>
        <div className="flex space-x-2">
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add Test Result
          </Button>
        </div>
      </div>

      {testHistory.length > 0 ? (
        <div className="rounded-md border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-2 text-left font-medium">Test Name</th>
                <th className="p-2 text-left font-medium">Category</th>
                <th className="p-2 text-left font-medium">Result</th>
                <th className="p-2 text-left font-medium">Normal Range</th>
                <th className="p-2 text-left font-medium">Date</th>
                <th className="p-2 text-left font-medium">Ordered By</th>
                <th className="p-2 text-left font-medium">Remarks</th>
                <th className="p-2 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testHistory.map((test) => (
                <tr key={test.id} className="border-t hover:bg-muted/30">
                  <td className="p-2 font-medium">{test.testName}</td>
                  <td className="p-2">{test.category}</td>
                  <td className="p-2">
                    {/* Highlight abnormal results */}
                    <span
                      className={
                        test.normalRange &&
                        !test.result.includes(test.normalRange.split("<")[0])
                          ? "text-rose-600 font-medium"
                          : ""
                      }
                    >
                      {test.result}
                    </span>
                  </td>
                  <td className="p-2 text-muted-foreground">
                    {test.normalRange || "-"}
                  </td>
                  <td className="p-2">{test.date}</td>
                  <td className="p-2">{test.orderedBy}</td>
                  <td className="p-2">{test.remarks || "-"}</td>
                  <td className="p-2">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-rose-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-16 border rounded-md bg-muted/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground mx-auto mb-4"
          >
            <path d="M2 6h20"></path>
            <path d="M8 6v16"></path>
            <path d="M16 6v2"></path>
            <path d="M16 12v10"></path>
            <path d="m7.5 10.5 9-5"></path>
            <path d="m7.5 13.5 9-5"></path>
            <path d="M22 10c-1.4 1.8-3.5 3-6 3"></path>
          </svg>
          <p className="text-xl font-medium">No test history</p>
          <p className="text-muted-foreground mb-4">
            This patient doesn&apos;t have any test results recorded
          </p>
          <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add Test Result
          </Button>
        </div>
      )}
    </div>
  );
}
=======
import { Button } from '@/components/ui/button';
import type { TestResult } from '@/lib/data';

interface TestHistoryProps {
  testHistory: TestResult[];
}

export function TestHistory({ testHistory = [] }: TestHistoryProps) {
  return (
    <div className="rounded-md border p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-medium text-lg">Test History</h2>
        <div className="flex space-x-2">
          <Button className="bg-emerald-500 hover:bg-emerald-600" size="sm">
            <svg
              className="mr-1"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Test Result
          </Button>
        </div>
      </div>

      {testHistory.length > 0 ? (
        <div className="overflow-hidden rounded-md border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-2 text-left font-medium">Test Name</th>
                <th className="p-2 text-left font-medium">Category</th>
                <th className="p-2 text-left font-medium">Result</th>
                <th className="p-2 text-left font-medium">Normal Range</th>
                <th className="p-2 text-left font-medium">Date</th>
                <th className="p-2 text-left font-medium">Ordered By</th>
                <th className="p-2 text-left font-medium">Remarks</th>
                <th className="p-2 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testHistory.map((test) => (
                <tr className="border-t hover:bg-muted/30" key={test.id}>
                  <td className="p-2 font-medium">{test.testName}</td>
                  <td className="p-2">{test.category}</td>
                  <td className="p-2">
                    {/* Highlight abnormal results */}
                    <span
                      className={
                        test.normalRange &&
                        !test.result.includes(test.normalRange.split('<')[0])
                          ? 'font-medium text-rose-600'
                          : ''
                      }
                    >
                      {test.result}
                    </span>
                  </td>
                  <td className="p-2 text-muted-foreground">
                    {test.normalRange || '-'}
                  </td>
                  <td className="p-2">{test.date}</td>
                  <td className="p-2">{test.orderedBy}</td>
                  <td className="p-2">{test.remarks || '-'}</td>
                  <td className="p-2">
                    <div className="flex space-x-2">
                      <Button className="h-8 w-8 p-0" size="sm" variant="ghost">
                        <svg
                          fill="none"
                          height="16"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
                        </svg>
                      </Button>
                      <Button
                        className="h-8 w-8 p-0 text-rose-500"
                        size="sm"
                        variant="ghost"
                      >
                        <svg
                          fill="none"
                          height="16"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded-md border bg-muted/10 py-16 text-center">
          <svg
            className="mx-auto mb-4 text-muted-foreground"
            fill="none"
            height="48"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6h20" />
            <path d="M8 6v16" />
            <path d="M16 6v2" />
            <path d="M16 12v10" />
            <path d="m7.5 10.5 9-5" />
            <path d="m7.5 13.5 9-5" />
            <path d="M22 10c-1.4 1.8-3.5 3-6 3" />
          </svg>
          <p className="font-medium text-xl">No test history</p>
          <p className="mb-4 text-muted-foreground">
            This patient doesn&apos;t have any test results recorded
          </p>
          <Button className="bg-emerald-500 hover:bg-emerald-600" size="sm">
            <svg
              className="mr-1"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Test Result
          </Button>
        </div>
      )}
    </div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
