import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css'; // Import the CSS file

class Nav extends React.Component {
  render() {
    const navComponents = [];
    if (this.props.loggedIn) {
      navComponents.push(
        <ul key={0} className="nav-items logged-in">
          <li key={0}><Link to="/">Home</Link></li>
          <li key={1}><Link to="/mypage">My Books</Link></li>
          <li key={2}><Link to="/exchange">My Requests</Link></li>
          <li key={3}><Link to="/search">Find Books</Link></li>
          <li key={4}><Link to="/" onClick={this.props.logOut}>Log out</Link></li>
        </ul>
      );
    } else {
      navComponents.push(
        <ul key={1} className="nav-items logged-out">
          <li key={1}><Link to="/login">Login</Link></li>
          <li key={2}><Link to="/register">Register</Link></li>
        </ul>
      );
    }

    return (
      <div className="nav-bar">
        <div className="nav-left">
          <span className="student-id">Student ID: 2023mt93132</span>
        </div>
        <div className="nav-right">
          {navComponents}
        </div>
      </div>
    );
  }
}

export default Nav;
