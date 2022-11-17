document.querySelector(".nav-bar").addEventListener("click", event => {
  console.log("event", event);
  event.target.style.backgroundColor = "purple";
});

document.querySelector(".nav-bar").addEventListener("mouseover", event => {
  console.log("event.target", event);
});

document.querySelector(".nav-bar").addEventListener("mouseover", event => {
  console.log("event", event);
});
