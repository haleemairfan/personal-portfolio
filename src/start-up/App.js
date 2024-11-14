import Introduction from "../pages/Introduction";
import LandingPage from "../pages/LandingPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/introduction" element={<Introduction/>}/>
    </Routes>
  );
}
