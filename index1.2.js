// Définir les réponses du chatbot basées sur des mots-clés
var responses = {
    "bonjour|salut|hello|hey": "Bonjour ! Comment puis-je vous aider ?",
    "comment.*va.*?|ça.*va|ca.*va": "Je vais bien, merci ! Et vous ?",
    "au revoir|bye|à bientôt|à plus": "Au revoir ! Passez une bonne journée.",
    "merci|thank you|thanks": "De rien ! Si vous avez d'autres questions, n'hésitez pas.",
    "qui.*es.*tu.*?": "Je suis un chatbot conçu pour répondre à vos questions.",
    "quelle.*heure.*?": "Je ne peux pas vous donner l'heure actuelle, mais vous pouvez vérifier sur votre appareil.",
    "default": "Je ne comprends pas. Pouvez-vous reformuler ?"
};

// Fonction pour envoyer un message
function sendMessage() {
    var userInput = document.getElementById('userInput').value.toLowerCase();
    document.getElementById('userInput').value = '';

    // Ajouter le message de l'utilisateur au chat
    addMessage(userInput, 'user');

    // Répondre au message de l'utilisateur
    var response = getResponse(userInput);
    addMessage(response, 'bot');
}

// Fonction pour obtenir la réponse basée sur les mots-clés
function getResponse(userInput) {
    for (var key in responses) {
        var regex = new RegExp(key, 'i');
        if (regex.test(userInput)) {
            return responses[key];
        }
    }
    return responses["default"];
}

// Fonction pour ajouter un message au chat
function addMessage(message, sender) {
    var chatBox = document.getElementById('chatBox');
    var messageElement = document.createElement('div');
    messageElement.className = 'message ' + sender;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Fonction pour vérifier si la touche Entrée est pressée
function checkEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
}

// Fonction pour ouvrir un nouvel onglet
function openNewTab() {
    window.open('https://www.example.com', '_blank');
}

