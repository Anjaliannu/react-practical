import { useState } from "react";
import "./App.css"; 
import SignUp from "./components/signUp.js";
import TalentSignUp from "./components/talentSignUp";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          FAN SIGNUP
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          TALENT SIGNUP
        </button>
       
      </div>

      <div className="">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         <SignUp />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <TalentSignUp />
        </div>

       
      </div>
    </div>
  );
}

export default Tabs;
