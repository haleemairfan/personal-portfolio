import { Routes, Route } from "react-router-dom";

import BookStorePage from "../pages/BookStorePage";
import Goals from "../pages/Goals";
import Introduction from "../pages/Introduction";
import LandingPage from "../pages/LandingPage";
import TechnicalSkills from "../pages/TechnicalSkills";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/goals" element={<Goals/>}/>
        <Route path="/bookstore" element={<BookStorePage/>}/>
        <Route path="/technicalskills" element={<TechnicalSkills/>}/>
      </Routes>
  );
}
