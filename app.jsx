import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">useParams Hook Example</h1>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
