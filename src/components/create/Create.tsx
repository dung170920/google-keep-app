import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";
import React, { useState } from "react";
import { NoteModel } from "../../model/NoteModel";
import "./Create.css";

interface Props {
  onAdd: (note: NoteModel) => void;
}

const Create = ({ onAdd }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleExpand() {
    setIsExpanded(true);
  }

  function handleChange(e: any) {
    setNote((prevNote) => ({
      ...prevNote,
      [e.target.name]: e.target.value,
    }));
  }

  function submitNote(e: any) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setIsExpanded(false);
  }

  return (
    <div>
      <form className="create-form">
        {isExpanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          id="content"
          placeholder="Take a note"
          onClick={handleExpand}
          onChange={handleChange}
          rows={isExpanded ? 3 : 1}
          value={note.content}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default Create;
