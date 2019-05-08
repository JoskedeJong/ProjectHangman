


$(document).ready(function(event) {
    var answer = $(".answer").text();               /*converts word in div to variable*/
    var answerLength = answer.length;


    for (n=0; n < answerLength; n++ ) {
        document.getElementsByClassName("result")[0].innerHTML += "*";
        // why not selectElementByClassName?
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

            // here I want code to update turn tracking
        }
        
    });

});