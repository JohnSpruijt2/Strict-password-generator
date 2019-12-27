var check0 = false
var check1 = false
var check2 = false
var check3 = false
var check4 = false
var format = /[ !@#$€%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
var timerHasStarted = false
var time = 0
var secret = document.querySelector('input[id="password"]').value
function handler() {
    startTimer()
    setTimeout(function(){ handler2(); }, 2);
}
function handler2() {
    window.wincheck = [false,false,false,false,false,false]
    secret = document.querySelector('input[id="password"]').value
   if (secret.length >0 && secret.length <8) {
       document.getElementById("error1").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password needs to be at least 8 char"
       handler3()
       red()
   }
   else if (secret.length >7) {
        document.getElementById("error1").innerHTML = "<span class='positive'><i class='fas fa-check'></i></i></span> Password needs to be at least 8 char"
        check1 = true
        wincheck[0] = true
        handler3()
        red()
   }
   else if (secret.length == 0) {
        document.getElementById("error1").innerHTML = ""
        document.getElementById("error2").innerHTML = ""
        document.getElementById("error3").innerHTML = ""
        document.getElementById("error4").innerHTML = ""
        document.getElementById("error5").innerHTML = ""
        document.getElementById("error6").innerHTML = ""
   }
}
function handler3() {
    if (check1 == true) {
        document.getElementById("error2").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password needs to contain at least 2 uppercase letters"
    window.uppercase = 0
    window.split = secret.split("")
    for (i=0; i<split.length; i++) {
        if (isNaN(split[i]) == true) {
            if (split[i] == split[i].toUpperCase()) {
                uppercase++
            }
        }
    }
    handler4()
    }
}
function handler4() {
    if (uppercase >1) {
        document.getElementById("error2").innerHTML = "<span class='positive'><i class='fas fa-check'></i></i></span> Password needs to contain at least 2 uppercase letters"
        check0 = true
        wincheck[1] = true
    }
    else {
        document.getElementById("error2").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password needs to contain at least 2 uppercase letters"
    }
    handler5()
}
function handler5() {
    if (check0 == true) {
        var number = 0
    for (i=0; i<split.length; i++) {
        if (split[i] == 0 || split[i] == 1 || split[i] == 2 || split[i] == 3 || split[i] == 4 || split[i] == 5 || split[i] == 6 || split[i] == 7 || split[i] == 8 || split[i] == 9) {
            number++
        }
    }
    if (number > 2) {
        document.getElementById("error3").innerHTML = "<span class='positive'><i class='fas fa-check'></i></i></span> Password needs to contain at least 3 numbers"
        check2 = true
        wincheck[2] = true
    }
    else {
        document.getElementById("error3").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password needs to contain at least 3 numbers"
    }
    handler6()
    }
    
}
function handler6() {
    if (check2 == true) {
        if (split.length >10) {
            document.getElementById("error4").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password can't be longer then 10 characters"
        }
        else {
            document.getElementById("error4").innerHTML = "<span class='positive'><i class='fas fa-check'></i></i></span> Password can't be longer then 10 characters"
            check3 = true
            wincheck[3] = true
        }
        
    }
    handler7()
}
function handler7() {
    if (check3 == true) {
        var apple = 0
        for (i=0; i < split.length; i++) {
            if (split[i].toLowerCase() == "a" && split[i+1].toLowerCase() == "p" && split[i+2].toLowerCase() == "p" && split[i+3].toLowerCase() == "l"  && split[i+4].toLowerCase() == "e" ) {
                apple++
            }
        }
        if (apple >0) {
            document.getElementById("error5").innerHTML = "<span class='positive'><i class='fas fa-check'></i></i></span> Password needs to contain the word 'apple'"
            check4 = true
            wincheck[4] = true
        }
        else {
            document.getElementById("error5").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password needs to contain the word 'apple'"
        }
        handler9()
    }
}
function handler9() {   
    if (check4 == true) {
        var symbols = 0
        for (i=0; i<split.length; i++) {
            if (format.test(split[i]) == true) {
                symbols++
            }
            }
            if (symbols >1) {
                document.getElementById("error6").innerHTML = "<span class='positive'><i class='fas fa-check'></i></i></span> Password needs to contain at least 2 symbols"
                wincheck[5] = true
            }
            else {
                document.getElementById("error6").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password needs to contain at least 2 symbols"
            }
    }
}
function startTimer() {
    if (timerHasStarted == false) {
        timer()
        timerHasStarted = true
    }
    else {

    }
}
function timer() {
    window.timert = setTimeout(function(){ time++; timer(); }, 1000);
}
function endTimer() {
    clearTimeout(timert)
}
function end() {
    window.names = 0
    window.username = document.querySelector('input[id="username"]').value
    if (username == "") {
        document.getElementById("username").style.borderColor = "red"
    }
    else {
        
    }
    if (secret == ""){
        document.getElementById("password").style.borderColor = "red"
    }
    else {
        
    }
    for (i=0; i<6; i++) {
        if (wincheck[i] == true) {
            names++
        }
    }
    if (names == 6) {
        endTimer()
        endScreen()
    }
}
function endScreen() {
    document.getElementById("section").innerHTML = `<a>`+username+` made his password in `+time+` seconds.</a>`
}
function reveal() {
    var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("revealBtn").innerHTML = '<i class="fas fa-eye-slash"></i>'
  } else {
    x.type = "password";
    document.getElementById("revealBtn").innerHTML = '<i class="fas fa-eye"></i>'
  }
}
function red() {
    username = document.querySelector('input[id="username"]').value
    if (username == "") {

    }
    else {
        document.getElementById("username").style.borderColor = ""
    }
    if (secret == ""){
        
    }
    else {
        document.getElementById("password").style.borderColor = ""
    }
}