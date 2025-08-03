const React = require('react');
const Layout = require('../Layout');

function Login(props) {
  const { error, form = {} } = props;
  return (
    <Layout title="Login">
      <h1>🔐 Sign In</h1>
      <h2 className="text-center mb-3">Welcome Back!</h2>

      {error && <div className="error">{error}</div>}

      <form action="/users/login" method="POST">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            defaultValue={form.email || ''}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
            required
          />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            🔐 Sign In
          </button>
          <a href="/users/register" className="btn btn-secondary">
            📝 Create Account
          </a>
        </div>
      </form>

      <div className="text-center mt-3">
        <p>
          Don't have an account? <a href="/users/register">Sign up here</a>
        </p>
      </div>
    </Layout>
  );
}

module.exports = Login;
