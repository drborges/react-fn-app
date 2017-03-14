import React from "react"

const Counter = ({ count, onIncrement, onDecrement }) => (
  <section className="counter">
    <button onClick={onDecrement} disabled={count < 1}>-</button>
    <div>{count}</div>
    <button onClick={onIncrement}>+</button>
  </section>
)

export default Counter
