import React from 'react';
import './App.css';
import Markdown from "marked-react";



function App() {
  
  const [text, setText] = React.useState("");

  const MarkdownComponent = () => {
    
    return <Markdown>{text}</Markdown>;
  };
  
  return (
    <div className="App">
      
        <div className="text-center px-4">
        <h1 className="p-4">My Markdown Previewer</h1>
        <textarea 
        name="text" 
        id="text" 
        rows="10" 
        className="textarea"
        value={text}
        onChange= { (e => setText(e.target.value))}
        ></textarea>
        <h3 className="mt-3 ">OUTPUT</h3>
        <div className="preview">
        <MarkdownComponent />
        </div>
        </div>
        
      </div>
    
  );
}

export default App;
