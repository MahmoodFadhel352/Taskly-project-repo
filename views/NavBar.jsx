// views/NavBar.jsx
const React = require('react');

function NavBar(props) {
  return (
    <nav className="navbar">
        <img src="/images/taskly-logo.png" alt="Taskly Logo" />


      <div className="navbar__greeting">
        Welcome to Taskly Your Perfect Task Manager App!
      </div>
    </nav>
  );
}

module.exports = NavBar;
