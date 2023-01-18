

for (let i = 0; i<= document.querySelectorAll(".drum").length - 1;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        this.style.color = "white";

        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    });
}


