var number = 60;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// Questions array object
var questions = [{
    question: "In Aladdin, what is the name of Jasmine's pet tiger?",
    answerList:  ["Rajah", "Bo", "Iago", "Jack" ],
    answer: 0
},{
    question: "In Peter Pan, Captain Hook had a hook on which part of his body?",
    answerList: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
    answer: 1
},{
    question: "What was the flavor of the soft drink Surge?",
    answerList: ["Lemon", "Lime", "Tropical", "Citrus"],
    answer: 3
},{
    question: "Who sang the \"Friends\" theme song?",
    answerList: ["Spin Doctors", "The Wallflowers", "Gin Blossoms", "The Rembrandts"],
    answer: 3
},{
    question: "The 1996 Summer Olympics where held in which U.S. city?",
    answerList: ["San Antonio", "Atlanta", "Denver", "Houston"],
    answer: 1
},{
    question: "What is the name of the high school in \"Boy Meets World\"?",
    answerList: ["John Adams High School", "John Henry High School", "John Hancock High School", "Johnny Appleseed High School"],
    answer: 0
},{
    question: "When the iBook was released in 1999, which was NOT one of the five colors available?",
    answerList: ["Tangerine", "Blueberry", "Key Lime", "Watermelon"],
    answer: 3
}];

$("#start").on("click", function() {

    // Hide Start button
    $(this).hide();

    // Display initial time countdown
    $("#time").html("<h2>Time Remaining: Seconds</h2>" + "<br>");

    // Start timer countdown
    run();
   
    // Display questions --- I still want to turn this into a reusable piece so that i don't have to repeat this section for each question
    // Question 1
 

    for(var i=0; i<questions.length;i++){
        var q=i+1;
        console.log(questions[i].question)
       // $("#question").html("<h3>----------" + questions[i].question + "</h3>"); <div id="question1"></div>
      // var div = $("<div>");
     //  div.attr("id=",questions[i]);
      // div.val(questions[i]);
       //$('#main').append(div);
       var  divCo = "<div id="+q+"> Question:_"+q+"_"+ questions[i].question +" </div>";
       console.log(divCo);
       $("#main").append(divCo);

              for(var j=0; j<questions[i].answerList.length;j++){

                var  divCon = "<input type='radio' name='answer"+i+"' value="+j+"> <label>"+ questions[i].answerList[j] + "</label>";
                console.log(divCon);
                $("#main").append(divCon);


                           console.log(questions[i].answerList[j]);

                                     }
                                       }

                                    
    // Submit button
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    // Click event runs keepingScore() and displayResults() when user clicks Done button
    $("#done").on("click", function() {

        // Keeping track of score based on correct, incorrect, and unanswered
        keepingScore();

        // Display 
        displayResults();

        $("#submit").hide();
        stop();
       // $("#start").show();
        
        
    });
});

// Timer countdown function
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #time tag
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {

        // Run stop function to stop timer countdown
        stop();

        keepingScore();
        displayResults();

    }
}

function stop() {

    //  Clears intervalId
    clearInterval(intervalId);
}

// Function used for displaying results in terms of correct, incorrect, and unanswered --- I want to put all of these tags inside a div so that i can just hide the parent div
function displayResults() {

    
    $("#resultsMessage").html("<h3>All Done!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

// Function keeps score in terms of correct, incorrect, and unanswered --- I still want to make this a reusable piece so that I don't have to repeat it for each question
function keepingScore() {

    var userAnswer1 = $("input[name='answer0']:checked").val();
    var userAnswer2 = $("input[name='answer1']:checked").val();
    var userAnswer3 = $("input[name='answer2']:checked").val();
    var userAnswer4 = $("input[name='answer3']:checked").val();
    var userAnswer5 = $("input[name='answer4']:checked").val();
    var userAnswer6 = $("input[name='answer5']:checked").val();
    var userAnswer7 = $("input[name='answer6']:checked").val();

    // Question 1
    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 2
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 4
    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 5
    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 6
    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 7
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer7 == questions[6].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }  
}