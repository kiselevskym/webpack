import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home/Home.jsx"));
const Contacts = React.lazy(() => import("./pages/Contacts/Contacts.jsx"));

const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
