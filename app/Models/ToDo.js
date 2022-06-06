import { ProxyState } from "../AppState.js";

export class Todo {
  constructor(data) {
    this.id = data.id;
    this.description = data.description;
    this.completed = data.completed || false;
    this.user = data.user;
  }
 
 


  get Template() {
    return /*html*/ ` 
   
        
        <div class=" px-3 col d-flex flex-row align-items-center ">
        
        <input  type="checkbox" class="form-check-input p-2 align-items-center" id="${
          this.id
        }" onclick="app.todoController.toggleChecked('${this.id}')"  ${
      this.completed ? "checked" : ""  
    }><h5 id="${this.id}" class=" todo-description px-3">${this.description}
    <h3> <span class="mdi mdi-delete selectable text-dark" style="max-height: 50px; width: 100px" onclick="app.todoController.deleteTodo('${
      this.id
    }')" title=""></span></h3>
        </h5>
        </div>
        
      
        `;
  }


}
