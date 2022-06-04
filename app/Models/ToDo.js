export class Todo {
  constructor(data) {
    this.id = data.id;
    this.description = data.description;
    this.completed = data.completed;
  }

  get Template() {
    return /*html*/ ` 
        <div class="todo-item d-flex justify-content-between align-items-center pb-2 flex-row col card-body bg-secondary " >
        
        <div class=" px-3 d-flex flex-row ">
        
        <input  type="checkbox" class="form-check-input p-3 d-flex align-items-center" id="${
          this.id
        }" onclick="app.todoController.toggleChecked('${this.id}')" ${
      this.completed ?  "" : "checked" 
    }><h3 id="${this.id}" class="d-flex flex-row todo-description px-3">${this.description}
        </h3>
        </div>
        <div>
        <h1> <span class="mdi mdi-delete selectable text-dark px-4" style="max-height: 50px; width: 100px" onclick="app.todoController.deleteTodo('${
          this.id
        }')" title=""></span></h1>
        </div>
        </div>
        `;
  }
}
