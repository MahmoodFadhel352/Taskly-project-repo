const React = require('react')
const Layout = require('../Layout')

function Edit (props) {
    const { title, _id, description, deadline } = props.project

    return(
        <Layout project={props.project}>
            <h1>✏️ Edit {title}</h1>
            
            <form action={`/projects/${_id}?_method=PUT&token=${props.token}`} method="POST">
                <div className="form-group">
                    <label htmlFor="title">Project title:</label>
                    <input 
                        type="text" 
                        id="title"
                        name="title" 
                        defaultValue={title}
                        placeholder="Enter project title ..."
                        required 
                    />
                </div>
                
                 <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input 
                        type="text" 
                        id="description"
                        name="description"
                        defaultValue={description}
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
                      defaultValue={deadline}
                      required
                   />
                </div>
                
                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">
                        💾 Update Project
                    </button>
                    <a href={`/projects/${_id}?token=${props.token}`} className="btn btn-secondary">
                        ← Back to {title}
                    </a>
                </div>
            </form>
        </Layout>
    )
}

module.exports = Edit