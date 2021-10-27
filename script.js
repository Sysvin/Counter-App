var subButton = document.querySelector(".subtract"); 
var resButton = document.querySelector(".reset"); 
var addButton = document.querySelector(".add"); 
var num = document.querySelector(".count");

subButton.onclick = () => {
    num.innerHTML--; 
    setColor();
}

resButton.onclick = () => {
    num.innerHTML= 0; 
    setColor();
}

addButton.onclick = () => {
    num.innerHTML++; 
    setColor();
}

/*in class he did it like this: 
addButton.addEventListener("click", () => {
    num.innerHTML++; 
})
*/


/*he also taught us something called event delegation wher you create one eventListener for the parent element and then apply it to children: 

we added another variable at the top called buttons and we got the selector .buttons 
We got rid of the variables add, subtract, reset
we then added the listener: 
     buttons.addEventListener("click", (e) =>{
        if (e.target.classList.contains("add")){
            num.innerHTML++; 
        } else if (e.target.classList.contains("subtract")){
            num.innerHTML--; 
        } else if (e.target.classList.contains("reset")){
            num.innerHTML = 0; 
        }
     })
*/

//now we need to change the color. we will change the style color. Rwe will use a function, and we will have to go back up in the code above and call this function. 
setColor = () => {
    if (num.innerHTML > 0){
     num.style.color = "yellow";
    } else if (num.innerHTML < 0){
        num.style.color = "orangered";
       } else {
        num.style.color = "#fff";
       }
}