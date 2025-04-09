// index1.2.js

const responses = {
  "bonjour|salut|hello|hey": "Exotic : Bonjour ! Comment puis-je vous aider ?",
  "comment.*va.*?|ça.*va|ca.*va": "Exotic : Je vais bien, merci ! Et vous ?",
  "au revoir|bye|à bientôt|à plus": "Exotic : Au revoir ! Passez une bonne journée.",
  "merci|thank you|thanks": "Exotic : De rien ! Si vous avez d'autres questions, n'hésitez pas.",
  "qui.*es.*tu.*?": "Exotic : Je suis un chatbot conçu pour répondre à vos questions.",
  "quelle.*heure.*?": "Exotic : Je ne peux pas vous donner l'heure actuelle, mais vous pouvez vérifier sur votre appareil.",
  "default": "Exotic : Je ne comprends pas. Pouvez-vous reformuler ?"
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const userInput = input.value.trim();
  if (userInput === "") return;
  input.value = "";
  addMessage(userInput, "user");

  const response = getResponse(userInput);
  setTimeout(() => addMessage(response, "bot"), 500);
}

function getResponse(userInput) {
  for (let key in responses) {
    const regex = new RegExp(key, "i");
    if (regex.test(userInput)) {
      return responses[key];
    }
  }
  return responses["default"];
}

function addMessage(message, sender) {
  const chatBox = document.getElementById("chatBox");
  const messageElement = document.createElement("div");
  messageElement.className = `message ${sender}`;
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("userInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
