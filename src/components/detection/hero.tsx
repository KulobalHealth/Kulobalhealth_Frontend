import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const heroButtons = [
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

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#02A171] to-[#7E22CE] py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <Badge
          className="mb-6 rounded-full border-white/30 bg-white/20 text-white"
          variant="secondary"
        >
          Real-time drug-interaction intelligence
        </Badge>

        <h1 className="mb-6 font-bold text-4xl md:text-6xl">
          Real-time drug-interaction
          <br />
          intelligence for <span className="text-green-300">every</span>
          <br />
          <span className="text-green-300">prescription</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
          Drop evidence-based safety checks straight into the software and
          mobile apps that pharmacists, prescribers, and tele-health platforms
          already use.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {heroButtons.map((button, index) => (
            <Button key={index} size="lg" variant={button.variant}>
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
