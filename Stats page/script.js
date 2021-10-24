let number = document.getElementById("number");
let counter = 0;
setInterval(() =>{
    if(counter === 65){
        clearInterval();
    }
    else{

        counter +=1;
        number.innerHTML = counter + "%";
    }
}, 30);
let usedNumber = document.getElementById("calNumber");
let counter2 = 0;
setInterval(() =>{
    if(counter2 === 90){
        clearInterval();
    }
    else{

        counter2 +=1;
        usedNumber.innerHTML = counter2 + "%";
    }
}, 35);
let stepNumber = document.getElementById("stepNumber");
let counter3 = 0;
setInterval(() =>{
    if(counter3 === 2380){
        clearInterval();
    }
    else{

        counter3 +=10;
        stepNumber.innerHTML = counter3;
    }
}, 12);
let excersizeNumber = document.getElementById("excersizeNumber");
let counter4 = 0;
setInterval(() =>{
    if(counter4 === 60){
        clearInterval();
    }
    else{

        counter4 +=1;
        excersizeNumber.innerHTML = counter4;
    }
}, 45);