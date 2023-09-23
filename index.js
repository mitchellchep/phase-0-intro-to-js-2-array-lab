// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat){
    cats.push(cat)
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let newArray = [...cats];
    newArray.push(name)
    return newArray
}

function prependCat(name){
    var newArray = [...cats];
    newArray.unshift(name);
    return newArray;
}

function removeLastCat(){
    var newArray = [...cats];
    newArray.pop()
    return newArray
}

function removeFirstCat(){
    var newArray = [...cats];
    newArray.shift()
    return newArray
}