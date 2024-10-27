import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";
import React from "react";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={(e) => setOpenModal(!openModal)}>
      +
    </button>
  );
}

export { CreateTodoButton };
