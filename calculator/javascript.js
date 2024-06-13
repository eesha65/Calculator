var a;
document.getElementById("colorsubbtn").onclick = function () {
  a = document.getElementById("color").value;
  document.getElementById("mainbody").style.backgroundColor = `${a}`;
};