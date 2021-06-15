import React ,{useContext}from 'react'

import ListTodo from './ListTodo'
import classes from  './Todos.module.css'
import { TodosContext} from '../store/Todos-Context'

 const  Todos:React.FC=()=> {
     const  Todosctx=useContext(TodosContext)
    return (
        <ul className={classes.todos}>
            {Todosctx.items.map(item =>(
                <ListTodo removeTodo={Todosctx.removeTodo.bind(null,item.id)} key={item.id}  text={item.text}/>
            ))}
        </ul>
    )
}
export {Todos}
