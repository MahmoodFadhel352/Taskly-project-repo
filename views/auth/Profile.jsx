// views/auth/Profile.jsx
const React = require('react')
const Layout = require('../Layout')

function Profile(props) {
  const { user, token } = props
  return (
    <Layout>
      <h1>👤 Your Profile</h1>
      <div className="project-card mb-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <h2>Edit Your Info</h2>
      <form action={`/users/${user._id}?_method=PUT&token=${token}`} method="POST">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={user.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Leave blank to keep current"
          />
        </div>
        <div className="d-flex gap-2 mb-3">
          <button type="submit" className="btn btn-primary">
            💾 Save Changes
          </button>
          <a href={`/projects?token=${token}`} className="btn btn-secondary">
            ← Back to Projects
          </a>
        </div>
      </form>

      <hr />
      <form action={`/users/${user._id}?_method=DELETE&token=${token}`} method="POST">
        <button type="submit" className="btn btn-danger">
          🗑️ Delete Account
        </button>
      </form>
    </Layout>
  )
}

module.exports = Profile
