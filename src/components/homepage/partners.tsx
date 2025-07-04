<<<<<<< HEAD
import pointOfCare from "@/../public/point.webp";
import raydos from "@/../public/raydos.webp";
import kowri from "@/../public/kowri.webp";
import royalEng from "@/../public/royalEng.webp";
import dotGlasses from "@/../public/dotGlasses.webp";
import Image from "next/image";

const partners = [
  { id: 1, imgSrc: pointOfCare },
  { id: 2, imgSrc: raydos },
  { id: 3, imgSrc: kowri },
  { id: 4, imgSrc: royalEng },
  { id: 5, imgSrc: dotGlasses },
];

export default function Partners() {
  return (
    <section className="container py-10 mx-auto mb-10 font-urbanist">
      <div className="container">
        <h2 className="mb-8 text-4xl font-semibold text-primary-600 text-center">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-y-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-1/2 md:w-1/4 lg:w-1/6 flex justify-center"
            >
              <figure className="px-5 md:px-0 lg:px-2 xl:px-3 2xl:px-4 w-full">
                <div className="relative w-full h-9">
                  <Image
                    src={partner.imgSrc}
                    alt={`Partner ${partner.id}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
=======
import Image from 'next/image';
import dotGlasses from '@/../public/dotGlasses.webp';
import kowri from '@/../public/kowri.webp';
import pointOfCare from '@/../public/point.webp';
import raydos from '@/../public/raydos.webp';
import royalEng from '@/../public/royalEng.webp';

const partners = [
  { id: 1, imgSrc: pointOfCare },
  { id: 2, imgSrc: raydos },
  { id: 3, imgSrc: kowri },
  { id: 4, imgSrc: royalEng },
  { id: 5, imgSrc: dotGlasses },
];

export default function Partners() {
  return (
    <section className="container mx-auto mb-10 py-10 font-urbanist">
      <div className="container">
        <h2 className="mb-8 text-center font-semibold text-4xl text-primary-600">
          Our Partners
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-y-4">
          {partners.map((partner) => (
            <div
              className="flex w-1/2 justify-center md:w-1/4 lg:w-1/6"
              key={partner.id}
            >
              <figure className="w-full px-5 md:px-0 lg:px-2 xl:px-3 2xl:px-4">
                <div className="relative h-9 w-full">
                  <Image
                    alt={`Partner ${partner.id}`}
                    className="object-contain"
                    fill
                    src={partner.imgSrc}
                  />
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
