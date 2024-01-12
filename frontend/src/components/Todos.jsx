import { CreateTodo } from "./CreateTodo";

// We are sending {todo} which is sent as props here , todo is a state varibale .

/* todo = [    // why todo is arry , why it can't be a object only , as it contains only one object inside the array
    {
        title : "goto gym",
        description: "goto gym @7pm"
    }
] */

export function Todos({todos}){
    return(
        <div>
            {
                todos.map(function (todo){
                    return (
                        <div>
                            <h1>{todo.title}</h1>
                            <h3>{todo.description}</h3>
                            <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                            </div>
                    )
                })
            }
        </div>
    )
}