import Loader from "./components/Loader";
import ContextProvider from "./context/ContextProvider";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  return (
    <ContextProvider>
      {/* <Loader /> */}
      <Navbar />
      <Landing/>
    </ContextProvider>
  );
}

export default App;
