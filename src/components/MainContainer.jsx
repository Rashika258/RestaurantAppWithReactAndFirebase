import React, { useEffect, useRef, useState } from "react";

import HomeContainer from "./HomeContainer";

import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RowContainer } from ".";
import { useStateValue } from "../context/StateProvider";

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const [scrollValue, setScrollValue] = useState(0);
  

  // const scroll = (scrollOffset) => {
  //   rowContainerRef.current.scrollLeft += scrollOffset;
  // };

  useEffect(() => {
  
  }, [scrollValue])
  

  return (
    <div className="w-full h-auto gap-3 flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full pt-10">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:bottom-0 before:left-0 before:bg-amber-700 to-textHighLightColor transition-all ease-in-out duration-100">
            Our Fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-10 h-10 rounded-lg bg-textHighLightColor hover:bg-amber-700 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center "
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft
                size={30}
                className="text-white text-lg font-bold"
              />
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-10 h-10 rounded-lg bg-textHighLightColor hover:bg-amber-700 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center "
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight
                size={30}
                className="text-white text-lg font-bold"
              />
            </motion.div>
          </div>
        </div>

        {/* <RowContainer
          scrollValue={scrollValue}
          flag={false}
          data={foodItems?.filter((n) => n.category === "fruits")}
        /> */}

        <RowContainer
          scrollValue={scrollValue}
          flag={false}
          data={foodItems}
        />
      </section>
    </div>
  );
};

export default MainContainer;
