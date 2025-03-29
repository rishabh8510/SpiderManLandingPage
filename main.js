const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container .letter-s", {
  duration: 1000,
  delay: 1000,
});
ScrollReveal().reveal(".container img", {
  duration: 1000,
  delay: 1500,
});
ScrollReveal().reveal(".container .text__left", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2000,
});
ScrollReveal().reveal(".container .text__right", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});
ScrollReveal().reveal(".container .explore", {
  duration: 1000,
  delay: 2500,
});
ScrollReveal().reveal(".container h5", {
  duration: 1000,
  interval: 500,
  delay: 3000,
});
ScrollReveal().reveal(".footer p", {
  duration: 1000,
  delay: 7000,
});




function openInfo() {
  document.getElementById("infoPanel").style.left = "10px";  // Open left panel
  document.getElementById("infoPanel").style.marginTop = "80px";
  document.getElementById("videoPanel").style.right = "0"; // Open right video panel
  document.getElementById("videoPlayer").play(); // Auto-play video
}

function closeInfo() {
  document.getElementById("infoPanel").style.left = "-300px";  // Hide left panel
  document.getElementById("videoPanel").style.right = "-500px"; // Hide right video panel
  document.getElementById("videoPlayer").pause(); // Pause video
}




