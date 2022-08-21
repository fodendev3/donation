/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MakeDonations from "./components/User/MakeDonations";
import UserProfile from "./components/User/UserProfile";
import UserHome from "./components/User/UserHome";
import useAuth from "./hooks/useAuth";

const Landing = lazy(() => import("./components/Landing"));
const Navbar = lazy(() => import("./components/User/Navbar"));
const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login"));
const NavBar = lazy(() => import("./components/Ngo/NavBar"));
const Dashboard = lazy(() => import("./components/Ngo/Dashboard"));
const Profile = lazy(() => import("./components/Ngo/Profile"));
const About = lazy(() => import("./components/About"));
const Posts = lazy(() => import("./components/Ngo/Posts"));
const DashBoardMoreDetails = lazy(() =>
  import("./components/Ngo/DashBoardMoreDetails")
);
function App() {
  const navigate = useNavigate()
  const location = useLocation();
  const { user, ngo } = useAuth()
  const notLogged = ['/', '/user/signup', '/user/login', '/ngo/signup', '/ngo/login', '/ngo/all', '/ngo/id/:uid']
  const userLogged = ['/user', 'user/profile', '/ngo/id/:uid', '/user/donate', '/user/donations', '/ngo/all']
  const ngoLogged = ['/ngo', '/ngo/profile', '/ngo/id/:uid', '/ngo/all', '/ngo/dashboard', '/ngo/dashmore']

  useEffect(() => {
    const path = location.pathname
    if (user) { if (!userLogged.includes(path)) navigate('/user') }
    else if (ngo) { if (!ngoLogged.includes(path)) navigate('/ngo') }
    else { if (!notLogged.includes(path)) navigate('/') }
  }, [user, ngo, location.pathname])

  return (
    <Suspense fallback={<Loader dimension={10} />}>
      <ContextProvider>
        {location.pathname.startsWith("/user") && <Navbar />}
        {location.pathname.startsWith("/ngo") && <NavBar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/signup" element={<Register type="User" />} />
          <Route path="/user/login" element={<Login type="User" />} />
          <Route path="/user/donate" element={<MakeDonations />} />
          <Route path="/ngo/signup" element={<Register type="Ngo" />} />
          <Route path="/ngo/login" element={<Login type="Ngo" />} />
          <Route path="/ngo/dashboard" element={<Dashboard />} />
          <Route path="/ngo/profile" element={<Profile />} />
          <Route path="/ngo" element={<Posts />} />
          <Route path="/ngo/dashmore" element={<DashBoardMoreDetails />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user" element={<UserHome />} />

          {/* <Route path="/user" element={<Comp />} />
            <Route path="/ngo" element={<Comp />} /> */}
        </Routes>
      </ContextProvider>
      <ToastContainer position="bottom-right" />
    </Suspense>
  );
}

export default App;
