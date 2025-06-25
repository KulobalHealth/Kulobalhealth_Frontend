import { AnimationWrapper } from '@/components/ui/animation-wrapper';

export default function ImpactMap() {
  return (
    <section
      className="relative bg-center bg-no-repeat py-16 text-center font-urbanist"
      style={{
        backgroundImage: 'url(/images/map.556e50b3b61d.webp)',
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <AnimationWrapper>
          <div className="pt-12">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-3 text-primary text-sm uppercase">
                Our Impact
              </h2>
              <h4 className="mb-8 px-4 text-4xl md:text-5xl lg:px-12">
                Improving Access to Medicines in Africa
              </h4>
            </div>
          </div>

          <div className="pb-12">
            <div className="mx-auto max-w-3xl">
              <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
                <div className="text-center">
                  <h3 className="font-bold text-3xl text-primary md:text-4xl">
                    17
                  </h3>
                  <p className="mt-2">Pharmacies</p>
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-3xl text-primary md:text-4xl">
                    2,318
                  </h3>
                  <p className="mt-2">Test Kits Supplied</p>
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-3xl text-primary md:text-4xl">
                    103
                  </h3>
                  <p className="mt-2">Patients Served</p>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
