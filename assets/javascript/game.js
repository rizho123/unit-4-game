
var wins = 0;
var losses = 0;

var jwl1 = Math.floor((Math.random() * 20) + 1)
var jwl2 = Math.floor((Math.random() * 30) + 1)
var jwl3 = Math.floor((Math.random() * 10) + 1)
var jwl4 = Math.floor((Math.random() * 50) + 1)

var target = Math.floor((Math.random()*100)+100)
var userTotal = 0;

$("#target").text(target);

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
        reset()
    }
    else if (userTotal > target) {
        losses++
        $("#losses").text(losses);
        reset()
    }
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


})


