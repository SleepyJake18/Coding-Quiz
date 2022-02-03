document.body.onload = addLi;
// A function that pulls from local storage and applies those values to a dynamically created list item
function addLi () {
    //Pulls "initial" item from local storage
    var $initials = localStorage.getItem('initials');
    //Pulls "score" item from local storage
    var finalScore = localStorage.getItem('score');
    //Variable that creates new list element
    var newLi = document.createElement("li");
    //Variable that selects ordered list on page
    var $ol = document.querySelector('ol');
    //sets text content of list item equal to "initial" and "score" with a space in between
    newLi.textContent = $initials + " " + finalScore;
    //Adds new list item to ordered list
    $ol.appendChild(newLi);
}