import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Languages } from "./pages/Languages";
import { Recipes } from "./pages/Recipes";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Books } from "./pages/Books";
import { Coaching } from "./pages/Coaching";
import { CoachingTools } from "./pages/CoachingTools";
import { Values } from "./pages/Values";
import { Valeurs } from "./pages/Valeurs";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/recipes/*" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/books" element={<Books />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/coachingtools" element={<CoachingTools />} />
          <Route path="/values" element={<Values />} />
          <Route path="/valeurs" element={<Valeurs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
