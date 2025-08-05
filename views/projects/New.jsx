const React = require('react')
const Layout = require('../Layout')

function New (props) {
    return(
        <Layout>
            <h1>🗓️ Add New Project</h1>
            
            <form action={`/projects?token=${props.token}`} method="POST">
                <div className="form-group">
                    <label htmlFor="title">Project Title:</label>
                    <input 
                        type="text" 
                        id="title"
                        name="title" 
                        placeholder="Enter project title..."
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input 
                        type="text" 
                        id="description"
                        name="description" 
                        placeholder="Enter your project description"
                        required 
                    />
                </div>
                
                <div className="form-group">
                  <label htmlFor="deadline">Deadline:</label>
                  <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      required
                   />
                </div>

                
                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">
                        ➕ Create Project
                    </button>
                    <a href={`/projects?token=${props.token}`} className="btn btn-secondary">
                        ← Back to All Projects
                    </a>
                </div>
            </form>
        </Layout>
    )
}

module.exports = New