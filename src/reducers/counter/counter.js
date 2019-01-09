import { COUNTER_INCREMENT } from '../../actions/counter';

let initState = 1

const counter = (state = initState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

export default counter;