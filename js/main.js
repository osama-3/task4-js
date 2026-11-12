// document.querySelector("#myButton1").onclick = function() { 
// document.querySelector("#demo").style.color = "red";
// document.querySelector("#demo").style.textAlign = "center";
// } 
// document.querySelector("#myButton2").onclick = function() { 
// document.querySelector("#demo").style.color = "blue";
// document.querySelector("#demo").style.textAlign = "left";
// } 
// document.querySelector("#myButton3").onclick = function() { 
// document.querySelector("#demo").style.color = "green";
// document.querySelector("#demo").style.textAlign = "right";
// } 



document.querySelectorAll("button").forEach(function(click) {
    click.onclick = function() {
        document.querySelector("#demo").style.color = click.dataset.color;
        document.querySelector("#demo").style.textAlign = click.dataset.align;
    }
});