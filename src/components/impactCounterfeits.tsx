import Image from "next/image";
import counterfeitsImg from "../../public/images/h4.bdf582161626.webp";
import { AnimationWrapper } from "./ui/animation-wrapper";

export default function ImpactCounterfeits() {
  return (
    <section className="container px-4 py-10 mx-auto md:py-14">
      <div className="container">
        <AnimationWrapper>
          <div className="grid items-center grid-cols-1 gap-10 mb-10 lg:grid-cols-2 lg:gap-0">
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
                    src={counterfeitsImg}
                    alt="Reduced Counterfeit Medicines"
                    fill
                    className="object-cover rounded-md"
                  />
                </figure>
              </div>
            </div>

            <div className="lg:ml-auto">
              <h2 className="mb-3 text-sm uppercase text-primary">
                Our Impact
              </h2>
              <h2 className="mb-4 text-4xl lg:text-5xl">
                Reduced Counterfeits Medicines
              </h2>
              <div className="flex mb-6 lg:pr-15">
                <p className="mb-0">
                  Our focus on authentic products has drastically lowered the
                  circulation of counterfeit medications.
                </p>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
