import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateNote(props) {
  const[isExpended,setExpended]=useState(false);
    const[note,setNote]=useState({
        title:"",
        content:""
      });

    function handleChange(event){
        const {name,value}=event.target;
        setNote((preValue) => {
            return {...preValue,
            [name]:value}
        })}
        
    function submitNote(event){
        props.onAdd(note);
        setNote({title:"",content:""});
        event.preventDefault();
    }

    function expand(){
      setExpended(true);
    }
    
  return (
    <div>
      <form className="create-note">
        {isExpended && <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />}
        <textarea name="content" 
        onClick={expand} 
        onChange={handleChange} 
        value={note.content} placeholder="Take a note..." 
        rows={isExpended? 3 : 1} />
        <Zoom in={isExpended}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
