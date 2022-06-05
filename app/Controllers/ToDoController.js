import { ProxyState } from "../AppState.js";
import { apiToDoService } from "../Services/ApiToDoService.js";


import { Pop } from "../Utils/Pop.js";

function _drawTodos() {
  let template = "";

  ProxyState.todos.forEach((t) => (template += t.Template));

  document.getElementById("todos").innerHTML = template;
}

export class ToDoController {
  constructor() {
    ProxyState.on("todos", _drawTodos);
    

    this.getTodos();
    

    _drawTodos();
  }

  async getTodos() {
    try {
      await apiToDoService.getTodos();
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, "error");
    }
    _drawTodos();
  }

  async addTodo(id) {
    try {
      window.event.preventDefault();
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const form = window.event.target;
      const todoData = {
        id,
        description: form.description.value,
      };

      await apiToDoService.postTodo(todoData);
      form.reset();
    } catch (error) {
      Pop.toast(error.message, "error");
    }
  }
  async toggleChecked(id) {
    await apiToDoService.toggleChecked(id);

 
  }
  async deleteTodo(id) {
    // if (await Pop.confirm()) {
      apiToDoService.deleteTodos(id);
      // Pop.toast("deleted", "success");
    }
  }

