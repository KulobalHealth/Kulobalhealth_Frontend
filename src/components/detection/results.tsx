import { Card } from "@/components/ui/card";
import { results, securityFeatures } from "./data";

export default function ResultsSection() {
  return (
    <section className="bg-green-50 py-16 dark:bg-background">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 dark:bg-background">
          <h3 className="mb-8 text-center font-bold text-2xl">
            Security & compliance
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {securityFeatures.map((feature, index) => (
              <div className="flex items-center gap-3" key={index}>
                <feature.icon className="h-6 w-6 text-[#03C486]" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-12 text-center font-bold text-3xl">
            Results that matter
          </h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {results.map((result, index) => (
              <Card className="p-8 text-center" key={index}>
                <result.icon
                  className={`h-16 w-16 ${result.color} mx-auto mb-4`}
                />
                <div className={`font-bold text-4xl ${result.color} mb-2`}>
                  {result.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {result.description}
                </p>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-500 text-sm dark:text-gray-400">
            *12-month field study, Greater Accra
          </p>
        </div>
      </div>
    </section>
  );
}
