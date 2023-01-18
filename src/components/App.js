import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function AddNote(note) {
  return <Note title={note.title} content={note.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {Notes.map(AddNote)}
      <Footer />
    </div>
  );
}

export default App;
