import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Navbar
            <span>
              {this.props.totalCount > 0 && (
                <span className="badge bg-secondary ms-2">
                  {this.props.totalCount}
                </span>
              )}
            </span>
          </span>
        </div>
      </nav>
    );
  }
}
