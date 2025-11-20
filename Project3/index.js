const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things." 
]

//this is inside of an array[], this is a ordered collection of elements.
//they have an index or number that allows us to access them. 
// so we have index 1 to index 10

const usedIndexes = new Set() //set() is a collection, and inside the set you can only have values that are unique.
//a set basically tells you if you have something or don't have something. 
// we'll put the index of quotes we USED inside the set() to check if that quote was used or not
// so with each cycle, we using a 'new Set'
const quoteElement = document.getElementById("quote") //get access the paragraph Tag

function generateQuote() { //inside here we'll get access the paragraph tag and set it's value. 
    if (usedIndexes.size >= quotes.length) { //if the number of elements, inside the used indexes is equal to the length of the quote that means we've used all the quotes. 
        usedIndexes.clear() //remove the values from the set, and allows the set to restart it from the beginning. 
    }


    while(true) {
        const randomIdx = Math.floor(Math.random() * quotes.length) //we generate a random index using 'randomIdx'
//Math.random() randomly generates a values between 0 and 1 and multiplying that by the length of our quote.
//.length tells you how many elements are in the array
//Math.floor rounds off the number

     if(usedIndexes.has(randomIdx)) continue  //if the used indexes has the random index, then it means we've used the quote before so we'll 'continue'
     //and continue will take us to the top of the loop (true) and the loop will continue looping if the continue is true.


    const quote = quotes[randomIdx] //using random index to ACCESS the quotes in the array.
    quoteElement.innerHTML = quote; //we populating the paragraph Tag that's in the HTML doc
    usedIndexes.add(randomIdx) //this is adding a quote to the set telling the code "ok, the next time you generate a random index, don't use this quote because we used it before"
    break  //To stop the while loop
    }
    
}