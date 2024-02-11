let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

const txt1 = document.getElementById("tbuser1");
const txt2 = document.getElementById("tbuser2");
const txt3 = document.getElementById("tbuser3");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");
const out2 = document.getElementById("output2");
const out3 = document.getElementById("output3");

function fun1() {
  out1.innerHTML = txt1.value;
  out2.innerHTML = txt2.value;
  out3.innerHTML = txt3.value;
}

btn1.addEventListener("click", fun1);
