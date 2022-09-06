let counter = 0;

function onClickButton(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку" + counter;
    el.style.background = "gray";
     el.style.color = "white";
}

function onInput(el){
    if (el.value == "Hello")
    alert("И тебе привет, друг");
    console.log(el.value);
}