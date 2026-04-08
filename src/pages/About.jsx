import { useState } from "react";
import profile from "../assets/profile.jpeg";

function About() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.trim() === "" || message.trim() === "") return;

    setSubmitted(true);
    setName("");
    setMessage("");
  };

  return (
    <div className="container">
      <h1>About Me</h1>

      <div className="about-card">
        <h2>About Me</h2>

        <img 
          src={profile} 
          alt="Profile" 
          style={{ width: "120px", borderRadius: "50%", marginBottom: "15px" }}
        />
        <p>
          Hi, I’m Nikita — a developer focused on building simple, clean, and practical applications that help make everyday tasks easier to manage.
        </p>

        <p>
          I created this Daily Task Tracker to bring more structure and clarity into daily routines. Many tools today feel overwhelming, so I wanted to design something minimal, intuitive, and easy to use.
        </p>
      </div>

      <div className="about-card">
        <h2>Feedback</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Share your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />

        <br /><br />

        <button onClick={handleSubmit}>Submit</button>

        {submitted && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Feedback submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default About;