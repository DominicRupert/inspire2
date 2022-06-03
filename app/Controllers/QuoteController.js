import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";


function _drawQuote(){
    const quotes = ProxyState.quotes;
    let template = ''
     template +=`
     <div class="col p-3">
     <div class="card ">
     <div class="card-body ">
     <blockquote class="blockquote mb-0  ">
       <p class="quotes">${ProxyState.quotes.content}</p>
       <footer class="blockquote-footer hide">${ProxyState.quotes.author}</footer>
     </blockquote>
   </div>
   </div>
   </div>
   `
     
     
     
    
     document.getElementById("quotes").innerHTML = template;
}




export class QuoteController{
    constructor(){
        ProxyState.on('quotes', _drawQuote)
        this.getQuotes()
    }
    async getQuotes(){
        const res = await sandboxApi.get('quotes')
        console.log('quotes', res.data);
        ProxyState.quotes = res.data
    }
}