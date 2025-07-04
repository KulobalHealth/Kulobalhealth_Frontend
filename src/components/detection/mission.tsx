export default function WhyWeBuiltSection() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-bold text-3xl">
          Why we built it
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-r-lg border-red-500 border-l-4 bg-red-50 p-6 pl-6">
            <p className="text-gray-700 leading-relaxed">
              Medication errors remain a top cause of avoidable harm in African
              pharmacies. Most retail and hospital systems cannot check
              interactions quickly or at all. <strong>Kulabal DDI API</strong>{" "}
              drops evidence-based safety checks straight into the software and
              mobile apps that pharmacists, prescribers, and tele-health
              platforms already use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
