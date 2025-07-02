import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Languages from "./pages/Languages/Languages";
import Recipes from "./pages/Recipes/Recipes";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Books from "./pages/Books/Books";
import Coaching from "./pages/Coaching/Coaching";
import CoachingTools from "./pages/CoachingTools/CoachingTools";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/recipes/*" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/books" element={<Books />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/coachingtools" element={<CoachingTools />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
