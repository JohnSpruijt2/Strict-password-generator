function handler() {
    setTimeout(function(){ handler2(); }, 1);
   
}
function handler2() {
    var boba = document.querySelector('input[id="password"]').value
   if (boba.length >0 && boba.length <9) {
       console.log("groter dan 0")
       document.getElementById("error").innerHTML = "<span class='negative'><i class='fas fa-times'></i></span> Password needs to be at least 8 char"
   }
   else if (boba.length >7) {
        console.log("gelijk of groter dan 8")
        document.getElementById("error").innerHTML = "<span class='positive'><i class='fas fa-check'></i></i></span> Password needs to be at least 8 char"
   }
}