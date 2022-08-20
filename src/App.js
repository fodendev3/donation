// import Loader from "./components/Loader";
// import Logo from "./components/Logo";

import ContextProvider from "./context/ContextProvider";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  return (
    <ContextProvider>
      {/* <Loader dimension={10} /> */}
      {/* <Logo dimension={10} /> */}
      <Navbar />
      <Landing/>
    </ContextProvider>
  );
}

export default App;
