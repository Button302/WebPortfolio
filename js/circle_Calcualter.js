let PI = Math.PI;
let radius;
let circumference;

document.getElementById(`submit`).onclick = function(){
    radius = document.getElementById(`Circle_Radius`).value;
    radius = Number(radius);
    circumference = 2* PI * radius;
    document.getElementById(`Result`).textContent = `Your circle's circumference is: ${circumference} units.`;
}