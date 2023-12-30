import React from "react";
import {
  Hero,
  Navbar,
  Companies,
  Courses,
  Achievement,
  Categories,
  Feedback,
  CTA,
  Footer,
} from "./components";
import "./App.css";
import { Team } from "./components/Team";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      {/* <Categories /> */}
      <Feedback />
      <CTA />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
