import ReactFullpage from "@fullpage/react-fullpage";

import AboutMe from "../pages/AboutMe";
import MainPage from "../pages/MainPage";
import TechnicalSkills from "../pages/TechnicalSkills";

export default function App() {
  return (
    <ReactFullpage
      scrollingSpeed={1000} 
      anchors={["MainPage", "AboutMe"]}
      navigation 
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <MainPage/>
          </div>
          <div className="section">
            <AboutMe/>
          </div>
          <div className="section">
            <TechnicalSkills/>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
