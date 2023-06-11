let hrs = document.getElementById("horas");
let min = document.getElementById("minutos");
let sec = document.getElementById("segundos");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
});

