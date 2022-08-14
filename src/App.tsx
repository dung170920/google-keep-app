import React, { useState } from "react";
import Create from "./components/create/Create";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Note from "./components/note/Note";
import { NoteModel } from "./model/NoteModel";

function App() {
  const [notes, setNotes] = useState<Array<NoteModel>>([]);

  function addNote(newNotes: NoteModel) {
    setNotes((prevNotes) => [...prevNotes, newNotes]);
  }

  function deleteNote(id: Number) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <Create onAdd={addNote} />
      {notes.map((note, index) => (
        <Note note={note} key={index} onDelete={deleteNote} id={index} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
