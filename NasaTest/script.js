// Change text by the scroll
const title = document.getElementById("title");

window.addEventListener('wheel', function(event) {
  let zoomMultiplier = event.deltaY / 108;
  title.innerText = `Scroll amount ${zoomMultiplier}`;
});
