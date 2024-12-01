import { Routes, Route } from "react-router-dom";

import BookStorePage from "../pages/BookStorePage";
import BookStorePage2 from "../pages/BookStorePage-2"
import CampusConnect from "../pages/CampusConnect";
import Contact from "../pages/Contact";
import DerekReminderBot from "../pages/DerekReminderBot";
import Goals from "../pages/Goals";
import Introduction from "../pages/Introduction";
import LandingPage from "../pages/LandingPage";
import OutsideBookStore2 from "../pages/OutsideBookStore-2";
import TechnicalSkills from "../pages/TechnicalSkills";


export default function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/introduction" element={<Introduction/>}/>
        <Route path="/goals" element={<Goals/>}/>
        <Route path="/bookstore" element={<BookStorePage/>}/>
        <Route path="/technicalskills" element={<TechnicalSkills/>}/>
        <Route path="/bookstore-2" element={<BookStorePage2/>}/>
        <Route path="/projects" element={<CampusConnect/>}/>
        <Route path="/projects-2" element={<DerekReminderBot/>}/>
        <Route path="/outsidebookstore-2" element={<OutsideBookStore2/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
  );
}
