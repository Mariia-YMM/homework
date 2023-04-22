const button = document.getElementById('button');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const text = document.getElementById("text");
let i = 16;
button.onclick = function() {
    if (text.style.display === "none") {
        text.style.display = "block";
        button.innerText = 'Hide text';
    } else {
        text.style.display = "none";
        button.innerText = 'Show text'
    }
}

button1.onclick = function() {
        text.style.fontSize = `${++i}px`;
}

button2.onclick = function() {
    text.style.fontSize = `${--i}px`;
}