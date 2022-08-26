import React, { useEffect } from "react";
import { CreateContainer, Header, MainContainer } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  
  const [{foodItems}, dispatch] = useStateValue();
  
  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      // console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data 
      })
    })
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    // <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <div className="bg-primary w-screen h-auto flex flex-col">
          <Header />

          <main className="mt-14 md:mt-20 px-4 md:px-16 py-10 md:py-16 w-full">
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    // </BrowserRouter>
  );
};

export default App;
