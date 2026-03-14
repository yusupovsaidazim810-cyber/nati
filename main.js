var elBuBtn = document.querySelectorAll(".nbtn");
var elCaunt = document.querySelector(".caunt");
var caunt = 0;

for (const btn of elBuBtn) {
  btn.addEventListener("click", function() {
    caunt += 1;
    elCaunt.textContent = caunt;
  })
}



const pilotBtn = document.getElementById("pilot-btn");


const moveNavbar = document.getElementById("navbar");

pilotBtn.addEventListener("click", () => {
  moveNavbar.classList.toggle("open");
  pilotBtn.classList.toggle("close-btn");
});
function darkMode(){
  document.body.classList.toggle("dark");
}
function darkMode(){
  document.body.classList.toggle("dark");
}
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 1,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  stars.forEach((star) => {
    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = 0;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();




var elBuBtn = document.querySelectorAll(".nbtn");
var elCaunt = document.querySelector(".caunt");
var caunt = 0;

console.log(elBuBtn, elCaunt);


// elBuBtn.addEventListener("click" , function(){
//    caunt += 1;
//   elCaunt.textContent = caunt;
// }


// )

 

