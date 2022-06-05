
function clock(){
    const d = new Date();
    let text = d.toDateString();
    let time = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = text;
    document.getElementById("time").innerHTML = time;
}


export class ClockController{
    constructor(){
        setInterval(clock, 1000);
    }
}

