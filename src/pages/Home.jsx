// Home page component
// Displays overview and key features of the application
function Home() {
  return (
    <div className="container">
      <h1>About Daily Task Tracker</h1>    {/* Page title */}

      <div className="about-card">         {/* Intro card explaining purpose of the app */}
        <p>
          This application helps users organize daily tasks, track progress, and stay productive.
        </p>

        <p>
          Daily Task Tracker is designed to be simple yet powerful, allowing you to manage your tasks efficiently without unnecessary complexity.
        </p>
      </div>

      {/* 3 FEATURE BOXES */}
      <div className="about-features">
        <div className="feature-box">
          <h3>Easy to Use</h3>
          <p>
            Simple interface to add, complete, and delete tasks with just a few clicks.
          </p>
        </div>

        <div className="feature-box">
          <h3>Stay Organized</h3>
          <p>
            Filter your tasks to see all, active, or completed items at a glance.
          </p>
        </div>

        <div className="feature-box">
          <h3>Boost Productivity</h3>
          <p>
            Track your progress and maintain focus on what matters most.
          </p>
        </div>
      </div>

      {/* FEATURES LIST (SEPARATE SECTION) */}
      <div className="features-section">
        <h2>Features</h2>

        <ul>
          <li>✔ Add new tasks instantly</li>
          <li>✔ Mark tasks as complete with a single click</li>
          <li>✔ Delete tasks you no longer need</li>
          <li>✔ Filter tasks by status (All, Active, Completed)</li>
          <li>✔ Clean and intuitive user interface</li>
        </ul>
      </div>
    </div>
  );
}

// Export Home component
export default Home;