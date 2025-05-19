import patientSafetyImg from "@/../public/patientSafety.webp";
import Image from "next/image";

export default function PatientSafety() {
  return (
    <section className="px-4">
      <div className="container py-5 mx-auto md:py-1">
        <div className="grid items-center grid-cols-1 gap-10 mb-10 lg:grid-cols-2 lg:gap-0">
          <div className="lg:max-w-xl container mx-auto">
            <h2 className="mb-4 text-4xl font-semibold text-primary-600">
              Prioritizing Patient Safety
            </h2>
            <div className="mb-6">
              <p className="mb-0">
                We prioritize patient safety by using AI-powered drug-drug
                interaction (DDI) checks, real-time prescription verification,
                and secure medication ordering to prevent errors and harmful
                interactions.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="p-0 lg:p-11">
              <figure
                className="relative rounded"
                style={{ width: "100%", height: "0", paddingBottom: "90.25%" }}
              >
                <Image
                  src={patientSafetyImg}
                  alt="Patient Safety"
                  fill
                  objectFit="cover"
                  className="rounded"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
