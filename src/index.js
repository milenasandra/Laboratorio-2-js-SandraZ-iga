import './styles.css'
import { Todo, TodoList }  from './classes/index'
import {crearTodoHtml} from './js/componentes.js'

export const todoList = new TodoList()

const tarea = new Todo('Aprender JavaScript')
todoList.nuevoTodo(tarea)
tarea.completado = false

console.log(todoList)
crearTodoHtml(tarea)






