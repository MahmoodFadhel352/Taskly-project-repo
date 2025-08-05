// views/tasks/Edit.jsx
const React = require('react')
const Layout = require('../Layout')

function Edit(props) {
  const { task = {}, token, projectId } = props

  return (
    <Layout>
      <h1>✏️ Edit {task.title}</h1>

      <form
        action={`/projects/${projectId}/tasks/${task._id}?_method=PUT&token=${token}`}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="title">Task Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={task.title}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={task.description}
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Completed?</label>
          <input
            type="checkbox"
            id="status"
            name="status"
            defaultChecked={task.status}
          />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            💾 Update Task
          </button>
          <a
            href={`/projects/${projectId}/tasks/${task._id}?token=${token}`}
            className="btn btn-secondary"
          >
            ← Back to Task
          </a>
        </div>
      </form>
    </Layout>
  )
}

module.exports = Edit
