let touchAreaStatus = false;
touchArea.style.pointerEvents = "none";
touchArea.style.opacity = "0.5";

function touchAreaToggle(){
  if (touchAreaStatus == false){
    touchArea.style.pointerEvents = "auto";
    touchArea.style.opacity = "1";
    touchAreaStatus = true;
  }
}
