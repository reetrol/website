// Tableau contenant les messages à afficher
const terminalMessages = [
    "./launch_REETROL_OS.sh",
    "downloading packages [] 0%",
    "downloading packages [#] 10%",
    "downloading packages [##] 20%",
    "downloading packages [###] 30%",
    "downloading packages [####] 40%",
    "downloading packages [#####] 50%",
    "downloading packages [######] 60%",
    "downloading packages [#######] 70%",
    "downloading packages [########] 80%",
    "downloading packages [#########] 90%",
    "downloading packages [##########] 100%",
    "checking data integrity",
    "data integrity check successful !",
    "loading data",
    "data loaded successfully !",
    "booting REETROL_OS",
    "system ready !",
    "WELCOME TO REETROL OS"
];


// Ecris une fonction qui écrit caaractère par caractère un message
function writeCaracterByCaracter(terminalTextElement, text, delay = 100) {
    return new Promise((resolve, reject) => {
        let index = 0;
        const interval = setInterval(() => {
            terminalTextElement.innerHTML += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    }
    );
}


// Fonction pour écrire le texte caractère par caractère
function writeTerminalText(terminalTextElement, text, delay = 100, isDotAnimation = false) {
    return new Promise((resolve, reject) => {
        if (isDotAnimation) {
            // Si le texte se termine par "...", afficher le message principal immédiatement
            const mainText = text;
            terminalTextElement.innerHTML += mainText.slice(0,-1);

            // Faire apparaître les points un par un, puis les faire disparaître tous en même temps
            let index = 0;
            terminalTextElement.innerHTML += " ";
            const dotAnimationInterval = setInterval(() => {
                if (index <= 3) {
                    terminalTextElement.innerHTML += ".";
                    index++;
                }
                if (index > 3) {
                    terminalTextElement.innerHTML = terminalTextElement.innerHTML.slice(0, -4);
                    index = 0;
                }
            }, delay);
            setTimeout(() => {
                clearInterval(dotAnimationInterval);
                terminalTextElement.innerHTML = terminalTextElement.innerHTML.slice(0, -index) + "\n";
                resolve();
            }, 2000); // Durée de l'animation des points
        } else {
            // Afficher les autres messages normalement
            terminalTextElement.innerHTML += text + "\n";
            resolve();
        }
    });
}

// Fonction pour exécuter l'animation du terminal
async function runTerminalAnimation() {
    const terminalAnimationElement = document.querySelector(".terminal__animation");
    const terminalTextElement = terminalAnimationElement.querySelector(".terminal__animation-text");
    const terminalElement = document.querySelector(".terminal");

    // Afficher le caractère ">" avant le début de l'animation
    terminalTextElement.innerHTML = ">>";

    // Écrire le message "START REETROL_OS" caractère par caractère
    await writeCaracterByCaracter(terminalTextElement, terminalMessages[0] + "\n", 50);

    // Attendre 2 secondes
    await new Promise(resolve => setTimeout(resolve, 2000));

    let delaySum = 0;

    // Boucle sur chaque message
    for (let index = 1; index < terminalMessages.length; index++) {
        const message = terminalMessages[index];
        const delay = message.startsWith("downloading packages") ? 100 : 2000;
        delaySum += delay;

        await new Promise(resolve => setTimeout(resolve, delay));

        if (message.startsWith("checking data integrity") || message.startsWith("loading data") || message.startsWith("booting REETROL_OS")){
            // Faire apparaître les "..." un par un, les faire disparaître puis les faire réapparaître un par un
            writeTerminalText(terminalTextElement, message + "\n", 200, true);
        } else if (index === terminalMessages.length - 1) {
            // Faire apparaître le message "WELCOME TO REETROL OS" en fondu entrant
            terminalTextElement.style.transition = "opacity 0s";
            terminalTextElement.style.opacity = 0;
            setTimeout(() => {
                terminalTextElement.innerHTML = message + "\n";
                terminalTextElement.style.opacity = 1;

                // Créer un nouvel élément img pour le GIF
                const gifElement = document.createElement("img");
                gifElement.src = "ressources/images/cameragif.gif";
                gifElement.className = "terminal-gif"; // Ajouter une classe à l'élément img

                // Ajouter le GIF au document
                terminalAnimationElement.appendChild(gifElement);
                const audio = new Audio('ressources/audio/startup_sound.mp3');
                audio.play();
                terminalElement.style.transition = "background-color 9.5s"; // Animer le changement de couleur de fond sur 1 seconde
                terminalElement.style.backgroundColor = "white"; // Changer la couleur de fond en blanc
                gifElement.style.mixBlendMode = "normal";

            }, 1000);
        } else {
            // Afficher les autres messages normalement
            terminalTextElement.innerHTML += message + "\n";
        }
    }

    // Supprimer l'animation après un certain temps
    setTimeout(() => {
        terminalElement.style.transition = "opacity 1s";
        terminalElement.style.display = "none";
    }, delaySum-9000); // Durée totale de l'animation + 2 secondes supplémentaires
}

// Lancer l'animation lorsque la page est chargée
window.onload = runTerminalAnimation;