const React = require('react');
const Layout = require('../Layout');

function Register(props) {
  const { error, form = {} } = props;
  return (
    <Layout title="Register">
      <h1>📝 Sign Up</h1>
      <h2 className="text-center mb-3">Join Taskly!</h2>

      {error && <div className="error">{error}</div>}

      <form action="/users/register" method="POST">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name..."
            defaultValue={form.name || ''}
            required
          />
        </div>

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

        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" defaultValue={form.role || 'member'}>
            <option value="member">Member</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            📝 Create Account
          </button>
          <a href="/users/login" className="btn btn-secondary">
            🔐 Sign In Instead
          </a>
        </div>
      </form>

      <div className="text-center mt-3">
        <p>
          Already have an account? <a href="/users/login">Sign in here</a>
        </p>
      </div>
    </Layout>
  );
}

module.exports = Register;
