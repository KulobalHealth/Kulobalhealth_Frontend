import Approach from "@/components/approach";
import { Hero } from "@/components/hero";
import ValuedInvestors from "@/components/investors";
import Impact from "@/components/impact";
import ImpactCashFlow from "@/components/impactCashflow";
import ImpactCounterfeits from "@/components/impactCounterfeits";
import ImpactStats from "@/components/impactStats";
import ImpactMap from "@/components/impactMap";
import DawaMkononiApp from "@/components/dawaMkononiApp";
import Grants from "@/components/grants";
import { AnimationWrapper } from "@/components/ui/animation-wrapper";
import { redirect } from "next/navigation";

export default function LandingPage() {
  redirect("/login");

  return (
    <div className="font-urbanist">
      <AnimationWrapper>
        <Hero />
      </AnimationWrapper>
      <AnimationWrapper>
        <ValuedInvestors />
      </AnimationWrapper>

      <AnimationWrapper>
        <Approach />
      </AnimationWrapper>

      <AnimationWrapper>
        <Impact />
      </AnimationWrapper>

      <AnimationWrapper>
        <ImpactCashFlow />
      </AnimationWrapper>

      <AnimationWrapper>
        <ImpactCounterfeits />
      </AnimationWrapper>

      <AnimationWrapper>
        <ImpactStats />
      </AnimationWrapper>

      <AnimationWrapper>
        <ImpactMap />
      </AnimationWrapper>

      <AnimationWrapper>
        <DawaMkononiApp />
      </AnimationWrapper>

      <AnimationWrapper>
        <Grants />
      </AnimationWrapper>
    </div>
  );
}
