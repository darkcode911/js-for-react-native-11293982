//arrayManipulation.js

function processArray(arr) {

    const newArray = [];
    for(const num of arr) {
        if(num%2===0){
            newArray.push(num*num);
        } 
        else {
            newArray.push(num*3);
        }
    }
        
return newArray;

}

//Trial inputs
const myArray = [11, 14, 35, 6, 7, 8];
const result = processArray(myArray);
console.log(result);