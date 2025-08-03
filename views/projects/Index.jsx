const React = require('react');
const Layout = require('../Layout');

function Index({ projects = [], title }) {
  return (
    <Layout title={title}>
      <h1>Projects</h1>
      <a href="/projects/new" className="btn btn-primary">
        + New Project
      </a>
      {projects.length === 0 ? (
        <p>No projects yet.</p>
      ) : (
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p._id}>
              <h2>
                <a href={`/projects/${p._id}`}>{p.title}</a>
              </h2>
              <p>{p.description}</p>
              <p>
                Deadline:{' '}
                {p.deadline ? new Date(p.deadline).toLocaleDateString() : 'None'}
              </p>
              <p>
                Team:{' '}
                {p.teamMembers && p.teamMembers.length
                  ? p.teamMembers.map((u) => u.name).join(', ')
                  : 'No members'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

module.exports = Index;
