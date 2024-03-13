import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, updateSearchTerm } from '../redux/actions';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

const Todo = () => {
  const todos = useSelector((state)=>state.todos)
  const filter = useSelector((state)=>state.filter)
  const dispatch = useDispatch()
  const [newTodoText, setNewTodoText] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const  handleAddTodo = (text) => {
    dispatch(addTodo(text))
  }

  const handleAddTodoClick = () => {
    if(newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim())
      setNewTodoText("")
    }
  }

  const handleSearchChange = (value) => {
     setSearchTerm(value)
     dispatch(updateSearchTerm(value))
  }
  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>PERSONAL TODO APP</h2>

      {/* input text and btn */}
      <div className='flex items-center mb-4'>
        <input
         value={newTodoText} 
         onChange={(e)=>setNewTodoText(e.target.value)}
         type="text"
         id='addTodoInput'
         placeholder='Add Todo' 
         className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
        />
        <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none' onClick={handleAddTodoClick}><FaPlus size={20}/></button>
      </div>

      {/* filter and search */}
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
      <FilterButton/>
       <div className='flex items-center mb-4'> 
        <input value={searchTerm} onChange={(e)=>handleSearchChange(e.target.value)} type="text"  id='searchTerm' placeholder='Search Todo' 
          className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
        />
        <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'>
          <FaSearch size={20}/>
        </button>
       </div>
       </div>
       <TodoList/>
    </div>
  )
}

export default Todo
