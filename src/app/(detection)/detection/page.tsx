import GetStartedSection from '@/components/detection/cta';
import WhatItDoesSection from '@/components/detection/features';
import DetectionFooter from '@/components/detection/footer';
import HeroSection from '@/components/detection/hero';
import HowItWorksSection from '@/components/detection/integration';
import IntegrationSteps from '@/components/detection/integration-steps';
import WhyWeBuiltSection from '@/components/detection/mission';
import ResultsSection from '@/components/detection/results';
import AfricanRealitiesSection from '@/components/detection/solutions';

export default function DetectionPage() {
  return (
    <>
      <HeroSection />
      <WhyWeBuiltSection />
      <WhatItDoesSection />
      <HowItWorksSection />
      <IntegrationSteps />
      <AfricanRealitiesSection />
      <ResultsSection />
      <GetStartedSection />
      <DetectionFooter />
    </>
  );
}
