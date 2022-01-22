const circles = document.querySelectorAll(".circle");
console.log(circles);
let i = 0;

setInterval(() => {
    changeLight();
}, 1000);

function changeLight(){
    circles[i].className = "circle";
    i++;

  
    if( i > 2){
        i = 0;
    }

    const currentLight = circles[i];
    currentLight.classList.add(currentLight.getAttribute("color"));
  
   
}