import photo from "@/app/assets/image1.jpg";
import photo2 from "@/app/assets/image2.jpg";
import photo3 from "@/app/assets/image3.jpg";
import photo4 from "@/app/assets/image4.jpg";
import hearth from "@/app/assets/1965623.png";
import photo5 from "@/app/assets/image5.jpg";
import photo6 from "@/app/assets/image100.jpeg";
import photo7 from "@/app/assets/image7.jpg";
import Image from "next/image";

const Galery = () => {
  const widhtImg = 100;

  return (
    <div className="flex flex-col gap-2 rounded-lg w-full p-2">
      <p className="font-rouge text-5xl text-terciary text-center font-bold">Momentos ao seu lado!</p>

      <div className="flex gap-2 justify-center">
        <Image
          alt="1"
          src={photo}
          quality={100}
          width={widhtImg}
          className="rounded-md"
        />
        <Image
          alt="1"
          src={photo2}
          quality={100}
          width={widhtImg}
          className="rounded-md"
        />
        <Image
          alt="1"
          src={photo3}
          quality={100}
          width={widhtImg}
          className="rounded-md"
        />
      </div>

      <div className="flex gap-11 justify-center items-center">
        <Image
          alt="1"
          src={photo4}
          quality={100}
          width={150}
          className="rounded-md"
        />

        <Image alt="1" src={hearth} quality={100} width={120} />
      </div>
      <div className="flex gap-2 justify-center">
        <Image
          alt="1"
          src={photo5}
          quality={100}
          width={widhtImg}
          className="rounded-md"
        />

        <Image
          alt="1"
          src={photo7}
          quality={100}
          width={widhtImg}
          className="rounded-md"
        />

        <Image
          alt="1"
          src={photo6}
          quality={100}
          width={widhtImg}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Galery;
