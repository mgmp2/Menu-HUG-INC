// document.getElementById("hamburger").addEventListener("click",
// function(e){
//   e.preventDefault();
//   document.getElementById("box-overlay").classList.add("active");
// })

document.getElementById("toggle").addEventListener("click", function(e){
  e.preventDefault();
document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
})
