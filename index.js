
fetch('https://jsonplaceholder.typicode.com/posts') // a fetch represents a promise 
// // this is used to fetch information that is hosted by a database. 
// you use API to interact with a server through in a link, in javascript to access it. 

.then((valueOFFetch) => {
    console.log(valueOFFetch);
}) // after the data is fetched, "then" deplays what happens after. 
//whatever value you fetch, it will be presented as the parameter in the function. 
// then you console log to see it. 

fetch('https://jsonplaceholder.typicode.com/posts')
.then((valueOFFetch) =>{
    valueOFFetch.json(); //this is used to convert to javascript
})

.then(v=> {
    console.log(v);
})

fetch('https://jsonplaceholder.typicode.com/comments')
.then(a=> a.json()) // convert data to javacript objects
.then(info => {
    information =info // we storing the data that was fetched to a variable

})
.catch(err => { //if it doesn't fetch the data,we'll call a error
    console.log(err);
})

let information // 

let div = document.guerySelector('#container')
information.forEach(object => {
 div.innerHTML
});