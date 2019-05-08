


$(document).ready(function(event) {
    var answer = $(".answer").text();               /*converts word in div to variable*/
    var answerLength = answer.length;


    for (n=0; n < answerLength; n++ ) {
        document.querySelector(".result").innerHTML += "*";
        // why not selectElementByClassName?
    }

    $(".submitEntry").click(function(){  
        var answer = $(".answer").text();    
        var input = $(".entry").val();
        var doesItInclude = answer.includes(input);
        if (doesItInclude == 1) {
            alert("true");
        }
        else {
            alert("false");
        }
        
    });

});