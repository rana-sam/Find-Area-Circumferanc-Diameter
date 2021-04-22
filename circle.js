

let radius=parseFloat(prompt("Enter radius of Circle"))
 
function area(radius) {
    return (Math.PI*radius*radius).toFixed(4);
}
function Circum(radius) {
    return (2*Math.PI*radius).toFixed(4);
}
function diameter(radius) {
    return (2*radius).toFixed(4);    
}

let Area=area(radius);
let circum=Circum(radius);
let Diameter=diameter(radius);

console.log("Area of circle is "+Area);
console.log("Circumference of circle is "+circum);
console.log("Diameter of circle is "+Diameter);
