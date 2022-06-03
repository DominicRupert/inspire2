import { ProxyState } from "../AppState.js";
import { apiToDoService } from "../Services/ApiToDoService.js";
import {Todo} from "../Models/ToDo.js"


function _drawTodos(){
    let template = ""
    
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById("todos").innerHTML = template
}
export class ToDoController{
    constructor(){
        ProxyState.on("todos", _drawTodos);
        apiToDoService.getTodos()
        ProxyState.todos = ProxyState.todos
        _drawTodos()
    }
}