import Home from "./pages/Home";
import { useEffect } from "react";
import { initGA, logPageView } from "./analytics";

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return <Home />;
}

export default App;
