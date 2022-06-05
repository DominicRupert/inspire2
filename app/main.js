// import { ValuesController } from "./Controllers/ValuesController.js";
import {ImageApiController} from "./Controllers/ImageApiController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import {ClockController} from "./Controllers/ClockController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { ToDoController } from "./Controllers/ToDoController.js";



class App {
  // valuesController = new ValuesController();
  imageApiController = new ImageApiController();
  quoteController = new QuoteController();
  clockController = new ClockController();
  weatherController = new WeatherController();
  todoController = new ToDoController();
}

window["app"] = new App();
