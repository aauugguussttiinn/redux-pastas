import React from 'react';
import { buyPastas } from 'redux/pastasActions';

const Pasta = () => {

  return (
    <div>
      <p>Here are my pasta</p>
      <button>Buy more</button>
    </div>
  );
};

export default Pasta;

const mapStateToProps = (state) => {
  return {
    pastas: state.pastas
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPastas: () => (dispatch(buyPastas()))
  };
};