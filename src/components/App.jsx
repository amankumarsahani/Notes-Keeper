import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./createNote";
import Note from "./Note";

function App() {
  const [notes,setNotes]=useState([]);

  function addNote(newNote){
    setNotes(preNotes => {
      return [...preNotes, newNote];
    });
  }
  
  function deleteNote(id){
    setNotes(preNotes => {return preNotes.filter((noteItem,index)=>{return index!==id;
    });
  });
}

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote}/>
      <div>
      
    </div>
      {notes.map((note,index) => 
        <Note key={index} id={index} onDel={deleteNote} title={note.title} content={note.content} />
      )}
      <Footer />
    </div>
  );
}

export default App;
