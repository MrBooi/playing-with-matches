function showRandomNumber() {
    return Math.floor( 1 + Math.random() * 9);
}

let container = document.querySelector('.container');

for(var i = 0; i < 3; i++) {
   let box = document.createElement('div');
   box.className = "number-box";
   box.innerHTML = showRandomNumber();
   container.appendChild(box);
}