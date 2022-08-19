import Loader from "./components/Loader";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Loader />
    </ContextProvider>
  );
}

export default App;
