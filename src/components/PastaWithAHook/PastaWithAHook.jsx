import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyPastas } from '../../redux';

const PastaWithAHook = () => {
  
  const pastas = useSelector(state => state.pastas);
  
  return (
    <div className="pasta-with-a-hook">
      <p>Number of pasta kg: { pastas } </p>
      <button>Buy more</button>
    </div>
  );
};


export default PastaWithAHook;