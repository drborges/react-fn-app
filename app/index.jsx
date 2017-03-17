import React from "react"
import ReactDOM from "react-dom"
import ReactFnApp from "./ReactFnApp"
import Counter from "./components/Counter"

const model = 0

const events = {
  increment: (count) => count + 1,
  decrement: (count) => count - 1,
}

const view = (model, triggers) => (
  <Counter
    count={model}
    onIncrement={triggers.increment}
    onDecrement={triggers.decrement}
  />
)

const App = (
  <ReactFnApp
    update={events}
    model={model}
    view={view}
  />
)

ReactDOM.render(App, document.getElementById("app"))
