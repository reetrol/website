const headers = document.querySelectorAll('.window__surveillance-header');

headers.forEach(header => {
  let mouseDown = false;
  let offsetX, offsetY;
  let elementBeingDragged = null;

  // Écoutez l'événement mousedown pour commencer le déplacement
  header.addEventListener('mousedown', (e) => {
    mouseDown = true;
    offsetX = e.clientX - header.parentElement.offsetLeft;
    offsetY = e.clientY - header.parentElement.offsetTop;
    elementBeingDragged = header.parentElement;
  });

  // Écoutez l'événement mousemove pour déplacer l'élément
  document.addEventListener('mousemove', (e) => {
    if (mouseDown && elementBeingDragged) {
      elementBeingDragged.style.left = e.clientX - offsetX + 'px';
      elementBeingDragged.style.top = e.clientY - offsetY + 'px';
    }
  });

  // Écoutez l'événement mouseup pour arrêter le déplacement
  document.addEventListener('mouseup', () => {
    mouseDown = false;
    elementBeingDragged = null;
  });
});