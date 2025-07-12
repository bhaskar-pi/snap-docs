import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "@pages/signIn";
import SignUp from "@pages/signUp";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
