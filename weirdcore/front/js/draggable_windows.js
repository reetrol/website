const headers = document.querySelectorAll('.window__surveillance-header');

headers.forEach(header => {
  let mouseDown = false;
  let offsetX, offsetY;
  let elementBeingDragged = null;
  // commencer le déplacement
  header.addEventListener('mousedown', (e) => {
    mouseDown = true;
    offsetX = e.clientX - header.parentElement.offsetLeft;
    offsetY = e.clientY - header.parentElement.offsetTop;
    elementBeingDragged = header.parentElement;
  });

  // déplacer l'élément
  document.addEventListener('mousemove', (e) => {
    if (mouseDown && elementBeingDragged) {
      elementBeingDragged.style.left = e.clientX - offsetX + 'px';
      elementBeingDragged.style.top = e.clientY - offsetY + 'px';
    }
  });

  // arrêter le déplacement
  document.addEventListener('mouseup', () => {
    mouseDown = false;
    elementBeingDragged = null;
  });
});


const textIntro = document.querySelector('.text__intro');
const reset_button = document.getElementById('reset__surveillance-button');
const windowSurveillance = document.getElementById('window__surveillance-scene');

// pour reset la fenetre
reset_button.addEventListener('click', () => {
  if (window.innerWidth <= 647){
    const textIntroHeight = textIntro.offsetHeight;
    const textIntroTop = textIntro.offsetTop;
    windowSurveillance.style.top = `${textIntroTop + textIntroHeight + 50}px`;
    windowSurveillance.style.left= '50%';
    windowSurveillance.style.transform= 'translateX(-50%)';
  } else {
    const window = reset_button.closest('.window__surveillance');
  window.style.left = '5%';
  window.style.top = '230px';
  }
});