import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/ToDo.js";
import { sandboxApi } from "./AxiosService.js";
sandboxApi


class ApiToDoService {
  async getTodos() {
    const res = await sandboxApi.get("dom/todos");
    ProxyState.todos = res.data.map((todo) => new Todo(todo));
    console.log("todos", res.data);

  }
  async postTodo(data){
    let todoList = ProxyState.todos
    const res = await sandboxApi.post("dom/todos", data)
     
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
        console.log('todo', todoList);
 
       
  }
  async deleteTodos(id){
    const res = await sandboxApi.delete("dom/todos/" + id);
    ProxyState.todos = ProxyState.todos.filter(todo => todo.id !== id);
    console.log("deleted", res.data);
  }
 

async toggleChecked(id) {
  let todo = ProxyState.todos.find(todo => todo.id == id)
  todo.completed = !todo.completed
  const res = await sandboxApi.put('dom/todos/' + id, todo)
 
  console.log("completed", res.data);
  ProxyState.todos = ProxyState.todos
}
}

export const apiToDoService = new ApiToDoService();
