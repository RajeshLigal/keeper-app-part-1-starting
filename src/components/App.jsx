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
    //needed to both object set to null to work properly
    setInputText({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function deleteItem(id) {
    setPostContent((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
      {postContent.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          delete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
