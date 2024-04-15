//import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
//functional approach
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const inrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase x5</button>
        <button onClick={inrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//class based approach
/* class Counter extends Component {
  inrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
          <button onClick={this.inrementHandler.bind(this)}>Increment</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchoProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' })
  };
};

export default connect(mapStateToProps, mapDispatchoProps)(Counter);
 */
