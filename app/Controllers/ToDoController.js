import { ProxyState } from "../AppState.js";
import { apiToDoService } from "../Services/ApiToDoService.js";
import { myToDoService } from "../Services/MyToDoService.js";
import { load, save } from "../Utils/Storage.js";

import { Todo } from "../Models/ToDo.js";
import { Pop } from "../Utils/Pop.js";

function _drawTodos() {
  let template = "";

  ProxyState.myTodos.forEach((t) => (template += t.Template));

  document.getElementById("todos").innerHTML = template;
}

export class ToDoController {
  constructor() {
    ProxyState.on("myTodos", save);
    ProxyState.on("myTodos", _drawTodos);

    this.getTodos();
    load();

    _drawTodos();
  }

  async getTodos() {
    try {
      await apiToDoService.getTodos();
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, "error");
    }
  }

  async addTodo(todoId) {
    try {
      window.event.preventDefault();
      /**@type {HTMLFormElement} */
      // @ts-ignore

      await apiToDoService.postTodo();
    } catch (error) {
      Pop.toast(error.message, "error");
    }
    _drawTodos();
  }
  toggleChecked(id) {
    myToDoService.toggleChecked(id);

    ProxyState.myTodos.forEach((todo) => {
      if (todo.id == id) {
        apiToDoService.editTodo({
          id: todo.id,
          completed: todo.completed,
          description: todo.description,
          user: todo.user,
        });
      }
    });
  }
  async deleteTodo(id) {
    if (await Pop.confirm()) {
      apiToDoService.deleteTodos(id);
      Pop.toast("deleted", "success");
    }
  }
}
