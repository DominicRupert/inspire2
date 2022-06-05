import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";

function _drawQuote() {
  // @ts-ignore
  const quotes = ProxyState.quotes;
  let template = "";
  template += `
     <div class="col-md-4 p-3 text-center fixed-bottom">
     <div class="card  ">
     <div class="card-body ">
     <blockquote class="blockquote mb-0  ">
       <p class="quotes">${
         // @ts-ignore
         ProxyState.quotes.content
       }</p>
       <footer class="blockquote-footer hide">${
         // @ts-ignore
         ProxyState.quotes.author
       }</footer>
     </blockquote>
   </div>
   </div>
   </div>
   `;

  document.getElementById("quotes").innerHTML = template;
}

export class QuoteController {
  constructor() {
    ProxyState.on("quotes", _drawQuote);
    this.getQuotes();
  }
  async getQuotes() {
    const res = await sandboxApi.get("quotes");
    console.log("quotes", res.data);
    ProxyState.quotes = res.data;
  }
}
