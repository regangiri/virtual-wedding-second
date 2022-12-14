import { useEffect, useState } from "react";
import { addRSVP } from "../helpers/supabase";
import Select from "../components/Select";
import Modal from "../components/Modal";
import ModalNotif from "../components/ModalNotif";

const options = [
  { id: 1, value: "Hadir" },
  { id: 2, value: "Tidak Hadir" },
];

function Rsvp() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [totalGuest, setTotalGuest] = useState(0);
  const [confirmation, setConfirmation] = useState(options[0]);

  const resetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setName("");
    setTelephone("");
    setConfirmation(options[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRSVP(name, telephone, confirmation.value, totalGuest);
    setShowModal(true);
    resetForm();
  };
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-xl bg-[#f0ede6] py-12">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 bg-gray-50" />
      </div>
      <div className="relative lg:grid lg:grid-cols-1 ">
        <div className="lg:col-span-12 xl:col-span-3 xl:rounded-l-2xl xl:rounded-r-none lg:rounded-t-2xl text-center py-16 bg-primary text-palewhite">
          <h1 className="text-3xl font-typography mb-8 font-semibold">
            Gereja St. Perawan Maria Diangkat Ke Surga (Katedral)
          </h1>
          <p>Jl. Katedral No. 7B Ps. Baru,</p>
          <p className="mb-[35px]"> Kec. Sawah Besar, Central Jakarta</p>
          <div className="relative p-auto">
            <iframe
              className="relative m-auto w-60 lg:w-[30rem] sm:w-[30rem] xs:w-[80px] md:w-[30rem] rounded-md shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126940.44243848306!2d106.76835172319953!3d-6.145631522057466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cef86e21ad%3A0x3ecfda74692fc79!2sJakarta%20Cathedral!5e0!3m2!1sen!2sid!4v1650719641892!5m2!1sen!2sid"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="lg:col-span-12 py-16  xl:col-span-3 xl:rounded-r-2xl xl:rounded-l-none lg:rounded-b-2xl lg:border px-auto">
          <div className="mx-auto">
            <h1 className="text-3xl mx-auto lg:w-96 w-full text-center relative font-typography mb-8 font-semibold">
              RSVP
            </h1>
            <form
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 px-10 lg:px-0"
              id="formRSVP"
            >
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="telephone" className="sr-only">
                  Telephone Number
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setTelephone(event.target.value)}
                  type="number"
                  name="telephone"
                  id="telephone"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Telephone number"
                />
              </div>
              <div className="lg:mx-auto md:mx-auto">
                <label htmlFor="total-guest" className="sr-only">
                  Total guest
                </label>
                <input
                  autoComplete="off"
                  required
                  onChange={(event) => setTotalGuest(event.target.value)}
                  type="number"
                  name="total-guest"
                  id="total-guest"
                  className="block shadow-sm lg:w-96 w-full md:w-[500px] py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-md"
                  placeholder="Total Guest"
                />
              </div>
              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <Select
                  selected={confirmation}
                  setSelected={setConfirmation}
                  options={options}
                />
              </div>

              <div className="mx-auto lg:w-96 w-full md:w-[500px]">
                <button
                  type="submit"
                  className="inline-flex lg:w-96 w-full md:w-[500px] justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-transparent hover:border-secondary hover:backdrop-blur-md hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ModalNotif
        open={showModal}
        setOpen={setShowModal}
        title="RSVP has been sent!"
        description={"RSVP has been sent.Thank you for your participation."}
      />
    </div>
  );
}

export default Rsvp;
