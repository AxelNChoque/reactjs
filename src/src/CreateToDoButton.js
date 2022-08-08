import React from "react";
import './CreateTodoButton.css'

const CreateTodoButton = () => {
    const onClickButton = () => {
        alert('Click');
    }
    return (
        <button
        className="CreateTodoButton"
        onClick={onClickButton}
        >Cargar</button>
    );
};

export { CreateTodoButton };