import { ProxyState } from "../AppState.js";
import { apiToDoService } from "../Services/ApiToDoService.js";
import { myToDoService } from "../Services/MyToDoService.js";
import { load, save } from "../Utils/Storage.js";

import { Todo } from "../Models/ToDo.js";
import { Pop } from "../Utils/Pop.js";
function _drawMyTodos() {
    let template = "";
    
    ProxyState.myTodos.forEach((t) => (template += t.Template));
  
    document.getElementById("todos").innerHTML = template;
  }


