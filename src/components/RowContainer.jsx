import React, { useEffect, useRef, useState } from "react";
import NotFound from "../img/NotFound.svg";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  // console.log("Data", data);

  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });

    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex  justify-center items-center gap-3 my-12   scroll-smooth bg-rowBg ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col items-center justify-evenly relative h-[350px] ml-10 w-300 min-w-[300px] my-12 md:w-340 md:h-[420px] md:min-w-[340px] py-2 px-4 bg-textGrayHighLightcolor rounded-3xl backdrop-blur-lg  hover:drop-shadow-xl"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-56 h-96 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8" onClick={()=> setItems([...cartItems, item])}
              >
                <MdShoppingCart size={20} className="text-white" />
              </motion.div>
            </div>

            <div className="px-10 pt-0 w-full flex flex-col items-end justify-items-end -mt-8">
              <p className="text-textColor hover:opacity-60 font-semibold text-xl md:text-lg">
                {item?.title}
              </p>

              <p className="mt-1 text-lg opacity-60 text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="pr-1 text-xl opacity-90 text-orange-900">
                    ${" "}
                  </span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />

          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
