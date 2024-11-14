
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

//import AddNewDoctor from "./components/AddNewDoctor";
import AddNewDoctor from "./components/AddNewDoctor";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import AddNewAdmin from "./components/AddNewAdmin";
import "./App.css";

const App = () => {

const{isAuthenticated, setIsAuthenticated, setAdmin}=useContext(Context);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/admin/me",
        {
          withCredentials: true,
        }
      );
      setIsAuthenticated(true);
      setAdmin(response.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      setAdmin({});
    }
  };
  fetchUser();
}, [isAuthenticated]);



  return (
    <div>
      <Router>
      <Sidebar/>
      <Routes>
         <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor/addNew" element={<AddNewDoctor />} /> 
        <Route path="/admin/addNew" element={<AddNewAdmin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/doctors" element={<Doctors />} /> 
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
    </div>
  )
}

export default App





