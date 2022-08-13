import { useRouter } from "next/router";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";

function HeroHome() {
  const { query } = useRouter();

  return (
    <div className="w-full max-w-xl bg-primary py-12  text-md text-center flex items-center justify-center flex-col">
      <h3 className="font-serif tracking-[0.5em]">THE WEDDING OF</h3>
      <h1 className="font-vibes text-6xl py-6 text-secondary">
        Welsen & Elene
      </h1>
      <h3 className="font-serif tracking-[0.3em]">SATURDAY, JUNE 18TH, 2022</h3>

      <p className="py-4 bg-accent  border-y-2 border-black my-12 w-full">
        Dear, <br /> <b> {query.to} </b>
      </p>
      <p className="my-4 px-6 text-lg font-serif font-medium">
        Due to the pandemic, we have made the difficult decision to scale down
        our guest list. Please accept our deepest apologies for not being able
        to host you on our special day. We will miss your presence and thank you
        for your love and understanding.
      </p>
      <p className="my-4 px-6 text-lg font-serif font-medium">
        Join us virtually as we exchange our vows through Youtube live
        streaming.
      </p>
      <div className="hero-image-container w-1/2">
        <Image
          src={ImagesStock.ourmoment3}
          alt="Qris"
          width="50"
          height="80"
          layout="responsive"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default HeroHome;
