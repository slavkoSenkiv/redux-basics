import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }
  return state;
}

const store = createStore(counterReducer);

export default store;