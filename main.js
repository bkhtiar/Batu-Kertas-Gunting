const pilihan = ["batu", "kertas", "gunting"];
const displayHasil = document.getElementById("displayHasil");
const pilihanComputer = document.getElementById("computer");
const pilihanPlayer = document.querySelectorAll(".pilihan button");
const displaySkorPlayer = document.getElementById('displaySkorPlayer');
const displaySkorComputer = document.getElementById('displaySkorComputer');
let skorPlayer = 0;
let skorComputer = 0;


function playGame(player) {
  const computer = pilihan[Math.floor(Math.random() * 3)];
  let hasil = "";
  
  if (player === computer){
    hasil = "SERI";
  } else {
    switch (player) {
      case "batu":
       hasil = (computer === "gunting") ? "MENANG!!" : "KALAH!!";
        break;
      case "kertas":
       hasil = (computer === "batu") ? "MENANG!!" : "KALAH!!";
        break;
      case "gunting":
        hasil = (computer === "kertas") ? "MENANG!!" : "KALAH!!";
        break;
      }
    }
    
    let i = 0;
    const putar = setInterval(function () {
      pilihanComputer.innerHTML = pilihanPlayer[i++].textContent
      if(i === 3){
        i = 0
      }
     }, 100);
     
     if (player === "batu"){
       pilihanPlayer[1].style.display = "none"
       pilihanPlayer[2].style.display = "none"
     } else if (player === "kertas"){
       pilihanPlayer[0].style.display = "none"
       pilihanPlayer[2].style.display = "none"
     } else {
       pilihanPlayer[1].style.display = "none"
       pilihanPlayer[0].style.display = "none"
     }
    
    setTimeout(function() {
      clearInterval(putar)
      pilihanComputer.innerHTML = document.getElementById(computer).innerHTML
      
      displayHasil.classList.remove("menang", "kalah")
    
     switch (hasil) {
        case 'MENANG!!':
          displayHasil.classList.add("menang")
          skorPlayer++
          displaySkorPlayer.innerHTML = skorPlayer
        break;
        case 'KALAH!!':
          displayHasil.classList.add("kalah")
          skorComputer++
          displaySkorComputer.innerHTML = skorComputer
        break;
      }
      displayHasil.innerHTML = hasil
      
      setTimeout(function() {
       if (skorPlayer === 3) {
          document.body.innerHTML = `<h1 class="menang" margin-top="50vh">CIEE MENANG....</h1>`
          setTimeout(function() {
            location.reload()
          }, 2000);
        } else if ( skorComputer === 3) {
          document.body.innerHTML = `<h1 class="kalah" margin-top="50vh">KALAHAN CUPU</h1>`
          setTimeout(function() {
            location.reload()
          }, 2000);
        } else {}
      }, 1000);
      
    }, 1000);
    
    setTimeout(function() {
      pilihanPlayer[0].style.display = "inline-block"
      pilihanPlayer[1].style.display = "inline-block"
      pilihanPlayer[2].style.display = "inline-block"
    }, 3000);
}

console.log(document)
