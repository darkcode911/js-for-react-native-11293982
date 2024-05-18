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

//function formatArrayStrings which modifies strings based on its corresponding numbers

function  formatArrayStrings(stringArr,numberArr) {

    if (stringArr.length !== numberArr.length){
    throw new Error ("input arrays must have equal length");
    }
    const formattedStrings=[];
    for (let i=0;i< stringArr.length;i++) {
        const currentString = stringArr[i];
        const correspondingNumber = numberArr[i];
        let formattedString;
        if(correspondingNumber%2===0) {
            formattedString = currentString.toUpperCase(); 
        }
       else {
        formattedString = currentString.toLowerCase();
       }
       formattedStrings.push(formattedString); 
    }
    return formattedStrings;
}
//My trial inputs
const myNumber = [9,14,35,6,7,8];
const resultingNumbers = processArray(myArray);
const lettersEdit = ["Sky", "Hack", "Life","Gold","Home","City"];
const resultingFormat = formatArrayStrings(lettersEdit,resultingNumbers);

console.log(resultingFormat);