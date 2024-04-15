document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les éléments du DOM
    const messageForm = document.querySelector(".message-form");
    const messageInput = document.querySelector(".message-form__input");
    const messageList = document.querySelector(".message-list");

    // Ajouter un événement de soumission au formulaire
    messageForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire

        // Récupérer le contenu du champ de saisie
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            // Créer un nouvel élément de message
            const messageItem = document.createElement("div");
            messageItem.textContent = messageText;

            // Ajouter la classe CSS pour le style
            messageItem.classList.add("message-item");

            // Ajouter le message à la liste des messages
            messageList.appendChild(messageItem);

            // Effacer le contenu du champ de saisie après l'envoi
            messageInput.value = "";
        }
    });
});