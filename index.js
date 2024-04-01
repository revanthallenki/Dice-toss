var random1=Math.floor(Math.random()*6)+1;
var randomimg1="dice"+random1+".png";
var randomimgsrc1="./images/"+randomimg1;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", randomimgsrc1);


var random2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+random2+".png";
var randomimgsrc2="./images/"+randomimg2;

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimgsrc2);


if(random1>random2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}else if(random1<random2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins";
}else{
document.querySelector("h1").innerHTML="It's a tie!"
    
}