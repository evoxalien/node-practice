//1. Variables

let num = 10
let num2 = 20
console.log(num, num2)

let float = 10.1

console.log(parseFloat(num).toFixed(2))
console.log(float)


// 2. Basic Built in functions

console.log(typeof("String"))
console.log(typeof(num))
console.log(typeof(false))
console.log(typeof(float))

console.log(parseInt(float))

console.log(float.toString)

console.log(parseFloat(num).toFixed(10))

console.log(toString(float).length)

// 3. List

let list = ["string", 11, 2.1]

console.log("List: ", list)
console.log(list[2])

let list2 = []
let list3 = []

//Destructive to list
//list2 = list.reverse()

//Nondestructive to list
//Passing by refrence is the default without .slice() to deep copy the array.
//list2 = list.slice().reverse()

console.log("List2: ", list2)

for(var i = list.length; i > 0; i--){
    list3.push(list[i-1])
}
console.log("List: ", list)
console.log("List3: ", list3)

//Further Illustrating the deep copy vs refrence.
let x = [10,20,30]
let y = x
let z = y

//Print the state of the variables
console.log(x,y,z)

//Turns y into a deep copy
y = y.slice()

//Should reverse x and z
z.reverse();
console.log(x,y,z)

let numList = []

for(var i = 0; i < 10; i++){
    numList.push(i)
}

console.log("Num List")
console.log(numList)

tempList = []
/* Prints the Entire List with forEach as individual elements
numList.forEach(function(number){
    //console.log(number)
    tempList.push(number)
})
*/

console.log("First 3 Elements")
for(var i = 1; i <= 3; i++){
    //console.log(i)
    tempList.push(i)
}
console.log(tempList)
tempList = []

console.log("Last 3 Elements")
for(var i = numList.length-3; i < numList.length; i++){
    //console.log(i)
    tempList.push(i)
}
console.log(tempList)
tempList = []

console.log("Only Evens")
numList.forEach(function(number){
    if(number%2 == 0){
        //console.log(number)
        tempList.push(number)
    }
})
console.log(tempList)
tempList = []

console.log("All Elements Reversed")
numList.slice().reverse().forEach(function(number){
    //console.log(number)
    tempList.push(number)
})
console.log(tempList)
tempList = []

console.log("All Elements")
numList.forEach(function(number){
    //console.log(number)
    tempList.push(number)
})
console.log(tempList)
tempList = []

// 3. "Dict" / Objects

//two element dict
let dict = { 
    "fuel" : 5,
    "this": "that"    
}

console.log("Dictionary Value for Fuel is:", dict['fuel'])

console.log(dict)

let dict2 = { "key1": "val2", "key2": "val2"}
console.log("dict2:", dict2)

//Add third key value pair
dict2["key3"] = "val3"
console.log("dict2:", dict2)

//Empty dictionary
let dict3 = {}
console.log("dict3:", dict3)

//Merge two objects
dict3 = Object.assign(dict,dict2)
console.log("dict3:", dict3)

//All Elements key and value
for(const [key, value] of entries){
    console.log("Key:", key, "Value:", value)
}