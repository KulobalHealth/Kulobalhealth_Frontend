import { Icons } from "./ui/icons";
import { AnimationWrapper } from "./ui/animation-wrapper";

export default function ImpactStats() {
  return (
    <section className="w-full mb-4 font-urbanist">
      <div className="px-4 lg:mx-auto lg:container">
        <AnimationWrapper>
          <div className="relative overflow-hidden shadow-lg bg-primary-foreground rounded-2xl">
            <div className="p-8 md:p-14 rounded-2xl">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="text-center lg:col-span-4 lg:text-left">
                    <h4 className="pr-0 mb-3 text-3xl md:text-4xl xl:pr-16">
                      Making a Difference
                    </h4>
                    <p className="pr-0 mb-0 text-lg md:text-xl xl:pr-10">
                      Improving Access to Medicines in Africa.
                    </p>
                  </div>

                  <div className="mt-4 lg:col-span-8 lg:mt-2">
                    <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
                      <div>
                        <Icons.Discussion className="w-10 h-10 mx-auto mb-3 fill-primary text-primary" />
                        <h3 className="text-2xl font-bold md:text-3xl">
                          2,200+
                        </h3>
                        <p className="mb-0">Active customers.</p>
                      </div>

                      <div>
                        <Icons.Currency className="w-10 h-10 mx-auto mb-3 text-primary fill-primary" />
                        <h3 className="text-2xl font-bold md:text-3xl">$200</h3>
                        <p className="mb-0">Average Order value</p>
                      </div>

                      <div>
                        <Icons.Target className="w-10 h-10 mx-auto mb-3 text-primary fill-primary" />
                        <h3 className="text-2xl font-bold md:text-3xl">
                          $10M+
                        </h3>
                        <p className="mb-0">Total Sales</p>
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
