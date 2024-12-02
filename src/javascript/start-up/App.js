import { Routes, Route } from "react-router-dom";

import BookStorePage from "../pages/Technical Skills/BookStorePage";
import BookStorePage2 from "../pages/Projects/BookStorePage-2"
import CampusConnect from "../pages/Projects/CampusConnect";
import Contact from "../pages/Contact/Contact";
import DerekReminderBot from "../pages/Projects/DerekReminderBot";
import Goals from "../pages/Introduction/Goals";
import Introduction from "../pages/Introduction/Introduction";
import LandingPage from "../pages/Introduction/LandingPage";
import OutsideBookStore2 from "../pages/Contact/OutsideBookStore-2";
import TechnicalSkills from "../pages/Technical Skills/TechnicalSkills";


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
