import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";

function Livestream() {
  return (
    <div className="w-full max-w-xl bg-accent py-12 text-md text-center">
      <h1 className="text-6xl font-bold font-vibes tracking-widest py-6">
        Livestream
      </h1>
      <div className="mb-4 lg:h-96 lg:w-[30rem] h-64 w-64 mx-auto  relative">
        <Image
          src={ImagesStock.ourmoment5}
          alt="Bride"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="injil px-6 py-3">
        <p>
          “So they are no longer two, but one. Therefore what God has joined
          together, let man not separate.”
        </p>
        <p className="py-3 font-bold">Matthew 19:6</p>
      </div>
      <div className="flex flex-col items-center pb-12 lg:pb-0 w-full px-8 video-container mb-5">
        <iframe
          className="relative m-auto w-full my-10 rounded-md shadow-lg"
          src="https://www.youtube.com/embed/yBxsp9pe4OU"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p>LIVE ON Saturday, June 18th, 2022 | 10.00 WITA</p>
        <p>
          Should you have any issues with the live stream video above, then
          please click on the button below instead:
        </p>
        <button className="border-2 my-4">OPEN VIA YOUTUBE</button>
      </div>
    </div>
  );
}

export default Livestream;
