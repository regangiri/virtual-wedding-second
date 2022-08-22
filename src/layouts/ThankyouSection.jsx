import groomBrideImage from "../../public/assets/images/groombridedummy.jpeg";
import Image from "next/image";
import { ImagesStock } from "../components/ImagesStock";

function ThankyouSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl bg-[#f0ede6] py-12 text-md text-center font-serif">
      <p className="text-xl">Sincere love,</p>

      <div className="logo h-44 w-44 mx-auto relative">
        <Image src={ImagesStock.logoPengantin} layout="fill" alt="logo" />
      </div>
      <div className="thankyou-text ">
        <h3 className="font-vibes text-5xl py-3 ">Welsen & Elene</h3>
        <p>
          {`It will be a joy for us if you are still willing to give your blessing
          from afar. Please know that you are in our thoughts and will be in our
          hearts, even though we are deeply sorry, we can't invite you to the
          ceremony due to the pandemic restriction.`}
        </p>

        <p className="font-bold py-6">#Hashtag</p>
      </div>
    </div>
  );
}

export default ThankyouSection;
