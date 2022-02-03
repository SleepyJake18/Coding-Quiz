var beginBtn = document.querySelector('#start');
var score = localStorage.setItem('score', "0");
var submitBtn = document.querySelector('#submit')
var answerBtn1 = document.querySelector('#answer1');
var answerBtn2 = document.querySelector('#answer2');
var answerBtn3 = document.querySelector('#answer3');
var answerBtn4 = document.querySelector('#answer4');
var answerBtn5 = document.querySelector('#answer5');
var answerBtn6 = document.querySelector('#answer6');
var answerBtn7 = document.querySelector('#answer7');
var answerBtn8 = document.querySelector('#answer8');
var answerBtn9 = document.querySelector('#answer9');
var answerBtn10 = document.querySelector('#answer10');
var answerBtn11 = document.querySelector('#answer11');
var answerBtn12 = document.querySelector('#answer12');
var answerBtn13 = document.querySelector('#answer13');
var answerBtn14 = document.querySelector('#answer14');
var answerBtn15 = document.querySelector('#answer15');
var answerBtn16 = document.querySelector('#answer16');
var answerBtn17 = document.querySelector('#answer17');
var answerBtn18 = document.querySelector('#answer18');
var answerBtn19 = document.querySelector('#answer19');
var answerBtn20 = document.querySelector('#answer20');
//Function that starts quiz by dynamically changing displayed elements on page
beginBtn.addEventListener('click', function(event) {
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Makes sure data state is exactly what is below before firing
        if (state === "home") {
            //Changes innerHTML of element with targeted tag, which changes displayed text
            document.querySelector('#question-head').innerHTML = "What is the DOM?";
            //Styles element with targeted id with display: none;
            document.querySelector("#openingtext").style.display = "none";
            //Styles element with targeted id with display: inline;
            document.querySelector("ul").style.display = "inline";
            //Styles element with targeted id with display: none;
            document.querySelector("#start").style.display = "none";
        }
         
    }
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn1.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-1") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer1").value;
            
            //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Document Object Model") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', score.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the primary axis?";
       //Styles element with targeted id with display: block;
        document.querySelector('#question-set-2').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-1").style.display = "none";
            
        
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn2.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-1") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer2").value;
            
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Document Object Model") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the primary axis?";
        
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-2').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-1").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn3.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-1") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer3").value;
            
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Document Object Model") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the primary axis?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-2').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-1").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn4.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-1") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer4").value;
            
            
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Document Object Model") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the primary axis?";
       //Styles element with targeted id with display: block;
        document.querySelector('#question-set-2').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-1").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn5.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-2") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer5").value;

             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Justify Content") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the secondary axis?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-3').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-2").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn6.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-2") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer6").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Justify Content") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the secondary axis?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-3').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-2").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn7.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-2") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer7").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Justify Content") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the secondary axis?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-3').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-2").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn8.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-2") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer8").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Justify Content") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the secondary axis?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-3').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-2").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn9.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-3") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer9").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Align Items") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "What is divitis?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-4').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-3").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn10.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-3") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer10").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Align Items") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "What is divitis?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-4').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-3").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn11.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-3") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer11").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Align Items") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "What is divitis?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-4').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-3").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn12.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-3") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer12").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Align Items") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "What is divitis?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-4').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-3").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn13.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-4") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer13").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Over Usage of Div tag") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "What is DRY coding?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-5').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-4").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn14.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-4") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer14").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Over Usage of Div tag") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "What is DRY coding?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-5').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-4").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn15.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-4") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer15").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Over Usage of Div tag") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "What is DRY coding?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-5').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-4").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
answerBtn16.addEventListener('click', function(event){
    //Variable that captures target of click
    var element = event.target;
    //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        //Grabs saved "score" value from locally saved storage
        var $score = localStorage.getItem('score');
        //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
        //Makes sure data state is exactly what is below before firing
        if (state === "question-4") {
            //Grabs value of element with targeted id
            var answer = document.querySelector("#answer16").value;
             //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
            if (answer === "Over Usage of Div tag") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        //Changes innerHTML of element with targeted tag, which changes displayed text
        document.querySelector('#question-head').innerHTML = "What is DRY coding?";
        //Styles element with targeted id with display: block;
        document.querySelector('#question-set-5').style.display = "block";
        //Styles element with targeted id with display: none;
        document.querySelector("#question-set-4").style.display = "none";
    }    
});
//Function that transitions quiz by dynamically changing displayed elements on page
    answerBtn17.addEventListener('click', function(event){
        //Variable that captures target of click
        var element = event.target;
        //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
        if (element.matches("button")) {
            //grabs data state from clicked element
            var state = element.getAttribute("data-state");
            //Grabs saved "score" value from locally saved storage
            var $score = localStorage.getItem('score');
            //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
            //Makes sure data state is exactly what is below before firing
            if (state === "question-5") {
                //Grabs value of element with targeted id
                var answer = document.querySelector("#answer17").value;
                 //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
                if (answer === "Coding in Which You Do Not Repeat Yourself") {
                    updateScore += 5;
                    localStorage.setItem('score', updateScore.toString());
                } else {
                    updateScore -= 5;
                    localStorage.setItem('score', updateScore.toString());
                }
                
                
            }
            //Styles element with targeted id with display: block;
            document.querySelector('#initials').style.display = "block";
            //Styles element with targeted id with display: none;
            document.querySelector("ul").style.display = "none";
            //Changes innerHTML of element with targeted tag, which changes displayed text
            document.querySelector('#question-head').innerHTML = "Save Score!";
            //Styles element with targeted id with display: block;
            document.querySelector('#submit').style.display = "block";
            //Styles element with targeted id with display: none;
            document.querySelector('#question-set-5').style.display = "none";
        }    
    });
//Function that transitions quiz by dynamically changing displayed elements on page
    answerBtn18.addEventListener('click', function(event){
        //Variable that captures target of click
        var element = event.target;
        //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
        if (element.matches("button")) {
            //grabs data state from clicked element
            var state = element.getAttribute("data-state");
            //Grabs saved "score" value from locally saved storage
            var $score = localStorage.getItem('score');
            //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
            //Makes sure data state is exactly what is below before firing
            if (state === "question-5") {
                //Grabs value of element with targeted id
                var answer = document.querySelector("#answer18").value;
                 //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
                if (answer === "Coding in Which You Do Not Repeat Yourself") {
                    updateScore += 5;
                    localStorage.setItem('score', updateScore.toString());
                } else {
                    updateScore -= 5;
                    localStorage.setItem('score', updateScore.toString());
                }
                
                
            }
            //Styles element with targeted id with display: block;
            document.querySelector('#initials').style.display = "block";
            //Styles element with targeted id with display: none;
            document.querySelector("ul").style.display = "none";
            //Changes innerHTML of element with targeted tag, which changes displayed text
            document.querySelector('#question-head').innerHTML = "Save Score!";
            //Styles element with targeted id with display: block;
            document.querySelector('#submit').style.display = "block";
            //Styles element with targeted id with display: none;
            document.querySelector('#question-set-5').style.display = "none";
        }    
    });
//Function that transitions quiz by dynamically changing displayed elements on page
    answerBtn19.addEventListener('click', function(event){
        //Variable that captures target of click
        var element = event.target;
        //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
        if (element.matches("button")) {
            //grabs data state from clicked element
            var state = element.getAttribute("data-state");
            //Grabs saved "score" value from locally saved storage
            var $score = localStorage.getItem('score');
            //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
            //Makes sure data state is exactly what is below before firing
            if (state === "question-5") {
                //Grabs value of element with targeted id
                var answer = document.querySelector("#answer19").value;
                 //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
                if (answer === "Coding in Which You Do Not Repeat Yourself") {
                    updateScore += 5;
                    localStorage.setItem('score', updateScore.toString());
                } else {
                    updateScore -= 5;
                    localStorage.setItem('score', updateScore.toString());
                }
                
                
            }
            //Styles element with targeted id with display: block;
            document.querySelector('#initials').style.display = "block";
            //Styles element with targeted id with display: none;
            document.querySelector("ul").style.display = "none";
            //Changes innerHTML of element with targeted tag, which changes displayed text
            document.querySelector('#question-head').innerHTML = "Save Score!";
            //Styles element with targeted id with display: block;
            document.querySelector('#submit').style.display = "block";
            //Styles element with targeted id with display: none;
            document.querySelector('#question-set-5').style.display = "none";
        }    
    });
//Function that transitions quiz by dynamically changing displayed elements on page
    answerBtn20.addEventListener('click', function(event){
        //Variable that captures target of click
        var element = event.target;
        //Function that only fires if the event target was a button. Fired function check data state, if that matches, dynamically changes elements on page and saves quiz score.
        if (element.matches("button")) {
            //grabs data state from clicked element
            var state = element.getAttribute("data-state");
            //Grabs saved "score" value from locally saved storage
            var $score = localStorage.getItem('score');
            //Converts "score" string into an integer that can be used for mathematical operations
        var updateScore = parseInt($score);
            //Makes sure data state is exactly what is below before firing
            if (state === "question-5") {
                //Grabs value of element with targeted id
                var answer = document.querySelector("#answer20").value;
                 //Checks to make sure pulled value is exactly what is below. If thats true, will add five to updatedScore then save that value back to localStorage item "score" as a string. If false, subtracts five then saves updated value as string.
                if (answer === "Coding in Which You Do Not Repeat Yourself") {
                    updateScore += 5;
                    localStorage.setItem('score', updateScore.toString());
                } else {
                    updateScore -= 5;
                    localStorage.setItem('score', updateScore.toString());
                }
                
                
            }
            //Styles element with targeted id with display: block;
            document.querySelector('#initials').style.display = "block";
            //Styles element with targeted id with display: none;
            document.querySelector("ul").style.display = "none";
            //Changes innerHTML of element with targeted tag, which changes displayed text
            document.querySelector('#question-head').innerHTML = "Save Score!";
            //Styles element with targeted id with display: block;
            document.querySelector('#submit').style.display = "block";
            //Styles element with targeted id with display: none;
            document.querySelector('#question-set-5').style.display = "none";
        }    
    });

//Function that ends quiz by transitioning to new page
submitBtn.addEventListener('click', function(event) {
    //Variable that captures target of click
    var element = event.target;
//Function that only fires if the event target was a button. Fired function check data state, if that matches, saves initials input by user and score, then transitions to high score page.
    if (element.matches("button")) {
        //grabs data state from clicked element
        var state = element.getAttribute("data-state");
        var initial = document.querySelector("#initials").value;
        //Makes sure data state is exactly what is below before firing
        if (state === "submit") {
            //saves initials from input field to local storage as item "initial"
            localStorage.setItem('initials', initial);
            //Sends user to high score page
            location.href = "./highscores.html";
  
        }
    }

});