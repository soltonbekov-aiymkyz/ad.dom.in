

let fruits = ["Limon", "Lime", "Apple", "Banana", '', '   '];

let ul = document.createElement("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

document.body.append(ul);
for (let i in fruits) {
    let li = returnListItem(fruits[i]);
    if (li) {
        ul.append(li);
    }
}

button.addEventListener("click", function () {
    let li = returnListItem(input.value);
    if (li) {
        input.value = '';
        ul.append(li);
    }
});

function returnListItem(text = '') {
    if (!text.trim()) {
        return false;
    }

    let li = document.createElement("li");
    let button = document.createElement("button");
    let span = document.createElement("span");

    button.innerText = "-";
    span.innerText = text;

    button.addEventListener("click", function () {
        li.remove();
    });
    span.addEventListener("click", function () {
        span.classList.toggle('done');
    });

    li.append(span);
    li.append(button);
    
    return li;
}
