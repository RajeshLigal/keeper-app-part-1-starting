import React, { useState } from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input
          onChange={props.inputChange}
          name="title"
          placeholder="Title"
          value={props.title}
        />
        <textarea
          onChange={props.inputChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
