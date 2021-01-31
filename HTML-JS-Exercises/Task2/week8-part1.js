console.log("it works!");
let nav_element = document.getElementsByTagName("nav")[0];

nav_element.addEventListener("click", function () {
    console.log("nav clicked");
});

let list_items = document.getElementsByTagName("li");

for (var i = 0; i < list_items.length; i++) {
    list_items[i].addEventListener("click", function () {
        console.log("list item clicked");
    });
}

let okay_button = document.getElementById("okayButton");
okay_button.addEventListener("click", function () {
    let nameTextBox = document.getElementById("nameTextField");
    let textValue = nameTextBox.value;

    let outputList = document.getElementById("outputList");

    let newListItem = document.createElement("li");
    let textContent = document.createTextNode(textValue);

    newListItem.appendChild(textContent);
    outputList.appendChild(newListItem);

    nameTextBox.value = "";
});
