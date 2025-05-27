import { Hero } from "@/components/homepage/hero";

import { redirect } from "next/navigation";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";
import ClinicsPharmacies from "@/components/homepage/reliable-access";
import Empowerment from "@/components/homepage/empowerment";
import HospitalsHealthCenters from "@/components/homepage/patient-safety";
import PublicRuralHealth from "@/components/homepage/public-rural-health";
import Features from "@/components/homepage/features";
import Partners from "@/components/homepage/partners";
import ImpactMap from "@/components/homepage/impact-map";

export default function LandingPage() {
  redirect("/login");

  return (
    <div>
      {" "}
      <AnimationWrapper>
        <Hero />
      </AnimationWrapper>
      <AnimationWrapper>
        <ClinicsPharmacies />
      </AnimationWrapper>
      <AnimationWrapper>
        <HospitalsHealthCenters />
      </AnimationWrapper>
      <AnimationWrapper>
        <PublicRuralHealth />
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
