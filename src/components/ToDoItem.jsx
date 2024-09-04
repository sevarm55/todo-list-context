import axios from "axios";
import { useContext } from "react";
import { userContext } from "../../context";

const ToDoItem = ({todo,index}) => {

    const {onDelete,onUpdateStatus} = useContext(userContext)
    
    return (
        <div className={`todoItem ${todo.status === "completed" ? 'done' : ''}`}>
			<div className="items">
                {/* <span>{index + 1} .</span> */}
                {
                    todo.status === 'in progress'
                    ? <img src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png" />
                    : todo.status === "unstarted"
                    ? <img src="https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png" />
                    : <img src="https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png" />
                }
				<p>{todo.text}</p>

			</div>
			<div className="actions">
                <select 
                    className="select"
                    value={todo.status}
                    onChange={e => onUpdateStatus(todo.id, e.target.value)}
                >
                    <option>in progress</option>
                    <option>unstarted</option>
                    <option>completed</option>
                </select>
              
				<button onClick={() => onDelete(todo.id)}>x</button>
			</div>
		</div>
    );
}

export default ToDoItem;