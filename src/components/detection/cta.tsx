<<<<<<< HEAD
import { Button } from "@/components/ui/button";

const ctaButtons = [
  {
    text: "Start for free",
    variant: "default" as const,
  },
  {
    text: "Read the docs",
    variant: "secondary" as const,
  },
  {
    text: "Book a demo",
    variant: "outline" as const,
  },
];

export default function GetStartedSection() {
  return (
    <section className="bg-gradient-to-r from-[#02A171] to-[#7E22CE] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Get started today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Integrate the <strong>Kulabal DDI API</strong> in under 10 minutes and
          give every prescription the safety check it deserves.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaButtons.map((button, index) => (
            <Button key={index} size="lg" variant={button.variant}>
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
=======
import { Button } from '@/components/ui/button';

const ctaButtons = [
  {
    text: 'Start for free',
    variant: 'default' as const,
  },
  {
    text: 'Read the docs',
    variant: 'secondary' as const,
  },
  {
    text: 'Book a demo',
    variant: 'outline' as const,
  },
];

export default function GetStartedSection() {
  return (
    <section className="bg-gradient-to-r from-[#02A171] to-[#7E22CE] py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 font-bold text-4xl">Get started today</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
          Integrate the <strong>Kulabal DDI API</strong> in under 10 minutes and
          give every prescription the safety check it deserves.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {ctaButtons.map((button, index) => (
            <Button key={index} size="lg" variant={button.variant}>
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
