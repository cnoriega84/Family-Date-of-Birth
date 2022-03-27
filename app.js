/* age function */

let currentYear = new Date().getFullYear()


let year = parseInt(document.getElementById("yearBorn").innerHTML)
let age = currentYear - year
document.getElementById("currentAge").innerHTML =  "<p>This year i'll be or I am 🥳</p> " + age



let year1 = parseInt(document.getElementById("yearBorn1").innerHTML)
let age1 = currentYear - year1
document.getElementById("currentAge1").innerHTML = "<p>This year i'll be or I am 🥳</p> " + age1




let year2 = parseInt(document.getElementById("yearBorn2").innerHTML)
let age2 = currentYear - year2
document.getElementById("currentAge2").innerHTML = "<p>This year i'll be or I am 🥳</p> " + age2


let year3 = parseInt(document.getElementById("yearBorn3").innerHTML)
let age3 = currentYear - year3
document.getElementById("currentAge3").innerHTML = "<p>This year i'll be or I am 🥳</p> " + age3


let year4 = parseInt(document.getElementById("yearBorn4").innerHTML)
let age4 = currentYear - year4
document.getElementById("currentAge4").innerHTML = "<p>This year i'll be or I am 🥳</p> " + age4


let year5 = parseInt(document.getElementById("yearBorn5").innerHTML)
let age5 = currentYear - year5
document.getElementById("currentAge5").innerHTML = "<p>This year i'll be or I am 🥳</p> " + age5


let year6 = parseInt(document.getElementById("yearBorn6").innerHTML)
let age6 = currentYear - year6
document.getElementById("currentAge6").innerHTML = "<p>This year i'll be or I am 🥳</p> " + age6


let year7 = parseInt(document.getElementById("yearBorn7").innerHTML)
let age7 = currentYear - year7
document.getElementById("currentAge7").innerHTML = "<p>This year i'll be or I am 🥳</p> "+ age7


let year8 = parseInt(document.getElementById("yearBorn8").innerHTML)
let age8 = currentYear - year8
document.getElementById("currentAge8").innerHTML = "<p>This year i'll be or I am 🥳</p> " + age8


let year9 = parseInt(document.getElementById("yearBorn9").innerHTML)
let age9 = currentYear - year9
document.getElementById("currentAge9").innerHTML = "<p>This year i'll be or I am 🥳</p> " + age9


let year10 = parseInt(document.getElementById("yearBorn10").innerHTML)
let age10 = currentYear - year10
document.getElementById("currentAge10").innerHTML = "<p>This year i'll be or I am 🥳</p> " + age10





/* clock function */

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();