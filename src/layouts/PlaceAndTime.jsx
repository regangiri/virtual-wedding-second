import React, { useState } from "react";
import Accordion from "../components/Accordion";
import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";

function PlaceAndTime() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full max-w-xl bg-primary py-24 px-2 text-md text-center">
      <h1 className="text-5xl sm:text-7xl font-vibes py-3">Place & Time</h1>
      <Accordion accordionTitle="Holy Matrimony" open={isOpen}>
        <div className="time-and-date-image-container mb-4  h-72 w-64  relative">
          <Image src={ImagesStock.ourmoment2} layout="fill" />
        </div>
        <div className="time-and-date-description flex flex-col text-left font-satisfy tracking-widest text-secondary">
          <p>Time: Saturday, June 18th, 2022 | 10.00 WITA </p>
          <p>Place: St. Silvester Church, Pecatu</p>
          <p>Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali</p>
        </div>
      </Accordion>
    </div>
  );
}

export default PlaceAndTime;
