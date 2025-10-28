const prompt = require('prompt-sync')()
let shoppingList = []
let newItem = document.getElementById("input-el")
let listButton = document.getElementById("button-el")
let returnList = document.getElementById("list-el")

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
    // let lowerCaseITem = toLowerCase(searchItem)
    // let lowerCaseList = fnList.map(lowerCaseList >= {
    //     return element.toLowerCase()
    // })
    // let filterList = []
    // for (let i = 0; i < fnList.length; i++) {
    //     if (fnList[i] <= searchItem) {
    //         filterList.push(fnList[i])
    //     }
    //     return filterList
    // }
    let filterList = fnList.filter(currentItem => currentItem.includes(searchItem));
    return filterList
 }
 listButton.addEventListener("click", function() {
    taskText = newItem.value
    let listItem = document.createElement("li")
    listItem.innerText = taskText
    shoppingList.appendChild(listItem)
    taskInput.value = ""
})



//  shoppingList = ["apple", "banana", "appleton", "kiwi", "applebottom"]
//  let mysearch = "apple"
//  console.log(filteritems(shoppingList, mysearch))


// let newItem = prompt("Enter a new item: ")
// addItem(shoppingList, newItem)
// displayList(shoppingList)
// newItem = prompt("Enter another item: ")
// addItem(shoppingList, newItem)
// displayList(shoppingList)
// newItem = prompt("Enter another item: ")
// addItem(shoppingList, newItem)
// displayList(shoppingList)
// console.log("Removing item")
// removeLastItem(shoppingList)
// displayList(shoppingList)