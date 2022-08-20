// import Loader from "./components/Loader";
// import Logo from "./components/Logo";

import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      {/* <Loader dimension={10} /> */}
      {/* <Logo dimension={10} /> */}
    </ContextProvider>
  );
}

export default App;
