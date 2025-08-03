const React = require('react');
const Layout = require('../Layout');

function Show({ project = {}, title, error }) {
  return (
    <Layout title={title || project.title}>
      <h1>{project.title}</h1>
      {error && <div className="error">{error}</div>}
      <p>{project.description}</p>
      <p>
        <strong>Deadline:</strong>{' '}
        {project.deadline
          ? new Date(project.deadline).toLocaleDateString()
          : 'None'}
      </p>

      <section>
        <h2>Team Members</h2>
        {project.teamMembers && project.teamMembers.length ? (
          <ul>
            {project.teamMembers.map((u) => (
              <li key={u._id}>
                {u.name} ({u.email}) — {u.role}
              </li>
            ))}
          </ul>
        ) : (
          <p>No team members assigned.</p>
        )}
      </section>

      <section>
        <h2>Tasks</h2>
        {project.tasks && project.tasks.length ? (
          <ul>
            {project.tasks.map((t) => (
              <li key={t._id}>
                <a href={`/tasks/${t._id}`}>{t.title}</a> ({t.status})
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks in this project.</p>
        )}
      </section>
    </Layout>
  );
}

module.exports = Show;
