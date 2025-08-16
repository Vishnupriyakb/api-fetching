var A, l, b;
const res = document.getElementById("result");
const text = document.createElement("h4");

function dataa(event){
    if(event.target.name=="length"){
        l=event.target.value;
    }
    else if(event.target.name=="breadth"){
        b=event.target.value;
    }
}
function calculate(){
    A=l*b;
    text.innerHTML="Result is "+A;
}
res.appendChild(text);