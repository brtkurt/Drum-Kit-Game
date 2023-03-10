for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    let button = this.innerHTML;
     makeSound(button);
     makeAnimation(button);
  });
}

  document.addEventListener("keypress",function(event){
    makeSound(event.key);
    makeAnimation(event.key);
  })


function makeSound(button){
  switch (button) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let  tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
  }

}

function makeAnimation(currentButton){

  let animationDiv = document.querySelector("."+currentButton);
  animationDiv.classList.add("pressed");
  setTimeout(function(){animationDiv.classList.remove("pressed");},100);
}
