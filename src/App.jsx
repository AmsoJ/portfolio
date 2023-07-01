import Loading from "./components/Loading/Loading";
import Loaded from "./components/Loaded/Loaded";
import { useGlobalContext } from "./components/Loaded/GlobalHooks/Context";

function App() {
  const {load} = useGlobalContext();

  return load ? <Loaded /> : <Loading />;
}

export default App;
