import React from 'react'

export default class ReactFnApp extends React.Component {
  state = { model: this.props.model }
  actions = this.props.actions
  view = this.props.view

  trigger = (action) => {
    return (event) => this.setState({ model: action(this.state.model, event.target.value) })
  }

  triggers = (() => {
    return Object.keys(this.actions).reduce((triggers, action) => {
      return Object.assign(triggers, { [action]: this.trigger(this.actions[action]) })
    }, {})
  })()

  render() {
    return this.view(this.state.model, this.triggers)
  }
}
