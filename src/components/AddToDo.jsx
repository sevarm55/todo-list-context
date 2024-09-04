import { useContext } from "react";
import { userContext } from "../../context";
import axios from "axios";

const AddToDo = () => {

    const {text,setText,error,setError,addTodo} = useContext(userContext)

    const handlerSubmit = e => {
        e.preventDefault()
        if(!text.trim()) {
            return setError("This field cannot be empty")
        }

        axios
        .post("http://localhost:3004/todos", {text, status: "unstarted"})
        .then(res => {
            addTodo(res.data)
        })
        
        setText("")
        setError("")
    }
    
    
    return (
        <form onSubmit={handlerSubmit} className="form">
		<div>
			<h1>
				TODO LIST 🗒️
			</h1>
		</div>
		<div className="form_block">
			<input 
				type="text"
                onChange={(e) => {
                    setText(e.target.value)
                    setError("")
                }}
                value={text}
				placeholder={error || "+  Add a new to-do"}
				className={error ? "error" : ''}
				/>
			<button >
				+
			</button>
		</div>
	</form>
    );
}

export default AddToDo;