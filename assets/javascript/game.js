
var wins = 0;
var losses = 0;
var round = 1;
var jwl1 = Math.floor((Math.random() * 20) + 1)
var jwl2 = Math.floor((Math.random() * 30) + 1)
var jwl3 = Math.floor((Math.random() * 10) + 1)
var jwl4 = Math.floor((Math.random() * 50) + 1)

var target = Math.floor((Math.random()*100)+100)
var userTotal = 0;

$(document).ready(function() {
    $('#jwl1').on ('click', function(){
        sumTotal(jwl1);
    });
    
    $('#jwl2').on ('click', function(){
        sumTotal(jwl2);
    });

    $('#jwl3').on ('click', function(){
        sumTotal(jwl3);
    });

    $('#jwl4').on ('click', function(){
        sumTotal(jwl4);
    });

    console.log("Jwl: ", jwl1, jwl2, jwl3, jwl4)

function sumTotal(jwl){
    userTotal = userTotal + jwl
    console.log("Total:",userTotal)
    console.log("Target:",target)
    check()
    $("#userTotal").text(userTotal)
    
}

function check() {
    if (userTotal === target) {
        wins++
        $("#wins").text(wins);
        $("#status").text("You win!")
        newRound()
    }
    else if (userTotal > target) {
        losses++
        $("#losses").text(losses);
        $("#status").text("You lose!")
        newRound()
        console.log("After losing: " + round)
    }
}

function bgnGame () {
    $("#target").text(target)
    $("#userTotal").text(userTotal)
    $("#round").text(" " + round)
}

bgnGame()

function userStats () {
    $("#wins").text(wins)
    $("#losses").text(losses)
}

userStats()

function newRound() {
    setTimeout(function(){
        document.getElementById("status").innerHTML = "Round: " + round;
    }, 3000)
    round = round + 1;
    $("#round").text(round)
    console.log("Within newRound func: " + round)
    reset()
}

function reset() {
    jwl1 = Math.floor((Math.random() * 20) + 1)
    jwl2 = Math.floor((Math.random() * 30) + 1)
    jwl3 = Math.floor((Math.random() * 10) + 1)
    jwl4 = Math.floor((Math.random() * 50) + 1)
    target = Math.floor((Math.random()*100)+100)
    userTotal = 0;
    $("#userTotal").text(userTotal);
    $("#target").text(target);
}

function resetButton() {
    reset()
    round = 1;
    wins = 0;
    losses = 0;
    userStats()
    document.getElementById("status").innerHTML = "Round: " + round;
    console.log("RESET:" + round)
}

$("#reset").on("click", function(){
    resetButton()
    console.log("On Click event: " + round)
})
});




