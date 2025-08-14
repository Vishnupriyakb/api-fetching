var SI, p, r, t;
const res = document.getElementById("result");

const text = document.createElement("h3");

function dataa(event) {
    if (event.target.name == "principal") {

        p = event.target.value;
    }
    else if (event.target.name == "rate") {
        r = event.target.value;
    }
    else if (event.target.name == "time") {
        t = event.target.value;
    }
}
function calculate() {
    SI = (p * r * t) / 100;
    text.innerHTML = "Result is " + SI;
}

res.append(text);
