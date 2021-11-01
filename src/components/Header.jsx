import React from 'react';

//Estilos
import "../styles/Header.css";

const Header = ({handleShowAllList, handleShowCompletedList, handleShowUncompletedList}) => {
    return (
        <header>
            <h4 className="logo">ToDo List</h4>
                <div>
                    <button onClick={handleShowAllList}>Show all tasks</button>
                    <button onClick={handleShowCompletedList}>Show completed tasks</button>
                    <button onClick={handleShowUncompletedList}>Show uncompleted tasks</button>
                </div>
           
        </header>
    );
};

export default Header;