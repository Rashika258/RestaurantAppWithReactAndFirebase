import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="pb-10">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:bottom-0 before:left-0 before:bg-amber-700 to-textHighLightColor transition-all ease-in-out duration-100">
            Our Hot Dishes
          </p>
        </div>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-amber-700" : "bg-card"
                } w-28 min-w-[94px] h-32 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out hover:bg-amber-900`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-12 h-12 rounded-full shadow-lg  ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-amber-900"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    size={30}
                    className={`${
                      filter === category.urlParamName
                        ? "text-textHighLightColor"
                        : "text-white"
                    } text-lg  group-hover:text-textHighLightColor`}
                  />
                </div>
                <p
                  className={`text-lg font-semibold ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
