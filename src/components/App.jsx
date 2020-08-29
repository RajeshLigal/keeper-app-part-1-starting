import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });
  const [postContent, setPostContent] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  function handleClick(event) {
    setPostContent((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <CreateArea
        title={inputText.title}
        content={inputText.content}
        inputChange={handleChange}
        submit={handleClick}
      />
      {postContent.map((noteItem) => (
        <Note key={1} title={noteItem.title} content={noteItem.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
