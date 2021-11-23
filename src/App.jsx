import React from "react";
import Buttons from './material/Buttons'
import Icons from "./material/Icons";

function App() {
  return (
    <>
    <div>
      <Buttons />
    </div>
    <div style={{borderTop: "2px solid #000", marginTop: "20px"}}>
      <Icons />
    </div>
    </>
  );
}

export default App;
