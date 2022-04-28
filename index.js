document.getElementById("home-icon").addEventListener("click", () => {
  document.getElementById("card").removeAttribute("class", "hidden");
  document.getElementById("card-3").setAttribute("class", "hidden");
  document.getElementById("card-2").setAttribute("class", "hidden");
});

document.getElementById("folder-icon").addEventListener("click", () => {
  document.getElementById("card").setAttribute("class", "hidden");
  document.getElementById("card-2").removeAttribute("class", "hidden");
  document.getElementById("card-3").setAttribute("class", "hidden");
});

document.getElementById("contact-icon").addEventListener("click", () => {
  document.getElementById("card-3").removeAttribute("class", "hidden");
  document.getElementById("card").setAttribute("class", "hidden");
  document.getElementById("card-2").setAttribute("class", "hidden");
});

document.getElementById("forward-button").addEventListener("click", () => {
  document.getElementById("card").setAttribute("class", "hidden");
  document.getElementById("card-2").removeAttribute("class", "hidden");
  document.getElementById("card-3").setAttribute("class", "hidden");
});
