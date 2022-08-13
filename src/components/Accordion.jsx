import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Fragment, useState } from "react";
import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";

export default function Accordion(props) {
  const { open, setOpen } = props;
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border-l-2 border-black  px-4 py-6 text-left text-sm font-medium text-black bg-[#f0ede6] shadow-secondary shadow-lg hover:bg-secondary rounded-r-md focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
                <span>{props.accordionTitle}</span>
                <ChevronUpIcon
                  className={`${
                    open
                      ? "rotate-180 transform duration-500"
                      : "rotate-360 transform duration-500"
                  } h-5 w-5`}
                />
              </Disclosure.Button>
              <Transition
                appear
                show={open}
                as={Fragment}
                enter="transition duration-1000 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-1000 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 duration-500">
                  {/* <div className="time-and-date-image-container w-24 ">
                    <Image src={groomBrideImage} />
                  </div>
                  {props.accordionChild}asdasd Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ex nostrum officiis eos
                  laboriosam, sequi nulla corrupti reprehenderit aliquid
                  voluptas mollitia assumenda, itaque iure ipsam dignissimos. */}
                  {props.children}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
