for(var i = 0; i<7 ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
    });

}

document.addEventListener("keypress", function(event){
    var key = event.key;
    makeSound(key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');audio.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');tom4.play();
            break;
        default:
            break;
    }
}