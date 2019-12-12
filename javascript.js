var check1 = false

function handler() {
    setTimeout(function(){ handler2(); }, 1);
}
function handler2() {
    window.secret = document.querySelector('input[id="password"]').value
    console.log(secret)
   if (secret.length >0 && secret.length <8) {
       console.log("groter dan 0")
       document.getElementById("error1").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password needs to be at least 8 char"
       handler3()
   }
   else if (secret.length >7) {
        console.log("gelijk of groter dan 8")
        document.getElementById("error1").innerHTML = "<span class='positive'><i class='fas fa-check'></i></i></span> Password needs to be at least 8 char"
        check1 = true
        handler3()
   }
   else if (secret.length == 0) {
        document.getElementById("error1").innerHTML = ""
        document.getElementById("error2").innerHTML = ""
   }
}
function handler3() {
    if (check1 == true) {
        document.getElementById("error2").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password needs to contain at least 2 uppercase letters"
    window.uppercase = 0
    var split = secret.split("")
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
    }
    else {
        "<span class='negative'><i class='fas fa-times'></i></span> Password needs to contain at least 2 uppercase letters"
    }
}