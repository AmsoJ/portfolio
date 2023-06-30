import { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import Loaded from "./components/Loaded/Loaded";

function App() {
  const [load, setLoad] = useState(false);

  useEffect(()=> {
    setTimeout(() => {
      setLoad(true);
    }, () => Math.floor(Math.random() * 5000 + 3000))
  }, []);



  return load ? <Loaded /> : <Loading />;
}

export default App;
