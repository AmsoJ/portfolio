import { useState } from "react";
import Loading from "./components/Loading/Loading";
import Loaded from "./components/Loaded/Loaded";

function App() {
  const [load, setLoad] = useState(true);

  return load ? <Loaded /> : <Loading />;
}

export default App;
