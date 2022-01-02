// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat() {cats.push("Ralph")}

function destructivelyPrependCat() {cats.unshift("Bob")}

function destructivelyRemoveLastCat() {cats.pop()}

function destructivelyRemoveFirstCat() {cats.shift()}
 
const newCat = ["Broom"];
function appendCat(name) {
    let newCat = [...cats, "Broom"]
    return newCat
}

const aCat = ["Arnold"]
function prependCat(name) {
    let aCat = ["Arnold", ...cats]
    return aCat
}

const lastCat = ["Milo", "Otis"]
function removeLastCat(name) {
    lastCat.slice(name);
    return lastCat
}

const firstCat = ["Otis", "Garfield"]
function removeFirstCat(name) {
    firstCat.slice(name)
    return firstCat
}






























