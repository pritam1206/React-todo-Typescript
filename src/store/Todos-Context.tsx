import React, { useState } from 'react'
import Todo from '../component/modules/todo'
type ContextObject = {
        items:Todo[],
        addTodo:(text:string) =>void;
        removeTodo:(id:string) =>void;
    
}
 export const  TodosContext=React.createContext<ContextObject>({
     items:[],
     addTodo:()=>{
     },
     removeTodo:()=>{}
 })
    

const TodoConextProvider :React.FC=(props)=>{
    const [todos, setTodos] = useState<Todo []>([]);
  
  const newTodo=(text:string) =>{
 console.log('newTodo',text);
 const newTodo =new Todo(text)

 setTodos((prev)=>{
   return prev.concat(newTodo)
 })
  }
  const removeTodoHnadler=(text:string) =>{
    setTodos((prev)=>{
      return prev.filter(item =>item.id!== text)
    })
  }
  const contextValue:ContextObject=
{
      items:todos,
      addTodo:newTodo,
      removeTodo:removeTodoHnadler
  }

return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodoConextProvider