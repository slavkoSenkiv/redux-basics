import { useSelector } from 'react-redux';
import classes from './Counter.module.css';
//functional approach
const Counter = () => {
  const counter = useSelector((state) => state.counter);

/*   function incrementHandler() {
    dispatch({ type: 'increment' });
  }
  function decrementHandler() {
    dispatch({ type: 'decrement' });
  }
  function toggleCounterHandler() {}
 */

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }
  const decrementHandler = () => {
    dispatch({ type: 'increment' });
  }
  const toggleCounterHandler = () => {
    
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increase x5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
