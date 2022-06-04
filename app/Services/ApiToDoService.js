import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/ToDo.js";


const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 8000
})
class ApiToDoService {
  async getTodos() {
    const res = await sandboxApi.get("dom/todos");
    ProxyState.todos = res.data.map((todo) => new Todo(todo));
    console.log("todos", res.data);
  }
  async postTodo(){
    let todos = ProxyState.todos
    const res = await sandboxApi.post("dom/todos", todos)
        console.log(res.data, 'hi');
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
 
       
  }
  async deleteTodos(id){
    const res = await sandboxApi.delete("dom/todos/" + id);
    ProxyState.todos = ProxyState.todos.filter(todo => todo.id !== id);
    console.log("deleted", res.data);
  }
 
async editTodo(todoList){
  const res = await sandboxApi.put("dom/todos/" + todoList.id, todoList)
  const todo = new Todo(res.data)
  
  
}
}

export const apiToDoService = new ApiToDoService();
