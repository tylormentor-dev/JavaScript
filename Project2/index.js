//1st.... we need to know what the user has typed in the box
const input = document.getElementById("input") 
//this allows us to get one element by its identifier which is the ID- input
//once we have the element, we access to the input box

function reverseString(str) {
    return str.split("").reverse().join("")// we convert the string into a list
 //we take the string(the word, hello), convert it into an array(H E L L O), reverse the array(O L L E H), turn it back into a string(OLLEH).
}

function check() {
    const value = input.value //gives us the value of the text
    const reverse = reverseString(value)
    

    if (value === reverse) { //it will compare the two values to check if they the same. 
        alert("P A L I N D R O M E") //if it's the same, alert that it is a palindrome
    } else { //OR
        alert("Not today!") //if it's not matching , tell me 'not today'.
    }

    input.value =""
    //after putting the value into the box and clicking okay, the value remains there. 
    //but the input.value="" we set the value to an empty string. 
    //so after we check, the value will disappear from the box, which means we have a empty string. 

}


