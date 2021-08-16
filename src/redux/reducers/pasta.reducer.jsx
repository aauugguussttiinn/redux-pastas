import { BUY_PASTAS } from 'redux/actions/pasta.action';

const initialState = {
  pastas: 4
};

const pastasReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_PASTAS:
      return {
        ...state,
        pastas: state.pastas + 1
      };
    default:
      return state;
  }
}

export default pastasReducer;