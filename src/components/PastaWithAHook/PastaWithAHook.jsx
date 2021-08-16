import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyPastas, eatPastas } from '../../redux';

const PastaWithAHook = () => {
  
  const pastas = useSelector(state => state.pastas);
  const dispatch = useDispatch();
  
  return (
    <div className="pasta-with-a-hook">
      <p>Number of pasta kg: { pastas } </p>
      <button onClick={ () => dispatch(buyPastas()) }>Buy more</button>
      <button onClick={ () => dispatch(eatPastas()) }>Eat some</button>
    </div>
  );
};


export default PastaWithAHook;