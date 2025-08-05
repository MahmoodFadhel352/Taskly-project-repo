// views/tasks/Index.jsx
const React = require('react')
const Layout = require('../Layout')

function Index(props) {
  const { tasks = [], token, projectId } = props

  return (
    <Layout>
      <h1>🗒️ Tasks for Project</h1>

      <div className="d-flex justify-between align-center mb-3">
        <h2>Your Tasks</h2>
        
      </div>

      {tasks.length === 0 ? (
        <div className="text-center">
          <p>No tasks yet! Add one to get started.</p>
          <a
            href={`/projects/${projectId}/tasks/new?token=${token}`}
            className="btn btn-primary"
          >
            ➕ Add Your First Task
          </a>
        </div>
      ) : (
        <div className="projects-grid">
          {tasks.map((task) => (
            <div key={task._id} className="project-card">
              <div className="project-name">{task.title}</div>
              <div className="project-description">{task.description}</div>
              <div className="project-deadline">
                Status: {task.status ? '✅ Completed' : '⌛ Pending'}
              </div>
              <div className="d-flex gap-2">
                <a
                  href={`/projects/${projectId}/tasks/${task._id}?token=${token}`}
                  className="btn btn-secondary"
                >
                  👁️ View
                </a>
                <a
                  href={`/projects/${projectId}/tasks/${task._id}/edit?token=${token}`}
                  className="btn btn-primary"
                >
                  ✏️ Edit
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <a
        href={`/projects/${projectId}?token=${token}`}
        className="btn btn-secondary"
      >
        ← Back to Project
      </a>
      <a
          href={`/projects/${projectId}/tasks/new?token=${token}`}
          className="btn btn-primary"
        >
          ➕ Add New Task
        </a>
            <a href="/users/signin" className="btn btn-primary2">
                    Log out
                </a>
    </Layout>
  )
}

module.exports = Index
