import React from 'react';
import './NavBar.scss';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { isOpen: false };
  }

  render() {
    return (
      <header className="sticky sticky-top">
        <nav className={`container container-nav main-nav ${this.state.isOpen ? 'is-open' : ''}`} id="nav-bar">
          <Link to="/" onClick={() => this.setState({ isOpen: false })}>
            <img src="/plasticterin/header-logo.png" alt="main-logo" className="main-logo" />
          </Link>
          <ul className="nav-items">
            <li>
              <Link to="/" className="nav-item" onClick={() => this.setState({ isOpen: false })}>
                5 na 12
              </Link>
            </li>
            <li>
              <Link to="/plastic-terin" className="nav-item" onClick={() => this.setState({ isOpen: false })}>
              plastic(terin)
              </Link>
            </li>
            <li>
              <Link to="/waanzin" className="nav-item" onClick={() => this.setState({ isOpen: false })}>
                waanzin
              </Link>
            </li>
            <li>
              <Link to="/strijders" className="nav-item" onClick={() => this.setState({ isOpen: false })}>
                strijders
              </Link>
            </li>
          </ul>
          <button type="button" className="menu-toggle" onClick={(e) => this.setState({ isOpen: !this.state.isOpen })}>
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </header>
    );
  }
}

export default NavBar;
