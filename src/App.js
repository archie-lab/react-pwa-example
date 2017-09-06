import React, { Component } from 'react'
import './App.css'
import { Route, Link, MemoryRouter } from 'react-router-dom'

const NavBar = () => (
  <div className="navbar">
    <Link to="/">Feed</Link>
    <Link to="/profile">Profile</Link>
  </div>
)

const Template = ({title}) => (
  <div>
    <NavBar />
    <p className="page-info">This is {title} page</p>
  </div>
)

const Feed = () => (
  <Template title="Feed" />
)

const Profile = () => (
  <Template title="Profile" />
)

class App extends Component {
  render() {
    return (
      <MemoryRouter>
        <div>
          <Route exact path="/" component={Feed} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </MemoryRouter>
    )
  }
}

export default App
