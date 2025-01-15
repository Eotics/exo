var responses = {
    "bonjour|salut|hello|hey": "Exotic : Bonjour ! Comment puis-je vous aider ?",
    "comment.*va.*?|ça.*va|ca.*va": "Exotic : Je vais bien, merci ! Et vous ?",
    "au revoir|bye|à bientôt|à plus": "Exotic : Au revoir ! Passez une bonne journée.",
    "merci|thank you|thanks": "Exotic : De rien ! Si vous avez d'autres questions, n'hésitez pas.",
    "qui.*es.*tu.*?": "Exotic : Je suis un chatbot conçu pour répondre à vos questions.",
    "quelle.*heure.*?": "Exotic : Je ne peux pas vous donner l'heure actuelle, mais vous pouvez vérifier sur votre appareil.",
    "default": "Exotic : Je ne comprends pas. Pouvez-vous reformuler ?"
};

function sendMessage() {
    var userInput = document.getElementById('userInput').value.toLowerCase();
    document.getElementById('userInput').value = '';
    addMessage(userInput, 'user');

    var response = getResponse(userInput);
    addMessage(response, 'bot');
}

function getResponse(userInput) {
    for (var key in responses) {
        var regex = new RegExp(key, 'i');
        if (regex.test(userInput)) {
            return responses[key];
        }
    }
    return responses["default"];
}

function addMessage(message, sender) {
    var chatBox = document.getElementById('chatBox');
    var messageElement = document.createElement('div');
    messageElement.className = 'message ' + sender;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
}

function openNewTab() {
    window.open('https://www.example.com', '_blank');
}
