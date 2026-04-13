// Import React hook for managing state
import { useState } from "react";

// Import profile image
import profile from "../assets/profile.jpeg";

function About() {
  const [name, setName] = useState("");   // State to store user input (name)
  const [message, setMessage] = useState("");    // State to store feedback message
  const [submitted, setSubmitted] = useState(false);    // State to track if feedback was submitted

  // Function to handle form submission
  const handleSubmit = () => {
    if (name.trim() === "" || message.trim() === "") return;    // Prevent submission if fields are empty

    // Mark as submitted and reset inputs
    setSubmitted(true);
    setName("");
    setMessage("");
  };

  return (
    <div className="container">
      <h1>About Me</h1>   {/* Page title */}

{/* ABOUT SECTION */}
{/* Displays profile and description */}
      <div className="about-card">
        <h2>About Me</h2>

{/* Profile image */}
        <img 
          src={profile} 
          alt="Profile" 
          style={{ width: "120px", borderRadius: "50%", marginBottom: "15px" }}
        />

 {/* Personal description */}
        <p>
          Hi, I’m Nikita — a developer focused on building simple, clean, and practical applications that help make everyday tasks easier to manage.
        </p>

        <p>
          I created this Daily Task Tracker to bring more structure and clarity into daily routines. Many tools today feel overwhelming, so I wanted to design something minimal, intuitive, and easy to use.
        </p>
      </div>

{/* FEEDBACK SECTION */}
{/* Allows users to submit feedback */}
      <div className="about-card">
        <h2>Feedback</h2>

 {/* Name input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

{/* Message textarea */}
        <textarea
          placeholder="Share your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {                           {/* Submit on Enter key press */}
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />

        <br /><br />

        <button onClick={handleSubmit}>Submit</button>    

          {/* Success message after submission */}
        {submitted && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Feedback submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}

// Export About component
export default About;