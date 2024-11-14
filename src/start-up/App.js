import ReactFullpage from "@fullpage/react-fullpage";

import AboutMe from "../pages/AboutMe";
import MainPage from "../pages/MainPage";

export default function App() {
  return (
    <ReactFullpage
      scrollingSpeed={700} 
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
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
