let menuBtn = document.querySelector(".nav-menu-btn")
menuBtn.addEventListener("click",myMenuFunction)

var x = document.getElementById("login");
var y = document.getElementById("register");

// Functions är till stor del lånade med specifiering gjort av mig

function myMenuFunction() {
  var i = document.getElementById("navMenu");

  if (i.className === "nav-menu") {
    i.className += " responsive";
  } else {
    i.className = "nav-menu";
  }
}

function login() {
  x.style.left = "5px";
  y.style.right = "-520px";

}

function register() {
  x.style.left = "-520px";
  y.style.right = "5px";
  // a.className = "btn";
  // b.className += " white-btn";
  // x.style.opacity = 0;
  // y.style.opacity = 1;
}
