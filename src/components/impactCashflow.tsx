import Image from "next/image";
import cashFlowImg from "../../public/images/h3.8e46d016c6cb.webp";
import { Icons } from "./ui/icons";
import { AnimationWrapper } from "./ui/animation-wrapper";

export default function ImpactCashFlow() {
  return (
    <section className="px-4 bg-primary-foreground">
      <div className="container py-5 mx-auto md:py-1">
        <AnimationWrapper>
          <div className="grid items-center grid-cols-1 gap-10 mb-10 lg:grid-cols-2 lg:gap-0">
            <div className="lg:max-w-xl container mx-auto">
              <h2 className="mb-3 text-sm uppercase text-primary font-semibold">
                Our Impact
              </h2>
              <h2 className="mb-4 text-4xl font-semibold">Improve cashflows</h2>
              <div className="mb-6">
                <p className="mb-0">
                  Optimize resources, reduce waste, and keep your business
                  thriving with Dawa Mkononi.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="p-0 lg:p-11">
                <figure
                  className="relative rounded"
                  style={{
                    width: "100%",
                    height: "0",
                    paddingBottom: "56.25%",
                  }}
                >
                  <Image
                    src={cashFlowImg}
                    alt="Cashflow Improvement"
                    fill
                    objectFit="cover"
                    className="rounded"
                  />
                </figure>
                <div
                  className="absolute hidden shadow-lg card md:block"
                  style={{ top: "15%", right: "-7%" }}
                >
                  <div className="px-5 py-4 bg-white rounded-lg">
                    <div className="flex flex-row items-center">
                      <div>
                        <div className="bg-white rounded-full me-3">
                          <Icons.CoinRise className="h-10 w-10 text-primary fill-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-0 text-2xl counter">$4M+</h3>
                        <p className="mb-0 text-sm leading-snug">
                          Credit Finance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
