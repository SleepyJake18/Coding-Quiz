document.body.onload = addLi;

function addLi () {
    var $initials = localStorage.getItem('initials');

    var finalScore = localStorage.getItem('score');

    var newLi = document.createElement("li");
    var $ol = document.querySelector('ol');

    newLi.textContent = $initials + " " + finalScore;

    $ol.appendChild(newLi);
}