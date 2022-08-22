import React from "react";
import { CreateContainer, Header, MainContainer } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <div className="bg-primary w-screen h-auto flex flex-col">
          <Header />

          <main className="mt-24 p-8 w-full">
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
