// views/tasks/New.jsx
const React = require('react')
const Layout = require('../Layout')

function New(props) {
  const { projectId, token } = props

  return (
    <Layout>
      <h1>➕ Add New Task</h1>

      <form
        action={`/projects/${projectId}/tasks?token=${token}`}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="title">Task Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter task title..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter task description..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Completed?</label>
          <input type="checkbox" id="status" name="status" />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            ➕ Create Task
          </button>
          <a
            href={`/projects/${projectId}/tasks?token=${token}`}
            className="btn btn-secondary"
          >
            ← Back to Tasks
          </a>
        </div>
      </form>
    </Layout>
  )
}

module.exports = New
