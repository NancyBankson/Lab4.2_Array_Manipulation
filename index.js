// const prompt = require('prompt-sync')()
// Used for testing -----------
let newItem = document.getElementById("input-el");
let listButton = document.getElementById("button-el");
let returnList = document.getElementById("list-el");
let removeButton = document.getElementById("remove-el")

// Task 1: Array Manipulation Basics
// let shoppingList = []
// function addItem(fnList, fnItem) {
//     matchingItem = false
//     for (let i = 0; i < fnList.length; i++) {
//         if (fnList[i] === fnItem) {
//             matchingItem = true
//         }
//     }
//     if (matchingItem === true) {
//         return fnList
//     }
//     else {
//         let newList = fnList.push(fnItem)
//         return newList
//     }
// }
// function removeLastItem(fnList) {
//     let newList = fnList.pop()
//     return newList
// }
// function displayList(fnList) {
//     console.log(fnList)
// }

// Task 2: Filter and Search an Array
// function filteritems(fnList, searchItem) {
//     let filterList = fnList.filter(currentItem => currentItem.includes(searchItem));
//     return filterList
// }

// Task 3: Render the List in the Browser
listButton.addEventListener("click", function () {
    let taskText = newItem.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = taskText;

    returnList.appendChild(listItem);
    newItem.value = ""; // Clear the input field
});
removeButton.addEventListener("click", function () {
    returnList.removeChild(returnList.lastChild)
})



// Used to make sure task one and two were complete
//   shoppingList = ["apple", "banana", "appleton", "kiwi", "applebottom"]
//   let mysearch = "apple"
//   console.log(filteritems(shoppingList, mysearch))


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