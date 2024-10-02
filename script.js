var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
document.addEventListener("click",jump);
function jump(){
if(character.classList == "animate"){return;}
        character.classList.add("animate");
        setTimeout(removeJump,300); //300ms = length of animation
};
function removeJump(){
    character.classList.remove("animate");
}
var block = document.getElementById("block");
var checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("Game over. Score: " + Math.floor(counter/100));
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10);
