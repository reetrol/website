let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
let palette = document.getElementById('palette');
let colors = palette.children;
let currentColor = 'black';
let drawing = false;
let lastX, lastY;

// Chat
let chatLog = document.getElementById('chat-log');
let pseudoInput = document.getElementById('pseudo');
let messageInput = document.getElementById('message');
let sendButton = document.getElementById('send');

sendButton.addEventListener('click', () => {
  let pseudo = pseudoInput.value;
  let message = messageInput.value;
  let messageHTML = `<p><strong>${pseudo} :</strong> ${message}</p>`;
  chatLog.innerHTML += messageHTML;
  pseudoInput.value = '';
  messageInput.value = '';
});

// Drawing
palette.addEventListener('click', (e) => {
  if (e.target.classList.contains('color')) {
    currentColor = e.target.style.backgroundColor;
    ctx.strokeStyle = currentColor;
  }
});

canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
  if (drawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
});