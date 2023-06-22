var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(event)
{
    var buttonInnerHTML=this.innerHTML;
    
    makeSound(buttonInnerHTML);
});
}
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
});
function makeSound(key)
{
    key = key.toUpperCase();
    switch(key)
    {
        case "A":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "S":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "D":
            var snare=new Audio("sounds/snare.mp3") ;
            snare.play();
            break;
        case "J":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "K":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "L":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            



    }
}