import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import TaskTracker from "./pages/TaskTracker";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<TaskTracker />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;