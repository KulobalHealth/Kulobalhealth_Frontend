import { Hero } from "@/components/homepage/hero";

import { AnimationWrapper } from "@/components/ui/animation-wrapper";
import ReliableAccess from "@/components/homepage/reliable-access";
import Empowerment from "@/components/homepage/empowerment";
import PatientSafety from "@/components/homepage/patient-safety";
import Features from "@/components/homepage/features";
import Partners from "@/components/homepage/partners";
import ImpactMap from "@/components/homepage/impact-map";

export default function LandingPage() {
  return (
    <div>
      <AnimationWrapper>
        <Hero />
      </AnimationWrapper>
      <AnimationWrapper>
        <ReliableAccess />
      </AnimationWrapper>
      <AnimationWrapper>
        <PatientSafety />
      </AnimationWrapper>
      <AnimationWrapper>
        <Features />
      </AnimationWrapper>

      <AnimationWrapper>
        <Empowerment />
      </AnimationWrapper>

      <AnimationWrapper>
        <ImpactMap />
      </AnimationWrapper>

      <AnimationWrapper>
        <Partners />
      </AnimationWrapper>
    </div>
  );
}
