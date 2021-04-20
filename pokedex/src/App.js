import { useEffect, useState } from "react";
import { Router } from "./Router/Router";
import { getPokemonList } from "./services/getPokemonList";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getPokemonList();
      setList(result);
    })();
  }, []);

  console.log(list);

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
