const React = require('react')
const Layout = require('../Layout')

function Index (props){
    const projects = props.projects
    return (
        <Layout>
            <h1>📝 Your Projects Main Page </h1>
            
            <div className="d-flex justify-between align-center mb-3">
                <h2>Your Projects</h2>
                <a href={`/projects/new?token=${props.token}`} className="btn btn-primary">
                    ➕ Add New Project
                </a>
            </div>
            
            {projects.length === 0 ? (
                <div className="text-center">
                    <p>No projects! Add your first one to get started.</p>
                    <a href={`/projects/new?token=${props.token}`} className="btn btn-primary">
                        Add Your First Project to Start Planning the Work
                    </a>
                </div>
            ) : (
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project._id} className="project-card">
                            <div className="project-name">{project.title}</div>
                            <div className="project-description">Description: {project.description}</div>
                            <div className="project-deadline">Deadline: {new Date(project.deadline).toLocaleDateString()}</div>

                            
                            <div className="d-flex gap-2">
                                <a href={`/projects/${project._id}?token=${props.token}`} className="btn btn-secondary">
                                    👁️ View
                                </a>
                                <a href={`/projects/${project._id}/edit?token=${props.token}`} className="btn btn-primary">
                                    ✏️ Edit
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </Layout>
    )
}

module.exports = Index