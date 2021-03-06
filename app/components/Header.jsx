import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Generic from './Generic.jsx'

export default class Header extends Component {
  constructor() {
    super();
    this._generic = new Generic();
  }

  render() {
    return (
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#"><img src="images/logo.png" alt="Website Name" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <button action="/articles">Click</button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" exact to="/" activeClassName="active" onClick={e => this._generic.HideMenu(e)}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/articles" activeClassName="active" onClick={e => this._generic.HideMenu(e)}>Articles</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" id="header-search" type="text" placeholder="Enter a search term..." aria-label="Enter a search term..." />
            <button className="btn btn-outline-success my-2 my-sm-2" type="submit" onClick={e => this._generic.Search(e)}>Search</button>
          </form>
        </div>
      </nav>
      </header>
    )
  }
}
