const input = document.getElementById('input');
const button = document.getElementById('button');
const result = document.getElementById('result');
const priority = document.getElementById('priority')

button.addEventListener('click', (e) => {
    if(input.value === "")
        return;
    createElement(input.value)
    input.value = ""
    })

function createElement(value) {
    const li = document.createElement('li')
    const button = document.createElement('button');
    const checkbox = document.createElement('input');

    li.textContent = value;
    button.textContent = 'delete';
    li.appendChild(button);
    li.appendChild(checkbox);
    checkbox.setAttribute("type", "checkbox")

    if (priority.value === 'low') {
        li.style.color = 'green'
    } else if (priority.value === 'middle') {
        li.style.color = 'orange'
    } else if (priority.value === 'high') {
        li.style.color = 'red'
    }

    button.addEventListener('click', (e) => {
        if (li.style.textDecoration === "line-through") {
            result.removeChild(li)
        } else {
            alert('Please complete the item first')
        }
    })

    checkbox.onclick = function() {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none"
        } else  {
            li.style.textDecoration = "line-through"
        }
    }

    result.appendChild(li)
}
