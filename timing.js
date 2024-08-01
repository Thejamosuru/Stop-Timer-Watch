let i =0;
let j = 0;
let k = 0;

let pause;
//------Start------
let starting = document.getElementsByClassName("start")[0];
const starttimer = ()=>{
    pause = setInterval(()=>{
        i++;
        document.getElementById('sec').innerHTML = `${i}`
        document.getElementById('min').innerHTML = `${j}`
        document.getElementById('hrs').innerHTML = `${k}`
        if(i>58){
            i=-1;
            j++
            if(j>58){
                j=-1;
                k++
            }
        }
    },1000)
    
}
starting.addEventListener("click",starttimer);

//-----Reset-----
let Reset = document.getElementsByClassName("reset")[0];
let resettimer = ()=>{
    i=0;
    j=0;
    k=0;
    document.getElementById('sec').innerHTML= `${i}`;
    document.getElementById('min').innerHTML = `${j}`;
    document.getElementById('hrs').innerHTML = `${k}`;
}
Reset.addEventListener("click",resettimer);

//-----Reverse-----
let stop = document.getElementsByClassName("stop")[0];
let pausetimer = ()=>{
    clearInterval(pause);
}
stop.addEventListener("click",pausetimer)
