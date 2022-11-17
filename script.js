let element = document.querySelector("button");

function turnButtonBeige() {
    element.style.backgroundColor = "beige";

    element.style.color = "grey"
}

function turnButtonGrey() {
    element.style.backgroundColor = "grey"

    element.style.color = "beige"
}


element.onmouseover = turnButtonBeige

element.onmouseout = turnButtonGrey
