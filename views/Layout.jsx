const React = require('react');

function Layout(props) {
  const title = props.title || 'Taskly';
  return (
    <html>
      <head>
        <title>{title} | Taskly</title>
        <link rel="stylesheet" href="/css/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>
          <nav className="nav">
            <a href="/">Taskly</a>
            <div className="nav-links">
              <a href="/projects">Projects</a>
              <a href="/tasks">Tasks</a>
              <a href="/users/profile/{(props.user && props.user._id) || ''}">Profile</a>
              <a href="/users/login">Login</a>
              <a href="/users/register">Register</a>
            </div>
          </nav>
        </header>
        <div className="container">
          {props.children}
        </div>
        <footer>
          <p>&copy; {new Date().getFullYear()} Taskly</p>
        </footer>
      </body>
    </html>
  );
}

module.exports = Layout;
