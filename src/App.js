import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ContextProvider from "./context/ContextProvider";
import Loader from "./components/Loader";

const Landing = lazy(() => import('./components/Landing'));
const Navbar = lazy(() => import('./components/User/Navbar'));
const NavBar = lazy(() => import('./components/Ngo/NavBar'));

function App() {
  const location = useLocation()

  return (
    <Router>
      <Suspense fallback={<Loader dimension={10} />}>
        <ContextProvider>
          {location.pathname.startsWith('/user') && <Navbar />}
          {location.pathname.startsWith('/ngo') && <NavBar />}
          <Routes>
            <Route path='/' element={<Landing />} />
            {/* <Route path="/user" element={<Comp />} />
            <Route path="/ngo" element={<Comp />} /> */}
          </Routes>
        </ContextProvider>
      </Suspense>
    </Router>
  );
}

export default App;
