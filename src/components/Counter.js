import classes from './Counter.module.css'
export default function Counter() {
  return (
    <section className={classes.counter}>
      <h1>Redux Counter</h1>
      <p>8</p>
      <div>
        <button>increment</button>
        <button>increase</button>
        <button>decrement</button>
      </div>
      <button>toggle</button>
    </section>
  )
}