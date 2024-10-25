import { FaMoneyCheck, FaThumbsUp, FaPhoneAlt } from "react-icons/fa";

export default function ServiceDescription() {
  return (
    <section className="w-app-w mx-auto grid grid-cols-1 md-lg:flex md-lg:flex-col md:grid-cols-9 gap-4 py-2">
      {/* First Service */}
      <div className="bg-[#F2F2F2] pt-6 px-6  md:col-span-2">
        <div className="bg-white flex flex-col justify-center items-center p-8">
          <button className="bg-primary text-white p-4 rounded-full">
            <FaThumbsUp />
          </button>
          <h4 className="font-playfair font-semibold text-xl text-center">
            100% Satisfaction Guaranteed
          </h4>
          <p className="font-lato text-app-grey-900 text-xl text-center ">
            Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
            scelerisque morbi vulputate. Quisque bibendum eget id diam elementum
            fringilla duis.
          </p>
        </div>
      </div>

      {/* Middle Section (Wider, Two Rows) */}
      <div className="md:col-span-5 grid grid-rows-2 gap-4">
        {/* First row */}
        <div className="bg-[#F2F2F2] p-6">
          <div className="bg-white flex flex-col md:flex md:flex-row justify-center items-center gap-4 p-8">
            <button className="bg-primary text-white p-4 rounded-full">
              <FaPhoneAlt />
            </button>
            <div>
              <h4 className="font-playfair font-semibold text-xl text-center">
                24/7 Online Service
              </h4>
              <p className="font-lato text-app-grey-900 text-xl text-center ">
                Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                scelerisque morbi vulputate. Quisque bibendum eget id diam
                elementum fringilla duis.
              </p>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="bg-[#F2F2F2] pt-6 px-6">
          <div className="bg-white flex flex-col md:flex md:flex-row justify-center items-center gap-4 p-8">
            <button className="bg-primary text-white p-4 rounded-full">
              <img src="./img/icons/union.svg" alt="union icon" />
            </button>
            <div>
              <h4 className="font-playfair font-semibold text-xl text-center">Fast Delivery</h4>
              <p className="font-lato text-app-grey-900 text-xl text-center ">
                Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                scelerisque morbi vulputate. Quisque bibendum eget id diam
                elementum fringilla duis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Service */}
      <div className="bg-[#F2F2F2] pt-6 px-6 md:col-span-2">
        <div className="bg-white flex flex-col justify-center items-center p-8">
          <button className="bg-primary text-white p-4 rounded-full">
            <FaMoneyCheck />
          </button>
          <h4 className="font-playfair font-semibold text-xl text-center">
            Payment With Secure System
          </h4>
          <p className="font-lato text-app-grey-900 text-xl text-center ">
            Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
            scelerisque morbi vulputate. Quisque bibendum eget id diam elementum
            fringilla duis.
          </p>
        </div>
      </div>
    </section>
  );
}
