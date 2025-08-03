const React = require('react');
const Layout = require('../Layout');

function Create({ error, form = {}, title }) {
  return (
    <Layout title={title || 'New Project'}>
      <h1>Create Project</h1>
      {error && <div className="error">{error}</div>}

      <form action="/projects" method="POST">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={form.title || ''}
            placeholder="Project title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            defaultValue={form.description || ''}
            placeholder="Brief description"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="deadline">Deadline:</label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            defaultValue={form.deadline || ''}
          />
        </div>

        <div className="form-group">
          <label htmlFor="teamMembers">Team Members (IDs comma-separated):</label>
          <input
            id="teamMembers"
            name="teamMembers"
            type="text"
            defaultValue={
              form.teamMembers ? form.teamMembers.join(',') : ''
            }
            placeholder="userId1,userId2"
          />
          <small>Later you can replace with multi-select populated from users.</small>
        </div>

        <button type="submit" className="btn btn-primary">
          Create Project
        </button>
      </form>
    </Layout>
  );
}

module.exports = Create;
