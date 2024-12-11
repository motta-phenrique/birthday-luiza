"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import photo from "@/app/assets/image1.jpg";
import photo2 from "@/app/assets/image2.jpg";
import photo3 from "@/app/assets/image3.jpg"

const Carroussel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1, 
    dragFree: true, 
  });

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (emblaApi) {
      const autoScroll = () => {
        emblaApi.scrollNext(); 
      };

      const id = setInterval(autoScroll, 5000); 
      setIntervalId(id);

      return () => {
        if (id) {
          clearInterval(id); 
        }
      };
    }
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="embla flex gap-4">
      <div className="embla__container flex mt-4">
        <div className="embla__slide flex justify-center items-center">
          <Image
            alt="1"
            src={photo}
            quality={100}
            width={350} 
            height={500} 
            className="rounded-md object-cover" 
          />
        </div>
        <div className="embla__slide flex justify-center items-center">
          <Image
            alt="2"
            src={photo2}
            quality={100}
            width={350}
            height={500}
            className="rounded-md object-cover"
          />
        </div>
        <div className="embla__slide flex justify-center items-center">
          <Image
            alt="2"
            src={photo}
            quality={100}
            width={350}
            height={500}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Carroussel;
