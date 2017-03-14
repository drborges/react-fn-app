import React from "react"
import ReactDOM from "react-dom"
import ReactFnApp from "./ReactFnApp"
import Counter from "./components/Counter"

const model = 0

const actions = {
  increment: (count) => count + 1,
  decrement: (count) => count - 1,
}

const view = (model, trigger) => (
  <Counter
    count={model}
    onIncrement={trigger.increment}
    onDecrement={trigger.decrement}
  />
)

const App = (
  <ReactFnApp
    actions={actions}
    model={model}
    view={view}
  />
)

ReactDOM.render(App, document.getElementById("app"))
