import Image from "next/image";
import React from "react";
import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import { ImagesStock } from "../components/ImagesStock";

function GroomBride() {
  return (
    <div className="groom-bride-section w-full max-w-xl bg-primary py-12 text-md text-center">
      <h2 className="groom-bride-title text-5xl sm:text-7xl font-vibes py-6">
        Groom & Bride
      </h2>
      <div className="groom-bride-image mb-4 lg:h-96 lg:w-full h-64 max-w-lg mx-auto relative">
        <Image
          src={ImagesStock.ourmoment5}
          alt="Bride"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="groom-bride-desc flex items-center justify-around">
        <div className="groom-desc flex items-center justify-center flex-col">
          <h3 className="text-5xl font-bold text-center font-vibes border-b-2 border-secondary text-secondary h-1/2  my-6 py-3">
            Welsen Lowia
          </h3>
          <p className="text-base font-serif">
            <b>The first son of:</b> <br /> Mr. Handiono Lianto
            <br /> & <br />
            Mrs. Lanny Wiyanto
          </p>
        </div>
        <div className="bride-desc flex items-center justify-center flex-col">
          <h3 className="text-5xl font-bold text-center font-vibes border-b-2 border-secondary text-secondary h-1/2  my-6 py-3">
            Elene Delfia
          </h3>
          <p className="text-base font-serif">
            <b>The first daughter of:</b> <br />
            Mr. Benny Hui <br />
            & <br />
            Mrs. Lijdia Sungguhria
          </p>
        </div>
      </div>
    </div>
  );
}

export default GroomBride;
