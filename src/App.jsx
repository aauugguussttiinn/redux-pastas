import React from "react";
// import { useSelector } from "react-redux";
import Pasta from "components/Pasta/Pasta";
import PastaWithAHook from "components/PastaWithAHook/PastaWithAHook";
import Rice from "components/Rice/Rice";


const App = () => {

  return (
    <div>
      <h1>Have a look at my pastas</h1>
      <Pasta />
      <PastaWithAHook />
      <Rice />
    </div>
  );
};

export default App;