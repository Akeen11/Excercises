let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]; 







for (let i = 0; i < array.length; i++) 
console.log(array[i]);

const newArray = [];
array.forEach(item => {
    if(typeof item === "string")
    newArray.push(item)
    return console.log(newArray)
})






function myFunction(array) {
    stringArray = [];
    array.forEach(element => {
        if (typeof(element) === "string") {
            stringArray.push(element);
        }
    })
    return stringArray;
}

console.log(myFunction(array))








const strings = array.filter(item => {
    const isString = (typeof item === 'string')
    return isString;
})

console.log(strings);








const string = array.filter(item => {
        return typeof item === 'string'
    })
    
    console.log(string)
















    document.getElementById("rockstar").innerHTML = `<p>${strArray.join(" ")}</p>`