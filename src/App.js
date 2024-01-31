import React from "react";
import "./App.css";
import Video from "./video.mp4";

function App() {
  return (
    
    <div className="App">
        <video controls autostart="true" src={Video} type="video/mp4" />
        <div><p>Imaginarium</p></div>
    </div>
  );
}

export default App; 