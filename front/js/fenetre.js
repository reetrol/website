// Ouvrir et fermer les fenêtres
document.getElementById('openWindowIcon').addEventListener('click', function() {
  var window = document.querySelector('.window#draggableWindow');
  var icon = document.getElementById('openWindowIcon');
  window.style.display = 'block';
  window.style.top = icon.offsetTop + 'px';
  window.style.left = icon.offsetLeft + 'px';
  var translateY = (window.innerHeight / 2 - icon.offsetTop) / window.innerHeight * 100;
  var translateX = (window.innerWidth / 2 - icon.offsetLeft) / window.innerWidth * 100;
  window.style.animation = `openWindow 0.5s forwards`;
  window.style.animationTimingFunction = `ease`;
  window.style.animationKeyframes = `
    0% {
      transform: scale(0) translate(0, 0);
      opacity: 0;
    }
    100% {
      transform: scale(1) translate(${translateX}%, ${translateY}%);
      opacity: 1;
    }
  `;
});
document.querySelectorAll('.window__close-button')[0].addEventListener('click', function() {
  document.querySelector('.window#draggableWindow').style.display = 'none';
});
document.getElementById('openWindowIconLivre').addEventListener('click', function() {
  var window = document.querySelector('.window#draggableWindowLivre');
  var icon = document.getElementById('openWindowIconLivre');
  window.style.display = 'block';
  window.style.top = icon.offsetTop + 'px';
  window.style.left = icon.offsetLeft + 'px';
  var translateY = (window.innerHeight / 2 - icon.offsetTop) / window.innerHeight * 100;
  var translateX = (window.innerWidth / 2 - icon.offsetLeft) / window.innerWidth * 100;
  window.style.animation = `openWindow 0.5s forwards`;
  window.style.animationTimingFunction = `ease`;
  window.style.animationKeyframes = `
    0% {
      transform: scale(0) translate(0, 0);
      opacity: 0;
    }
    100% {
      transform: scale(1) translate(${translateX}%, ${translateY}%);
      opacity: 1;
    }
  `;
});
document.querySelectorAll('.window__close-button')[1].addEventListener('click', function() {
  document.querySelector('.window#draggableWindowLivre').style.display = 'none';
});

// Rendre les fenêtres déplaçables
makeWindowDraggable(document.querySelector('.window#draggableWindow'));
makeWindowDraggable(document.querySelector('.window#draggableWindowLivre'));

function makeWindowDraggable(window) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var header = window.querySelector('.window__header');

  if (header) {
      header.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = stopDragging;
      document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      window.style.top = (window.offsetTop - pos2) + "px";
      window.style.left = (window.offsetLeft - pos1) + "px";
  }

  function stopDragging() {
      document.onmouseup = null;
      document.onmousemove = null;
  }
}
// // Ajouter un gestionnaire d'événements click pour l'icône de musique
// document.getElementById('iconMusic').addEventListener('click', function() {
//   var window = document.querySelector('.window#draggableWindowMusic');
//   var icon = document.getElementById('iconMusic');
//   window.style.display = 'block';
//   window.style.top = icon.offsetTop + 'px';
//   window.style.left = icon.offsetLeft + 'px';
//   var translateY = (window.innerHeight / 2 - icon.offsetTop) / window.innerHeight * 100;
//   var translateX = (window.innerWidth / 2 - icon.offsetLeft) / window.innerWidth * 100;
//   window.style.animation = `openWindow 0.5s forwards`;
//   window.style.animationTimingFunction = `ease`;
//   window.style.animationKeyframes = `
//     0% {
//       transform: scale(0) translate(0, 0);
//       opacity: 0;
//     }
//     100% {
//       transform: scale(1) translate(${translateX}%, ${translateY}%);
//       opacity: 1;
//     }
//   `;
// });

// // Ajouter un gestionnaire d'événements click pour le bouton de fermeture de la fenêtre de musique
// document.querySelectorAll('.window__close-button')[2].addEventListener('click', function() {
//   document.querySelector('.window#draggableWindowMusic').style.display = 'none';
// });