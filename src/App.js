import "./index.css";
import React from "react";
import { CONSTANTS } from "./Constants";
import Header from "./Components/01.Header/Navbar";
import Guide from "./Components/02.Guide/Guide";
import LearnMore from "./Components/03.LearnMore/LearnMore";
import CoursesSuggestion from "./Components/04.CoursesSuggestion/CoursesSuggestion";
import About from "./Components/05.About/About";
import Footer from "./Components/06.Footer/Footer";
export default function App() {
  return (
    <div className="App">
      <Header data={CONSTANTS.coursesList} />
      <Guide />
      <LearnMore data={CONSTANTS.learnMore} />
      <CoursesSuggestion
        leftBlockData={CONSTANTS.coursesSuggestionLeftBlock}
        rightBlockData={CONSTANTS.coursesSuggestionRightBlock}
      />
      <About data={CONSTANTS.aboutSection} />
      <Footer
        dataClickable={CONSTANTS.footerSectionClickable}
        dataNonClickable={CONSTANTS.footerSectionNonClickable}
        dataAccessabilityFirstRow={CONSTANTS.footerAccessabilityFirstRow}
        dataAccessabilitySecondRow={CONSTANTS.footerAccessabilitySecondRow}
      />
    </div>
  );
}
