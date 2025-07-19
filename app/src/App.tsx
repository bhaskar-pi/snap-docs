import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toaster from "@components/toaster";
import SignIn from "@pages/signin";
import SignUp from "@pages/signup";
import Dashboard from "@pages/dashboard";
import SendDocRequest from "@pages/send-doc-request";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send-request" element={<SendDocRequest />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
