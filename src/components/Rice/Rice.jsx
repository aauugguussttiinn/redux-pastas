import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyRice, eatRice } from '../../redux';

const Rice = () => {
  
  const rice = useSelector(state => state.rice);
  const dispatch = useDispatch();
  
  return (
    <div className="rice">
      <p>Number of rice in kg: { rice.rice } </p>
      <button onClick={ () => dispatch(buyRice()) }>Buy more</button>
      <button onClick={ () => dispatch(eatRice()) }>Eat some</button>
    </div>
  );
};


export default Rice;