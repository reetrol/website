// Ouvrir et fermer les fenêtres
document.getElementById('openWindowIcon').addEventListener('click', function() {
    document.querySelector('.window#draggableWindow').style.display = 'block';
  });
  document.querySelectorAll('.close-window-button')[0].addEventListener('click', function() {
    document.querySelector('.window#draggableWindow').style.display = 'none';
  });
  document.getElementById('openWindowIconLivre').addEventListener('click', function() {
    document.querySelector('.window#draggableWindowLivre').style.display = 'block';
  });
  document.querySelectorAll('.close-window-button')[1].addEventListener('click', function() {
    document.querySelector('.window#draggableWindowLivre').style.display = 'none';
  });
  
  // Rendre les fenêtres déplaçables
  makeWindowDraggable(document.querySelector('.window#draggableWindow'));
  makeWindowDraggable(document.querySelector('.window#draggableWindowLivre'));
  
  function makeWindowDraggable(window) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var header = window.querySelector('.window-header');
  
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