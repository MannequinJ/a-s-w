import "./index.css";
import React from "react";
import { API } from "./Constants";
import Header from "./Components/01.Header/Header";
import Guide from "./Components/02.Guide/Guide";
import LearnMore from "./Components/03.LearnMore/LearnMore";
import CourseSuggestions from "./Components/04.CourseSuggestions/CourseSuggestions";
import About from "./Components/05.About/About";
import Footer from "./Components/06.Footer/Footer";
export default function App() {
  return (
    <div className="App">
      <Header data={API.guideAPI} />
      <Guide />
      <LearnMore />
      <CourseSuggestions />
      <About />
      <Footer />
    </div>
  );
}
