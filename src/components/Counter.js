import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  function incrementHandler() {
    dispatch(counterActions.increment());
  }
  function decrementHandler() {
    dispatch(counterActions.decrement());
  }
  function increaseHandler() {
    dispatch(counterActions.increase(5));
  }
  function toggleHandler() {
    dispatch(counterActions.toggle());
  }

  return (
    <section className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <p>{counter}</p>}

      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleHandler}>toggle</button>
    </section>
  );
}
