import React, { useState,useRef, useEffect ,useContext} from 'react'
import { TodosContext} from '../store/Todos-Context'

import classes from  './NewTodo.module.css'
const  NewTodo:React.FC=(props) =>{
    

    const ctx= useContext(TodosContext)
    const todTextRef=useRef<HTMLInputElement>(null)
    useEffect(() => {
        return () => {
            todTextRef.current?.focus()
        }
    }, [])
    const submitHandler =(event:React.FormEvent)=>{
        event.preventDefault();
        const enterText =todTextRef.current!.value
        if(!enterText) return 
       
        ctx.addTodo(enterText)
    }
    return (
        <form  className={classes.form}onSubmit={submitHandler}>
            <label className={classes.label}>Todo text</label>
            <input  className={classes.input}type="text" ref={todTextRef}/>
            <button  className={classes.button}>Add Todo</button>
        </form>
    )
}
export default NewTodo
