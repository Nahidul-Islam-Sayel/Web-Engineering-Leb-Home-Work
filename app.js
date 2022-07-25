const button1= document.getElementById("button1");
const button2= document.getElementById("button2");
const style1= document.getElementById("style1");
const style2= document.getElementById("style2");
let xyz= 208090;
button1.addEventListener("click",function onClick(event){
    style1.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);;
})
button2.addEventListener("click",function onClick(event){
    style2.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);;
})