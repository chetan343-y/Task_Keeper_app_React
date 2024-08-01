import "./styles.css";
import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";
import CreateArea from "./CreateArea";

function createNote(notes) {
  return (
    <div>
      <Note title={notes.title} content={notes.content} />
    </div>
  );
}
export default function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {notes.map(createNote)} */}
      {/* <Note key={1} title="Note title" content="None content" /> */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
