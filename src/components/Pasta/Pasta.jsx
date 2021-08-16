import React from 'react';
import { buyPastas } from 'redux/pastasActions';
import { connect } from 'react-redux';

const Pasta = (props) => {

  return (
    <div>
      <p>Here are my pasta : { props.pastas } kg</p>
      <button onClick={ props.buyPastas }>Buy more</button>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Pasta)