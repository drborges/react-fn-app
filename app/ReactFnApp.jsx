import React from 'react'

export default class ReactFnApp extends React.Component {
  state = { model: this.props.model }
  events = this.props.update
  view = this.props.view

  createTrigger = (eventHandler) => {
    return (event) => this.setState({
      model: eventHandler(this.state.model, event.target.value)
    })
  }

  triggers = (() => {
    return Object.keys(this.events).reduce((triggers, eventName) => {
      const eventHandler = this.events[eventName]
      return Object.assign(triggers, {
        [eventName]: this.createTrigger(eventHandler)
      })
    }, {})
  })()

  render() {
    return this.view(this.state.model, this.triggers)
  }
}
