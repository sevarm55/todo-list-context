import AddToDo from "./AddToDo";
import List from "./List";
import ToDoFilter from "./ToDoFilter";

const ToDoList = () => {
    return (
        <div className="todolist">
            <AddToDo />
            <ToDoFilter />
            <List />
        </div>
    );
}

export default ToDoList;