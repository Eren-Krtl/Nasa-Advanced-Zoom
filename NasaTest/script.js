// zoom when scrolled
const picture = document.getElementById("pictureBig")

window.addEventListener('wheel', function(event)
{
  event.preventDefault();
  let zoomMultiplier = event.deltaY / 108;
  title.innerText = `Scroll amount ${zoomMultiplier}`;
},{passive: false});
