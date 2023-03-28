import React, { useState } from "react";

function CreateArea(props) {
  const [inputData, setData] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    setData({ ...inputData, [event.target.name]: event.target.value });
    console.log(inputData);
    console.log(0);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    console.log("form submitted ✅");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button
          onClick={() => {
            props.aData(inputData);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
