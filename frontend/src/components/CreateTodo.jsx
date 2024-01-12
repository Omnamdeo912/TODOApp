import { useState } from "react"
export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return(
        <div>
            <input style ={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="title" onChange={(e)=>{
                setTitle(e.target.value);
            }}/> <br/>
            <input style ={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="description" onChange={(e)=>{
                setDescription(e.target.value);
            }}/><br/>

            <button style ={{
                padding: 10,
                margin: 10
            }} onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({                                        // you have to stringify the body only then you can send the req.
                        title: title, 
                        description: description                                            // 3 ways to get data here: 
                    }),                                                                      //1) document.getElementbyId()  (2) use loacal state variables   (3) react-query
                    headers: {                                                                //  |_> then why useing react     |-> will cause too much rerender
                        "Content-type": "application/json",
                        // "contentLength": JSON.stringify(body).length.toString()

                    }                                                        
                })
                .then(async function(res){
                    const json = await res.json();
                    alert("todo added")
                })                                                           
            }}>Add Todo</button>
        </div>
    )
}