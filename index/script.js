var beginBtn = document.querySelector('#start');
var score = localStorage.setItem("score", score)

beginBtn.addEventListener('click', function(event) {
    var element = event.target;

    if (element.matches("button")) {
        var state = element.getAttribute("data-state");

        if (state === "home") {
            element.dataset.state = "question-1";

            document.querySelector('#start').innerHTML="submit";

            document.querySelector('#question-head').innerHTML = "Question 1";

            document.querySelector("p").style.display = "none";

            document.querySelector("ul").style.display = "block";
        }

    if (state === "question-1") {
        element.dataset.state = "save";

        document.querySelector('#initials').style.display = "block";

        document.querySelector("ul").style.display = "none";

        document.querySelector('#question-head').innerHTML = "Save Score!";
    }    

    if (state === "save") {
        location.href = "./highscores.html";
    }

    }
});