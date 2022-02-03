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

beginBtn.addEventListener('click', function(event) {
    var element = event.target;

    if (element.matches("button")) {
        var state = element.getAttribute("data-state");

        if (state === "home") {

            document.querySelector('#question-head').innerHTML = "What is the DOM?";

            document.querySelector("#openingtext").style.display = "none";
            
            document.querySelector("ul").style.display = "inline";

            document.querySelector("#start").style.display = "none";
        }
         
    }
});

answerBtn1.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");
        
        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);

        if (state === "question-1") {
            var answer = document.querySelector("#answer1").value;
            
            
            if (answer === "Document Object Model") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', score.toString());
            }
            
            
        }
        
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the primary axis?";
       
        document.querySelector('#question-set-2').style.display = "block";
            
        document.querySelector("#question-set-1").style.display = "none";
            
        
    }    
});

answerBtn2.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-1") {
            var answer = document.querySelector("#answer2").value;
            
            
            if (answer === "Document Object Model") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the primary axis?";
        
        
        document.querySelector('#question-set-2').style.display = "block";
            
        document.querySelector("#question-set-1").style.display = "none";
    }    
});

answerBtn3.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-1") {
            var answer = document.querySelector("#answer3").value;
            
            
            if (answer === "Document Object Model") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the primary axis?";
        
        document.querySelector('#question-set-2').style.display = "block";
            
        document.querySelector("#question-set-1").style.display = "none";
    }    
});

answerBtn4.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-1") {
            var answer = document.querySelector("#answer4").value;
            
            
            
            if (answer === "Document Object Model") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the primary axis?";
       
        document.querySelector('#question-set-2').style.display = "block";
            
        document.querySelector("#question-set-1").style.display = "none";
    }    
});

answerBtn5.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-2") {
            var answer = document.querySelector("#answer5").value;
            
            if (answer === "Justify Content") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the secondary axis?";
      
        document.querySelector('#question-set-3').style.display = "block";
            
        document.querySelector("#question-set-2").style.display = "none";
    }    
});

answerBtn6.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-2") {
            var answer = document.querySelector("#answer6").value;
            
            if (answer === "Justify Content") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the secondary axis?";
        
        document.querySelector('#question-set-3').style.display = "block";
            
        document.querySelector("#question-set-2").style.display = "none";
    }    
});

answerBtn7.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-2") {
            var answer = document.querySelector("#answer7").value;
            
            if (answer === "Justify Content") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the secondary axis?";
     
        document.querySelector('#question-set-3').style.display = "block";
            
        document.querySelector("#question-set-2").style.display = "none";
    }    
});

answerBtn8.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-2") {
            var answer = document.querySelector("#answer8").value;
            
            if (answer === "Justify Content") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "In CSS, what flex-box property is used to align items on the secondary axis?";
     
        document.querySelector('#question-set-3').style.display = "block";
            
        document.querySelector("#question-set-2").style.display = "none";
    }    
});

answerBtn9.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-3") {
            var answer = document.querySelector("#answer9").value;
            
            if (answer === "Align Items") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "What is divitis?";
    
        document.querySelector('#question-set-4').style.display = "block";
            
        document.querySelector("#question-set-3").style.display = "none";
    }    
});

answerBtn10.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-3") {
            var answer = document.querySelector("#answer10").value;
            
            if (answer === "Align Items") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "What is divitis?";
      
        document.querySelector('#question-set-4').style.display = "block";
            
        document.querySelector("#question-set-3").style.display = "none";
    }    
});

answerBtn11.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-3") {
            var answer = document.querySelector("#answer11").value;
            
            if (answer === "Align Items") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "What is divitis?";
    
        document.querySelector('#question-set-4').style.display = "block";
            
        document.querySelector("#question-set-3").style.display = "none";
    }    
});

answerBtn12.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-3") {
            var answer = document.querySelector("#answer12").value;
            
            if (answer === "Align Items") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "What is divitis?";

        document.querySelector('#question-set-4').style.display = "block";
            
        document.querySelector("#question-set-3").style.display = "none";
    }    
});

answerBtn13.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-4") {
            var answer = document.querySelector("#answer13").value;
            
            if (answer === "Over Usage of Div tag") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "What is DRY coding?";

        document.querySelector('#question-set-5').style.display = "block";
            
        document.querySelector("#question-set-4").style.display = "none";
    }    
});

answerBtn14.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-4") {
            var answer = document.querySelector("#answer14").value;
            
            if (answer === "Over Usage of Div tag") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "What is DRY coding?";
    
        document.querySelector('#question-set-5').style.display = "block";
            
        document.querySelector("#question-set-4").style.display = "none";
    }    
});

answerBtn15.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-4") {
            var answer = document.querySelector("#answer15").value;
            
            if (answer === "Over Usage of Div tag") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "What is DRY coding?";
    
        document.querySelector('#question-set-5').style.display = "block";
            
        document.querySelector("#question-set-4").style.display = "none";
    }    
});

answerBtn16.addEventListener('click', function(event){
    var element = event.target;
    
    if (element.matches("button")) {
        
        var state = element.getAttribute("data-state");

        var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
        
        if (state === "question-4") {
            var answer = document.querySelector("#answer16").value;
            
            if (answer === "Over Usage of Div tag") {
                updateScore += 5;
                localStorage.setItem('score', updateScore.toString());
            } else {
                updateScore -= 5;
                localStorage.setItem('score', updateScore.toString());
            }
            
            
        }
        document.querySelector('#question-head').innerHTML = "What is DRY coding?";
   
        document.querySelector('#question-set-5').style.display = "block";
            
        document.querySelector("#question-set-4").style.display = "none";
    }    
});

    answerBtn17.addEventListener('click', function(event){
        var element = event.target;
        
        if (element.matches("button")) {
            
            var state = element.getAttribute("data-state");

            var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
            
            if (state === "question-5") {
                var answer = document.querySelector("#answer17").value;
                
                if (answer === "Coding in Which You Do Not Repeat Yourself") {
                    updateScore += 5;
                    localStorage.setItem('score', updateScore.toString());
                } else {
                    updateScore -= 5;
                    localStorage.setItem('score', updateScore.toString());
                }
                
                
            }
            document.querySelector('#initials').style.display = "block";
            
            document.querySelector("ul").style.display = "none";
            
            document.querySelector('#question-head').innerHTML = "Save Score!";
            
            document.querySelector('#submit').style.display = "block";
            
            document.querySelector('#question-set-5').style.display = "none";
        }    
    });

    answerBtn18.addEventListener('click', function(event){
        var element = event.target;
        
        if (element.matches("button")) {
            
            var state = element.getAttribute("data-state");

            var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
            
            if (state === "question-5") {
                var answer = document.querySelector("#answer18").value;
                
                if (answer === "Coding in Which You Do Not Repeat Yourself") {
                    updateScore += 5;
                    localStorage.setItem('score', updateScore.toString());
                } else {
                    updateScore -= 5;
                    localStorage.setItem('score', updateScore.toString());
                }
                
                
            }
            document.querySelector('#initials').style.display = "block";
            
            document.querySelector("ul").style.display = "none";
            
            document.querySelector('#question-head').innerHTML = "Save Score!";
            
            document.querySelector('#submit').style.display = "block";
            
            document.querySelector('#question-set-5').style.display = "none";
        }    
    });

    answerBtn19.addEventListener('click', function(event){
        var element = event.target;
        
        if (element.matches("button")) {
            
            var state = element.getAttribute("data-state");

            var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
            
            if (state === "question-5") {
                var answer = document.querySelector("#answer19").value;
                
                if (answer === "Coding in Which You Do Not Repeat Yourself") {
                    updateScore += 5;
                    localStorage.setItem('score', updateScore.toString());
                } else {
                    updateScore -= 5;
                    localStorage.setItem('score', updateScore.toString());
                }
                
                
            }
            document.querySelector('#initials').style.display = "block";
            
            document.querySelector("ul").style.display = "none";
            
            document.querySelector('#question-head').innerHTML = "Save Score!";
            
            document.querySelector('#submit').style.display = "block";
            
            document.querySelector('#question-set-5').style.display = "none";
        }    
    });

    answerBtn20.addEventListener('click', function(event){
        var element = event.target;
        
        if (element.matches("button")) {
            
            var state = element.getAttribute("data-state");

            var $score = localStorage.getItem('score');

        var updateScore = parseInt($score);
            
            if (state === "question-5") {
                var answer = document.querySelector("#answer20").value;
                
                if (answer === "Coding in Which You Do Not Repeat Yourself") {
                    updateScore += 5;
                    localStorage.setItem('score', updateScore.toString());
                } else {
                    updateScore -= 5;
                    localStorage.setItem('score', updateScore.toString());
                }
                
                
            }
            document.querySelector('#initials').style.display = "block";
            
            document.querySelector("ul").style.display = "none";
            
            document.querySelector('#question-head').innerHTML = "Save Score!";
            
            document.querySelector('#submit').style.display = "block";
            
            document.querySelector('#question-set-5').style.display = "none";
        }    
    });


submitBtn.addEventListener('click', function(event) {
    var element = event.target;

    if (element.matches("button")) {
        var state = element.getAttribute("data-state");
        var initial = document.querySelector("#initials").value;

        if (state === "submit") {

            localStorage.setItem('initials', initial);

            location.href = "./highscores.html";
  
        }
    }

});
