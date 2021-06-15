import React from 'react';
import './App.css';
import {Todos} from './component/Todos'
import NewTodo from './component/NewTodo';
import TodoConextProvider from './store/Todos-Context';

function App() {
  
  return (
    <TodoConextProvider>
      <NewTodo />
      <Todos />
    </TodoConextProvider>
  );
}

export default App;
