import React from "react";
import Video from "./video.mp4";
import "./App.css";

function App() {
  return (
    
    <div className="App">
        <video controls autostart="true" src={Video} type="video/mp4" />
    </div>
  );
}

export default App; 