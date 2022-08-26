import React from "react";
import Delivery from "../img/delivery.png";
import I1 from "../img/hero1.jpg";

const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 gap-2 w-full md:grid-cols-2">
      <div className="py-4 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-textGrayHighLightcolor px-4 py-1 rounded-3xl h-20  drop-shadow-xl  ">
          <p className="text-base text-[1.25rem] md:text-[1.75rem]  text-textHighLightColor font-semibold">
            {" "}
            Bike Delivery
          </p>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-50 drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="Delivery-Bike"
            ></img>
          </div>
        </div>

        <p className="text-[2.5rem] font-bold tracking-wide text-slate-800 text-opacity-80 lg:text-[4.5rem]">
          The Fastest Delivery in{" "}
          <span className="text-amber-900 text-[3rem] lg:text-[5rem] drop-shadow-lg">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-justify md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          praesentium veniam maxime quis distinctio? Ullam, nemo repellat autem
          magni hic labore, accusamus vel velit voluptate facilis saepe laborum
          aspernatur! Quia.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-btnStartColor to-btnEndColor text-slate-50 w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all pointer-events-auto duration-100  hover:text-slate-400"
        >
          Order now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        {/* <div className='w-full flex items-center justify-center relative'>
            
        </div> */}

        <img src={I1} className="ml-auto  h-420 lg:h-700 w-full rounded-3xl rounded-tl-none rounded-br-none drop-shadow-2xl " alt="hero-bg" />
      </div>
    </section>
  );
};

export default HomeContainer;
