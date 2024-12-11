import Image from "next/image";
import photo from "@/app/assets/image1.jpg";
import hearth from "@/app/assets/hearth.png";
import JustTime from "@/components/JustTime";
import Carroussel from "@/components/Carroussel";

export default function Home() {
  return (
    <div className="p-2 flex items-center justify-center">
      <div className="flex border border-secondary h-full w-full rounded-xl items-center flex-col p-2 gap-4 max-w-xl">

        <Carroussel />

        <p className="font-rouge text-6xl text-secondary">Luiza e Paulinho</p>

        <p className="text-textColor">Juntos à</p>

        <JustTime />

        <p className="text-7xl"></p>
        <Image
          alt="1"
          src={hearth}
          quality={100}
          width={67}
          className="rounded-md"
        />
        <hr className="border w-40 border-textColor" />

        <div className="flex flex-col gap-4 font-narnoor text-center text-white p-3">
          <p>
            Meu amor, hoje é o seu dia, e eu só quero te lembrar o quanto você é
            incrível e especial para mim. Você tem uma forma única de iluminar
            minha vida e me fazer sorrir todos os dias.
          </p>

          <p>
            Sou muito grato por ter você ao meu lado e por cada momento que
            passamos juntos. Que esse novo ano seja cheio de sonhos realizados,
            risadas, amor e tudo o que te faz feliz.
          </p>

          <p>Te amo demais, e vou continuar celebrando você, hoje e sempre! 💕</p>
        </div>

        <hr className="border w-40 border-textColor" />

        <Image
          alt="1"
          src={hearth}
          quality={100}
          width={67}
          className="rounded-md mb-4"
        />
      </div>
    </div>
  );
}
