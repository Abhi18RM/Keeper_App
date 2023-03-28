import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [wholeData, addData] = useState([]);

  function dataHandle(data) {
    addData([...wholeData, data]);
    console.log(wholeData);
  }

  function deleteNote(id) {
    addData([
      ...wholeData.filter((item, index) => {
        return index !== id;
      })
    ]);
  }

  return (
    <div>
      <Header />
      <CreateArea aData={dataHandle} />
      {wholeData.map((data, index) => (
        <Note
          key={index}
          id={index}
          title={data.title}
          content={data.content}
          dNote={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
