// views/tasks/Show.jsx
const React = require('react')
const Layout = require('../Layout')

function Show(props) {
  const { task = {}, token, projectId } = props

  return (
    <Layout>
      <h1>📄 {task.title}</h1>

      <div className="project-card">
        <div className="project-name">{task.title}</div>
        <div className="project-description">{task.description}</div>
        <div className="project-deadline">
          Status: {task.status ? '✅ Completed' : '⌛ Pending'}
        </div>

        <div className="d-flex gap-2 mb-3">
          <a
            href={`/projects/${projectId}/tasks?token=${token}`}
            className="btn btn-secondary"
          >
            ← Back to Tasks
          </a>
          <a
            href={`/projects/${projectId}/tasks/${task._id}/edit?token=${token}`}
            className="btn btn-primary"
          >
            ✏️ Edit
          </a>
        </div>

        <form
          action={`/projects/${projectId}/tasks/${task._id}?_method=DELETE&token=${token}`}
          method="POST"
        >
          <button type="submit" className="btn btn-danger">
            🗑️ Delete Task
          </button>
        </form>
      </div>
    </Layout>
  )
}

module.exports = Show
