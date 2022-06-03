import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/ToDo.js";
import { sandboxApi } from "./AxiosService.js";

class ApiToDoService {
  async getTodos() {
    const res = await sandboxApi.get("dom/todos");
    ProxyState.todos = res.data.map((todo) => new Todo(todo));
    console.log("todos", res.data);
  }
}

export const apiToDoService = new ApiToDoService();
