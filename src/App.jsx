import React from "react";
import Buttons from './material/Buttons'
import Icons from "./material/Icons";
import TypographyExample from "./material/TypographyExample";

function App() {
  return (
    <>
    <div>
      <Buttons />
    </div>
    <div style={{borderTop: "2px solid #000", marginTop: "20px"}}>
      <Icons />
    </div>
    <div style={{borderTop: "2px solid #000", marginTop: "20px"}}>
      <TypographyExample />
    </div>
    </>
  );
}

export default App;
