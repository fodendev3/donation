import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import Loader from "./components/Loader";
import LogOut from "./components/Ngo/LogOut";

const Landing = lazy(() => import("./components/Landing"));
const Navbar = lazy(() => import("./components/User/Navbar"));
const NavBar = lazy(() => import("./components/Ngo/NavBar"));
const Dashboard = lazy(() => import("./components/Ngo/Dashboard"));
const Profile = lazy(() => import("./components/Ngo/Profile"));
function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader dimension={10} />}>
      <ContextProvider>
        {location.pathname.startsWith("/user") && <Navbar />}
        {location.pathname.startsWith("/ngo") && <NavBar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ngo/dash" element={<Dashboard />} />
          <Route path="/ngo/profile" element={<Profile />} />

          {/* <Route path="/user" element={<Comp />} />
            <Route path="/ngo" element={<Comp />} /> */}
        </Routes>
        {/* <LogOut /> */}
      </ContextProvider>
    </Suspense>
  );
}

export default App;
