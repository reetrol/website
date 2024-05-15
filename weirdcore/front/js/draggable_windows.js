// Sélectionnez tous les éléments avec la classe 'window__surveillance-header'
const headers = document.querySelectorAll('.window__surveillance-header');

headers.forEach(header => {
  let mouseDown = false;
  let offsetX, offsetY;

  // Écoutez l'événement mousedown pour commencer le déplacement
  header.addEventListener('mousedown', (e) => {
    mouseDown = true;
    offsetX = e.clientX - header.parentElement.offsetLeft;
    offsetY = e.clientY - header.parentElement.offsetTop;
  });

  // Écoutez l'événement mousemove pour déplacer l'élément
  header.addEventListener('mousemove', (e) => {
    if (mouseDown) {
      header.parentElement.style.left = e.clientX - offsetX + 'px';
      header.parentElement.style.top = e.clientY - offsetY + 'px';
    }
  });

  // Écoutez l'événement mouseup pour arrêter le déplacement
  header.addEventListener('mouseup', () => {
    mouseDown = false;
  });

  // Écoutez l'événement mouseleave pour arrêter le déplacement si la souris quitte l'élément
  header.addEventListener('mouseleave', () => {
    mouseDown = false;
  });
});