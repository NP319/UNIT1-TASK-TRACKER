// Import routing components from React Router
import { Routes, Route } from "react-router-dom";

// Import reusable components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import TaskTracker from "./pages/TaskTracker";
import About from "./pages/About";


function App() {
  return (
     // Main app container (used for layout styling in CSS)
    <div className="app">
      <Header />  {/* Top navigation bar (visible on all pages) */}

      <main className="main-content">   {/* Main content area where pages are rendered */}
        <Routes>  {/* Defines application routes */}
          <Route path="/" element={<Home />} />    {/* Home page route */}
          <Route path="/tracker" element={<TaskTracker />} />    {/* Task Tracker page route */}
          <Route path="/about" element={<About />} />     {/* About page route */}
        </Routes>
      </main>

      <Footer />     {/* Footer displayed on all pages */}
    </div>
  );
}

// Export App component as default
export default App;