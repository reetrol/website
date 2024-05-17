document.addEventListener("DOMContentLoaded", function() {
    const button_help = document.getElementById('help__surveillance-button');
    const button_close = document.getElementById('close-help__surveillance-button');
    const help_window = document.getElementsByClassName('help__surveillance')[0];

    button_help.addEventListener('click', function() {
        if (!help_window.classList.contains('show')) {
            help_window.classList.add('show');
        }
    });
    button_close.addEventListener('click', function() {
        if(help_window.classList.contains('show')) {
            help_window.classList.remove('show');
        }
    });
});



const textIntro = document.querySelector('.text__intro');
const windowSurveillance = document.getElementById('window__surveillance-scene');

function adjustWindowSurveillancePosition() {
    if (window.innerWidth <= 647) {
      const textIntroHeight = textIntro.offsetHeight;
      const textIntroTop = textIntro.offsetTop;
      windowSurveillance.style.top = `${textIntroTop + textIntroHeight + 50}px`;
      windowSurveillance.style.left= '50%';
      windowSurveillance.style.transform= 'translateX(-50%)';
    } else {
      windowSurveillance.style.top = '230px'; // ou autre valeur par défaut
      windowSurveillance.style.left= '5%';
      windowSurveillance.style.transform= 'translateX(0%)';
    }
  }
  
window.addEventListener('resize', adjustWindowSurveillancePosition);
adjustWindowSurveillancePosition(); // exécute la fonction une fois que le document est chargé


const textMusic = document.querySelector('.text__music');
const musicContainer = document.getElementById('container__music');

function adjustMusicContainerPosition() {
  const textMusicHeight = textMusic.offsetHeight;
  const textMusicTop = textMusic.offsetTop;
    if (window.innerWidth <= 647) {
      musicContainer.style.top = `${textMusicTop + textMusicHeight + 50}px`;
      musicContainer.style.left= '50%';
      musicContainer.style.transform= 'translateX(-50%)';
    } else {
      musicContainer.style.top = `${textMusicTop + textMusicHeight + 50}px`;
      musicContainer.style.left= '50%';
      musicContainer.style.transform= 'translateX(-50%)';
    }
}