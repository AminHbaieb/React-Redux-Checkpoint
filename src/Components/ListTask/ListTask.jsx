import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import "./ListTask.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function ListTask() {
    const todos = useSelector((state) => state.todosReducer.todos);
    /* const [filter, setFilter] = useState(todos);
    const handleFilter = setDoneTasks(...todos.filter((task)=>task.isDone===true))) 
    */
    useEffect(() => setFilter(todos), [todos]);

    const [filter, setFilter] = useState(todos);
    const showAreDoneClick = () => {
        setFilter(todos.filter((task) => task.isDone === true));
    };
    const showUndoneClick = () => {
        setFilter(todos.filter((toDo) => toDo.isDone === false));
    };
    const showAllClick = () => {
        setFilter([...todos]);
    };
    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                {/* <Link to={`/todos`}> */}
                {/* <Button variant="outline-success" onMouseOver={()=>handleFilter())} onClick={}> */}
                <Button variant="outline-success" onClick={showAreDoneClick}>
                    Show Done
                </Button>
                {/* </Link> */}
                <Button variant="outline-danger" onClick={showUndoneClick}>
                    {" "}
                    Show Not Done
                </Button>
                <Button variant="info" onClick={showAllClick}>
                    Remove All Filters
                </Button>
            </div>
            {filter.map((task, index) => (
                <Task toDo_task={task} index={index} />
            ))}
        </div>
    );
}

export default ListTask;
