const prompt = require('prompt-sync')()
let shoppingList = []

function addItem(fnList, fnItem) {
    matchingItem = false
    for (let i = 0; i < fnList.length; i++) {
        if (fnList[i] === fnItem) {
            matchingItem = true
        }}
    if (matchingItem === true) {
        return fnList
    }
    else {
    let newList = fnList.push(fnItem)
    return newList
    }}
function removeLastItem(fnList) {
    let newList = fnList.pop()
    return newList
}
function displayList(fnList) {
    console.log(fnList)
}

function filteritems(fnList, searchItem) {
    

}


let newItem = prompt("Enter a new item: ")
addItem(shoppingList, newItem)
displayList(shoppingList)
newItem = prompt("Enter another item: ")
addItem(shoppingList, newItem)
displayList(shoppingList)
newItem = prompt("Enter another item: ")
addItem(shoppingList, newItem)
displayList(shoppingList)
console.log("Removing item")
removeLastItem(shoppingList)
displayList(shoppingList)