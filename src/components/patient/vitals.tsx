import { Button } from "@/components/ui/button";
import type { VitalSign } from "@/lib/data";

interface PatientVitalsProps {
  vitalSigns: VitalSign[];
}

export function PatientVitals({ vitalSigns = [] }: PatientVitalsProps) {
  return (
    <div className="rounded-md border p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-medium text-lg">Patient Vitals</h2>
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
            Record New Vitals
          </Button>
        </div>
      </div>

      {vitalSigns.length > 0 ? (
        <div className="space-y-6">
          {vitalSigns.map((vitalSign) => (
            <div className="rounded-md border p-4" key={vitalSign.id}>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <p className="font-medium">Recorded on {vitalSign.date}</p>
                </div>
                <div className="text-muted-foreground text-sm">
                  By {vitalSign.recordedBy}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {vitalSign.bloodPressure && (
                  <div className="rounded-md border bg-muted/20 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      Blood Pressure
                    </div>
                    <div
                      className={`font-bold text-xl ${
                        Number.parseInt(vitalSign.bloodPressure.split("/")[0]) >
                        130
                          ? "text-rose-500"
                          : "text-emerald-500"
                      }`}
                    >
                      {vitalSign.bloodPressure}
                    </div>
                    <div className="text-muted-foreground text-xs">mmHg</div>
                  </div>
                )}

                {vitalSign.pulse && (
                  <div className="rounded-md border bg-muted/20 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      Pulse
                    </div>
                    <div
                      className={`font-bold text-xl ${
                        vitalSign.pulse > 100 || vitalSign.pulse < 60
                          ? "text-amber-500"
                          : "text-emerald-500"
                      }`}
                    >
                      {vitalSign.pulse}
                    </div>
                    <div className="text-muted-foreground text-xs">BPM</div>
                  </div>
                )}

                {vitalSign.temperature && (
                  <div className="rounded-md border bg-muted/20 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      Temperature
                    </div>
                    <div
                      className={`font-bold text-xl ${
                        vitalSign.temperature > 37.5
                          ? "text-rose-500"
                          : "text-emerald-500"
                      }`}
                    >
                      {vitalSign.temperature}°C
                    </div>
                  </div>
                )}

                {vitalSign.respiratoryRate && (
                  <div className="rounded-md border bg-muted/20 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      Respiratory Rate
                    </div>
                    <div className="font-bold text-xl">
                      {vitalSign.respiratoryRate}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      breaths/min
                    </div>
                  </div>
                )}

                {vitalSign.oxygenSaturation && (
                  <div className="rounded-md border bg-muted/20 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      SpO2
                    </div>
                    <div
                      className={`font-bold text-xl ${
                        vitalSign.oxygenSaturation < 95
                          ? "text-rose-500"
                          : "text-emerald-500"
                      }`}
                    >
                      {vitalSign.oxygenSaturation}%
                    </div>
                  </div>
                )}

                {vitalSign.weight && (
                  <div className="rounded-md border bg-muted/20 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      Weight
                    </div>
                    <div className="font-bold text-xl">{vitalSign.weight}</div>
                    <div className="text-muted-foreground text-xs">kg</div>
                  </div>
                )}

                {vitalSign.height && (
                  <div className="rounded-md border bg-muted/20 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      Height
                    </div>
                    <div className="font-bold text-xl">{vitalSign.height}</div>
                    <div className="text-muted-foreground text-xs">cm</div>
                  </div>
                )}

                {vitalSign.bmi && (
                  <div className="rounded-md border bg-muted/20 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      BMI
                    </div>
                    <div
                      className={`font-bold text-xl ${
                        vitalSign.bmi > 25 || vitalSign.bmi < 18.5
                          ? "text-amber-500"
                          : "text-emerald-500"
                      }`}
                    >
                      {vitalSign.bmi}
                    </div>
                    <div className="text-muted-foreground text-xs">kg/m²</div>
                  </div>
                )}

                {vitalSign.bloodSugar && (
                  <div className="rounded-md border bg-muted/20 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      Blood Sugar
                    </div>
                    <div
                      className={`font-bold text-xl ${
                        vitalSign.bloodSugar > 126
                          ? "text-rose-500"
                          : "text-emerald-500"
                      }`}
                    >
                      {vitalSign.bloodSugar}
                    </div>
                    <div className="text-muted-foreground text-xs">mg/dL</div>
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-end space-x-2">
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
            </div>
          ))}
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
            <path d="M17 18.5a9 9 0 1 0-11 0" />
            <path d="M9 9h.01" />
            <path d="M15 9h.01" />
            <path d="M9.5 14a2 2 0 0 0 5 0" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <p className="font-medium text-xl">No vital signs recorded</p>
          <p className="mb-4 text-muted-foreground">
            Record vital signs for this patient to track their health status
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
            Record New Vitals
          </Button>
        </div>
      )}
    </div>
  );
}
