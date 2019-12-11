function handler() {
    setTimeout(function(){ handler2(); }, 1);
   
}
function handler2() {
    var boba = document.querySelector('input[id="password"]').value
   console.log(boba)
}