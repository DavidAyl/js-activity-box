document.getElementById("button1").addEventListener("click", function () {
  document.getElementById("box").style.height = "250px";
});
document.getElementById("button2").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("button3").addEventListener("click", function () {
  document.getElementById("box").style.opacity = "25%";
});

document.getElementById("button5").addEventListener("click", function () {
  document.getElementById("box").style.borderRadius = "25%";
});

var rndatt = ["blue", "green", "yellow", "teal", "pink", "white", "black"];

document.getElementById("button6").addEventListener("click", function () {
  var number = Math.floor(Math.random() * rndatt.length);
  document.getElementById("box").style.backgroundColor = rndatt[number];
});

document.getElementById("button4").addEventListener("click", function () {
  document.getElementById("box").style.opacity = "100%";
});

document.getElementById("button4").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "orange";
});

document.getElementById("button4").addEventListener("click", function () {
  document.getElementById("box").style.height = "150px";
});

document.getElementById("button4").addEventListener("click", function () {
  document.getElementById("box").style.borderRadius = "0%";
});
