import React from "react";
import { NoteModel } from "../../model/NoteModel";
import "./Note.css";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  note: NoteModel;
  onDelete: (id: Number) => void;
  id: Number;
}

const Note = ({ note, onDelete, id }: Props) => {
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={() => onDelete(id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
