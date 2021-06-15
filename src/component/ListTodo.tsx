import React from 'react'
import classes from './ListTodo.module.css'
const  ListTodo:React.FC<{text:string;removeTodo : ()=>void}>=(props)=> {
    return <li className={classes.item} onClick={props.removeTodo}>{props.text}</li>
        
    
}
export default ListTodo
