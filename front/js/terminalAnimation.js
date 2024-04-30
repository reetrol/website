// Tableau contenant les messages à afficher
const terminalMessages = [
    "START REETROL_OS",
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
    "checking data integrity ...",
    "data integrity check successful !",
    "loading data ...",
    "data loaded successfully !",
    "booting REETROL_OS ...",
    "system ready !",
    "WELCOME TO REETROL OS"
];

// Fonction pour écrire le texte caractère par caractère
function writeTerminalText(terminalTextElement, text, delay = 100, isDotAnimation = false) {
    return new Promise((resolve, reject) => {
        if (isDotAnimation) {
            // Si le texte se termine par "...", afficher le message principal immédiatement
            const mainText = text.slice(0, -3);
            terminalTextElement.innerHTML += mainText;

            // Faire apparaître les points un par un, puis les faire disparaître tous en même temps
            let index = 0;
            const dotAnimationInterval = setInterval(() => {
                if (index > 0) {
                    terminalTextElement.innerHTML += ".";
                }
                index++;
                if (index > 3) {
                    terminalTextElement.innerHTML = terminalTextElement.innerHTML.slice(0, -3);
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

    // Afficher le caractère ">" avant le début de l'animation
    terminalTextElement.innerHTML = ">";

    // Écrire le message "START REETROL_OS" caractère par caractère
    await writeTerminalText(terminalTextElement, terminalMessages[0] + "\n", 50);

    let delaySum = 0;

    // Boucle sur chaque message
    for (let index = 1; index < terminalMessages.length; index++) {
        const message = terminalMessages[index];
        const delay = message.startsWith("downloading packages") ? 250 : 2000;
        delaySum += delay;

        await new Promise(resolve => setTimeout(resolve, delay));

        if (message.endsWith("...")) {
            // Faire apparaître les "..." un par un, les faire disparaître puis les faire réapparaître un par un
            writeTerminalText(terminalTextElement, message + "\n", 500, true);
        } else if (index === terminalMessages.length - 1) {
            // Faire apparaître le message "WELCOME TO REETROL OS" en fondu entrant
            terminalTextElement.style.transition = "opacity 2s";
            terminalTextElement.style.opacity = 0;
            setTimeout(() => {
                terminalTextElement.innerHTML += message + "\n";
                terminalTextElement.style.opacity = 1;
            }, 2000);
        } else {
            // Afficher les autres messages normalement
            terminalTextElement.innerHTML += message + "\n";
        }
    }

    // Supprimer l'animation après un certain temps
    setTimeout(() => {
        const terminalElement = document.querySelector(".terminal");
        terminalElement.style.display = "none";
    }, delaySum + 2000); // Durée totale de l'animation + 2 secondes supplémentaires
}

// Lancer l'animation lorsque la page est chargée
window.onload = runTerminalAnimation;