function clock() {
  var d = new Date();
  var seconds = d.getSeconds();

  var counter = 30 - (seconds % 30);

  var doc = document.querySelector(".cnt");
  var line = document.querySelector(".line");
  doc.innerHTML = counter;

  if (counter > 20) doc.style.color = "#00FF00";
  else if (counter > 5 && counter < 20) doc.style.color = "#FFFF00";
  else if (counter < 5) doc.style.color = "#FF0000";
  doc.style.transition = "1s";

  line.style.width = (100 / 30) * counter + "%";
  line.style.background = doc.style.color;
  line.style.transition = "1s";

  setTimeout("clock()", 100);
}
clock();
