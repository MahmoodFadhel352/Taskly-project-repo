const React = require('react')
const Layout = require('../Layout')

function Show(props){
    const {project} = props
    return(
        <Layout project={props.project}>
            <h1>📋 {props.project.title}</h1>
            
            <div className="project-card">
                 <div className="project-name">{project.title}</div>
                 <div className="project-description">Description: {project.description}</div>
                 <div className="project-deadline">Deadline: {new Date(project.deadline).toLocaleDateString()}</div>
                
                <p className="mb-3">
                  Project: {project.title} {project.description ? 'has a description.' : 'is awaiting a description.'}
                  {' '}
  
                  {new Date(project.deadline) < new Date()
                        ? '⚠️ This project is overdue!'
                        : `📅 Due by ${new Date(project.deadline).toLocaleDateString()}.`}
                </p>
                
                <div className="d-flex gap-2">
                    <a href={`/projects?token=${props.token}`} className="btn btn-secondary">
                        ← Back to All Projects
                    </a>
                    <a href={`/projects/${props.project._id}/tasks?token=${props.token}`} className="btn btn-primary">
                        📋 View Tasks
                    </a>
                    <a href={`/projects/${props.project._id}/edit?token=${props.token}`} className="btn btn-primary">
                        ✏️ Edit {props.project.title}
                    </a>
                </div>
                
                <div className="mt-3">
                    <form action={`/projects/${props.project._id}?_method=DELETE&token=${props.token}`} method="POST">
                        <button type="submit" className="btn btn-danger">
                            🗑️ Delete {props.project.title}
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

module.exports = Show