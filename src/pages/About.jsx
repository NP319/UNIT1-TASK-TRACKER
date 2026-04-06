function About() {
  return (
    <div className="container">
      <h1>About Me</h1>

      <div className="about-card">
        <p>
          Hi, I’m a student learning web development and building projects using React.
        </p>

        <p>
          This task tracker project helped me understand how to manage data, create reusable components, and build interactive user interfaces.
        </p>
      </div>

      <div className="about-card">
        <h2>Feedback</h2>

        <input type="text" placeholder="Your name" />
        <br /><br />
        <input type="text" placeholder="Your feedback" />
        <br /><br />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default About;