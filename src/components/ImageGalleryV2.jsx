import React from "react";
import { ImagesStock } from "./ImagesStock";
import Image from "next/image";

export default function ImageGalleryV2() {
  const images = [
    {
      name: "our moments",
      src: ImagesStock.ourmoment1,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment9,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment2,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment3,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment5,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment4,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment6,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment7,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment8,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment10,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment10,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment11,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment12,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment1,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment2,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment9,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment9,
    },
    {
      name: "our moments",
      src: ImagesStock.ourmoment4,
    },
  ];

  return (
    <div className="container w-full max-w-xl bg-primary py-24 px-2 text-md text-center ">
      <h1 className="text-5xl text-black drop-shadow-sm font-semibold text-center pb-8 font-baskerville">
        Our Moments
      </h1>
      <div className="images-container gap-3 columns-3">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.src}
              className="mb-3"
              loading="eager"
              ismap
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
