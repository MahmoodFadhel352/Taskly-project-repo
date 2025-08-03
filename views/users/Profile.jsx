const React = require('react');
const Layout = require('../Layout');

function Profile(props) {
  const { user = {}, userProjects = [], userTasks = [] } = props;

  return (
    <Layout title="Profile" user={user}>
      <div className="profile">
        <h1>{user.name}'s Profile</h1>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>

        <section>
          <h2>Projects</h2>
          {userProjects.length === 0 && <p>No projects assigned.</p>}
          <ul>
            {userProjects.map((project) => (
              <li key={project._id}>
                <a href={`/projects/${project._id}`}>{project.title}</a> - Deadline:{' '}
                {project.deadline
                  ? new Date(project.deadline).toLocaleDateString()
                  : 'N/A'}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Tasks</h2>
          {userTasks.length === 0 && <p>No tasks assigned.</p>}
          <ul>
            {userTasks.map((task) => (
              <li key={task._id}>
                <a href={`/tasks/${task._id}`}>{task.title}</a> ({task.status}) - Due:{' '}
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleDateString()
                  : 'N/A'}
                {task.project && (
                  <>
                    {' '}
                    in <a href={`/projects/${task.project._id}`}>{task.project.title}</a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

module.exports = Profile;
