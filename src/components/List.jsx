import { useContext } from "react";
import { userContext } from "../../context";
import ToDoItem from "./ToDoItem";

const List = () => {
    const {todos,currentFilter} = useContext(userContext)

    let filtered = todos
    if(currentFilter === "active") {
        filtered = todos.filter(todo => todo.status === "in progress")
    }else if(currentFilter === "completed") {
        filtered = todos.filter(todo => todo.status === "completed")
    }
    
    return (
        <div className="list">
            {
                filtered.map((todo,index) => 
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                    />
                )
            }
        </div>
    );
}

export default List;