import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";

export function save() {
  let data = {
    todos: ProxyState.myTodos,
  };
  window.localStorage.setItem("inspire2", JSON.stringify(data));
}

export function load() {
  let data = window.localStorage.getItem("inspire2");
  if (data) {
    let parsedData = JSON.parse(data);
    ProxyState.myTodos = parsedData.todos.map((t) => new Todo(t));
  }
}
