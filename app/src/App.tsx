import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "@pages/signin";
import SignUp from "@pages/signup";
import Toaster from "@components/toaster";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
