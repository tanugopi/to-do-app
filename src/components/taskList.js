import React from "react";

function taskList(props) {
    return (
        <div className="task-list">
            <h3 className="task-list-header">Task List</h3>
            {props.taskList.length === 0 ? (
                <p className="no-task">No Task added in the list</p>
            ) : (
                props.taskList.map((task, index) => {
                    return (
                        <div className="taskDiv" key={index}>
                            <p className="taskName">
                                {task}
                            </p>
                            <button onClick={() => props.doneClick(index)}>Done</button>
                            <button>Edit</button>
                            <button onClick={() => props.deleteClick("taskList", index)}>Delete</button>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default taskList;
