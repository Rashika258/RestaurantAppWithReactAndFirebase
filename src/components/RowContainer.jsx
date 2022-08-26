import React, { useEffect, useRef } from "react";
import c1 from "../img/c1.png";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data, scrollValue}) => {
  console.log("Data", data);

  const rowContainer = useRef()
  
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue])
  

  return (
    <div
      className={`w-full flex items-center my-12 scroll-smooth bg-rowBg ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="ml-10 w-300 min-w-[300px] my-12 md:w-340 md:min-w-[340px] h-auto bg-textGrayHighLightcolor rounded-3xl backdrop-blur-lg  hover:drop-shadow-xl"
          >
            <div className="w-full flex items-center justify-center">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={c1}
                alt=""
                className="w-60  -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center roun cursor-pointer hover:shadow-md"
              >
                <MdShoppingCart size={20} className="text-white" />
              </motion.div>
            </div>

            <div className="px-10 pt-0 w-full flex flex-col items-end justify-items-end">
              <p className="text-textColor hover:opacity-60 font-semibold text-xl md:text-lg">
                something
              </p>

              <p className="mt-1 text-lg opacity-60 text-gray-500">
                {" "}
                45 Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="pr-1 text-xl opacity-90 text-orange-900">
                    ${" "}
                  </span>
                  5.25
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
