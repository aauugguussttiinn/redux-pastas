import React from 'react';
import { connect } from 'react-redux';
import { buyPastas } from '../../redux';

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