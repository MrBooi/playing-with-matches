function showRandomNumber() {
    return Math.floor( 1 + Math.random() * 9);
}

let container = document.querySelector('.display-numbers');
let numbers = [];

for(var i = 0; i < 3; i++) {
   let box = document.createElement('div');
   let num = showRandomNumber();

   if (numbers.includes(num)) {
       document.querySelector('.message').innerHTML = "Match!";
   }
   numbers.push(num);
   
   box.className = "number-box";
   box.id = num;
   box.innerHTML = num;
   container.appendChild(box);
}

var numElems = document.querySelectorAll('.number-box');
let count =0;
numElems.forEach((current) => {
   for (let i = 1; i <= 3; i++) {
        if (numElems[i].id === current.id){
            current.classList.add('match');
             numElems[i].classList.add('match');
             count++
          document.querySelector('.message').innerHTML = "Match! "+ current.id +" - "+(count+1);
        }else{
            numElems[i].classList.remove('match');
        }
   }
});


