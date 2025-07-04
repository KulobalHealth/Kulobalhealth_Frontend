<<<<<<< HEAD
import { Card } from "@/components/ui/card";
import { results, securityFeatures } from "./data";

export default function ResultsSection() {
  return (
    <section className="bg-green-50 dark:bg-background py-16">
      <div className="container flex flex-col gap-16 mx-auto px-4">
        <div className="bg-white dark:bg-background rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Security & compliance
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <feature.icon className="w-6 h-6 text-[#03C486]" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Results that matter
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {results.map((result, index) => (
              <Card key={index} className="text-center p-8">
                <result.icon
                  className={`w-16 h-16 ${result.color} mx-auto mb-4`}
                />
                <div className={`text-4xl font-bold ${result.color} mb-2`}>
                  {result.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {result.description}
                </p>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8 dark:text-gray-400">
            *12-month field study, Greater Accra
          </p>
        </div>
      </div>
    </section>
  );
}
=======
import { Card } from '@/components/ui/card';
import { results, securityFeatures } from './data';

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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
