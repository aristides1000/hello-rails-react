import React from 'react'
import Greeting from './Greeting'

export default class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Hello World</h1>
        </div>
        <Greeting />
      </>
    )
  }
}
