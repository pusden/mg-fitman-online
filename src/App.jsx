import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OnlineCoaching from "./pages/OnlineCoaching";
import NutritionPlan from "./pages/NutritionPlan";
import IndividualTraining from "./pages/IndividualTraining";
import Ceník from "./pages/Ceník";
import Spoluprace from "./pages/Spolupráce";

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/online-coaching" element={<OnlineCoaching/>} />
        <Route path="/nutrition-plan" element={<NutritionPlan />} />
        <Route path="/individual-training" element={<IndividualTraining />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ceník" element={<Ceník />} />
        <Route path="/spoluprace" element={<Spoluprace />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;