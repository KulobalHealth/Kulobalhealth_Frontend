import { integrationSteps } from './data';

export default function IntegrationSteps() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="mb-12 font-bold text-2xl">3-step integration</h3>{' '}
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {integrationSteps.map((step, index) => (
              <div
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-background"
                key={index}
              >
                <div
                  className={`h-12 w-12 ${step.bgColor} ${step.textColor} mx-auto mb-4 flex items-center justify-center rounded-full font-bold text-xl`}
                >
                  {step.number}
                </div>
                <h4 className="mb-2 font-semibold text-gray-900 text-lg dark:text-white">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-500 text-sm">
            SDKs and sample components are available on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}
