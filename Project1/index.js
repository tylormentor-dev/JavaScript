
const body = document.getElementsByTagName("body")[0] //we use const because we're not changing the variable. 
// document is going to access the html document and allow us to reference any element in the html doc
// with ("body") we get the whole body tag/section of the html
//the 'body' will return a list/array, with one element(body), to acess the first element we use [0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255) //Math.random will generate random value between 0 and 1 and multiply from 0 to 255. we'll get values from 0 to 255
    //math.random will give us decimals we use Math.round to a whole number
     
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
}

randomColor()
