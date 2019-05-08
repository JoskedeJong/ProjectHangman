


$(document).ready(function(event) {
    var options = ["firefly", "lantern", "druid", "salamander","mellifluous"];
    var answer = options[Math.floor(Math.random() * options.length)];
    console.log(answer);
    var answerLength = answer.length;
    var countdown = 7;

    for (n=0; n < answerLength; n++ ) {
        document.getElementsByClassName("result")[0].innerHTML += "*";
    }
    
    $(".submitEntry").click(function(){ 
        var input = $(".entry").val();
        var doesItInclude = answer.includes(input);
        if (doesItInclude == 1) {
            alert("true");
            for (i=0; i<answerLength; i++){
                if (answer[i] == input){
                    var letterString = document.querySelector(".result").innerHTML;
                    document.getElementsByClassName("result")[0].innerHTML = letterString.slice(0, i, 1) + input + letterString.slice(i+1, answerLength, 1) ;
                }
            }
            if (document.querySelector(".result").innerHTML == answer){
                alert("you win");
            }
        }
        else {
            alert("false");
            countdown = countdown - 1;
            var newCountdown= "Attempts Remaining\: " + countdown;
            document.getElementsByClassName("lives")[0].innerHTML = newCountdown; 
            if (countdown == 0){
                alert("you lose");
            }
        }
        var empty = "";
        document.getElementsByClassName("entry")[0].value = "";
        
    });

});