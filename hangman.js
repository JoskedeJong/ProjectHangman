


$(document).ready(function(event) {
    var answer = $(".answer").text();               /*converts word in div to variable*/

    $(".submitEntry").click(function(){  
        var answer = $(".answer").text();    
        var input = $(".entry").val();
        var doesItInclude = answer.includes(input);
        var answerLength = input.length;
        if (doesItInclude == 1) {
            alert("true");
        }
        else {
            alert("false");
        }
        
    });

});