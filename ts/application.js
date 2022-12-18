// document.getElementsByid('darkmode').addEventListener('click')
//  = function() {displayButtonInfo(id)};
function displayButtonInfo(value) {
    alert(value);
}
// document.getElementById("delhistory").addEventListener('click', function() {displayButtonInfo(document.getElementById('delhistory').id)});
// document.getElementById("darkmode").onclick = function () { displayButtonInfo('darkmode'); };
// document.getElementById("root").onclick = function () { displayButtonInfo('root'); };
document.getElementById("cloud").onclick = function () { displayButtonInfo('cloud'); };
// document.getElementById("back").onclick = function () { displayButtonInfo('back'); };
document.getElementById("settings").onclick = function () { displayButtonInfo('settings'); };
// document.getElementById("c").onclick = function () { displayButtonInfo('c'); };
//part one alers:
// document.getElementById("1").onclick = function () { displayButtonInfo('1'); };
// document.getElementById("2").onclick = function () { displayButtonInfo('2'); };
// document.getElementById("3").onclick = function () { displayButtonInfo('3'); };
// document.getElementById("4").onclick = function () { displayButtonInfo('4'); };
// document.getElementById("5").onclick = function () { displayButtonInfo('5'); };
// document.getElementById("6").onclick = function () { displayButtonInfo('6'); };
// document.getElementById("7").onclick = function () { displayButtonInfo('7'); };
// // document.getElementById("8").onclick = function () { displayButtonInfo('8'); };
// document.getElementById("9").onclick = function () { displayButtonInfo('9'); };
// document.getElementById("0").onclick = function () { displayButtonInfo('0'); };
// document.getElementById("+").onclick = function () { displayButtonInfo('+'); };
// document.getElementById("-").onclick = function () { displayButtonInfo('-'); };
// document.getElementById("/").onclick = function () { displayButtonInfo('/'); };
// document.getElementById("X").onclick = function () { displayButtonInfo('X'); };
// document.getElementById(".").onclick = function () { displayButtonInfo('.'); };
// document.getElementById("=").onclick = function () { displayButtonInfo('='); };
// document.getElementById("0").onclick = function () { displayButtonInfo('0'); };
document.getElementById("+-").onclick = function () { displayButtonInfo('+-'); };
// element.addEventListener('click', ()=> {
//     alert(element.textContent);
// })
// const element = document.getElementById("clock");
// const button = document.getElementsByClassName("button");
// const operator = document.getElementsByClassName("operator");
// const func = document.getElementsByClassName("func");
// // const digits = document.getElementsByClassName("digits");
// // for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener('click', displayButtonInfo(button));
// }
document.getElementById("info").onclick = function () { myFunction(); };
function myFunction() {
    alert('Hagar Laks\n Version 0.0.1\n My Calculator');
}
// function changemode(){
//     let elements = document.querySelectorAll('.tochange');
//     elements.forEach(element=>{
//         element.addEventListener('click',.toggle("dark");
// }
const light = document.querySelector("#darkmode");
light.addEventListener('click', changemode);
function changemode() {
    let el = document.querySelector(".container");
    el.classList.toggle("dark");
    console.log(el);
}
const delhistory = document.querySelector("#delhistory");
delhistory.addEventListener('click', hidehistory);
function hidehistory() {
    let el = document.querySelector(".hiddenh");
    el.classList.toggle("history");
    console.log(el);
}
const scientificmode = document.querySelector("#scientificmode");
scientificmode.addEventListener('click', hidescientific);
scientificmode.addEventListener('click', buttononsci);
function buttononsci() {
    let el = document.querySelector("#scientificmode");
    el.classList.toggle("buttonon");
    console.log(el);
    currentVal = '';
    printing(currentVal);
    cantype = true;
    operatorcount = 0;
    if (scientificModeFlag === true) {
        scientificModeFlag = false;
    }
    else {
        scientificModeFlag = true;
    }
}
function hidescientific() {
    let el = document.querySelector(".hiddens");
    el.classList.toggle("scientific");
    console.log(el);
}
