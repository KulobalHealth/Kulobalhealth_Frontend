import Image from "next/image";
import Grant1 from "../../public/brands/6.5ae431259b3f.webp";
import Grant2 from "../../public/brands/7.1d3fb550bce5.webp";
import Grant3 from "../../public/brands/8.dd4c92b05640.webp";
import Grant4 from "../../public/brands/8.dd4c92b05640.webp";
// import Grant4 from "../../public/brands/9.13449e765e8c.webp";
import Grant5 from "../../public/brands/10.3012117c18ca.webp";
import { AnimationWrapper } from "./ui/animation-wrapper";

const grants = [
  { id: 1, imgSrc: Grant1 },
  { id: 2, imgSrc: Grant2 },
  { id: 3, imgSrc: Grant3 },
  { id: 4, imgSrc: Grant4 },
  { id: 5, imgSrc: Grant5 },
];

export default function Grants() {
  return (
    <section className="container py-10 mx-auto mb-10 font-urbanist">
      <div className="container">
        <AnimationWrapper>
          <p className="mb-8 text-lg font-semibold text-center">
            Empowered Through Grants and Support
          </p>
          <div className="flex flex-wrap justify-center items-center gap-y-4">
            {grants.map((grant) => (
              <div
                key={grant.id}
                className="w-1/2 md:w-1/4 lg:w-1/6 flex justify-center"
              >
                <figure className="px-5 md:px-0 lg:px-2 xl:px-3 2xl:px-4 w-full">
                  <div className="relative w-full h-9">
                    <Image
                      src={grant.imgSrc}
                      alt={`Grant Partner ${grant.id}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
