import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/ToDo.js";

class MyToDoService{
    deleteTodo(id){
        ProxyState.myTodos= ProxyState.myTodos.filter (todo => todo.id !==id)
    }
    addTodo(todos){
        let todo = new Todo(todos)
        ProxyState.myTodos=[...ProxyState.myTodos, todo]
    }
    toggleChecked(id) {
        ProxyState.myTodos = ProxyState.myTodos.map( todo => { if (todo.id == id) {todo.completed = !todo.completed}
        return todo} )
        
    }

}
export const myToDoService = new MyToDoService();