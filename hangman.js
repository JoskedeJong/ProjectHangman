


$(document).ready(function(event) {
    var answer = $(".answer").text();               /*converts word in div to variable*/
    var answerLength = answer.length;
    var countdown = 10;


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
        }
        else {
            alert("false");
            countdown = countdown - 1;
            var newCountdown= "Attempts Remaining\: " + countdown;
            document.getElementsByClassName("lives")[0].innerHTML = newCountdown; 
        }
        var empty = "";
        document.getElementsByClassName("entry")[0].value = "";
        
    });

});