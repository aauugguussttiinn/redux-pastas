import React from "react";
// import { useSelector } from "react-redux";
import Pasta from "components/Pasta/Pasta";
import PastaWithAHook from "components/PastaWithAHook/PastaWithAHook";


const App = () => {

  return (
    <div>
      <h1>Have a look at my pastas</h1>
      <Pasta />
      <PastaWithAHook />
    </div>
  );
};

export default App;