import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from './Greeting'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={
            <div>
              <h1>Hello World</h1>
            </div>
          } />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </Router>
    )
  }
}
