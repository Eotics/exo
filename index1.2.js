function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  let userInput = input.value.trim();
  if (userInput === "") return;

  // Ajout du message utilisateur
  const userMessage = document.createElement("div");
  userMessage.textContent = "👤 " + userInput;
  chatBox.appendChild(userMessage);

  // Normalisation du texte (suppression des accents)
  userInput = userInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Recherche de la réponse
  const response = getResponse(userInput);

  // Ajout du message du chatbot
  const botMessage = document.createElement("div");
  botMessage.textContent = "🤖 " + response;
  chatBox.appendChild(botMessage);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(userInput) {
  const responses = {
    "bonjour|salut|hello|hey": "Bonjour ! Comment puis-je vous aider ?",
    "comment.*va.*?|ça.*va|ca.*va": "Je vais bien, merci ! Et vous ?",
    "au revoir|bye|à bientôt|à plus": "Au revoir ! Passez une bonne journée.",
    "merci|thank you|thanks": "De rien ! Si vous avez d'autres questions, n'hésitez pas.",
    "qui.*es.*tu.*?": "Je suis un chatbot conçu pour répondre à vos questions.",
    "quelle.*heure.*?": "Je ne peux pas vous donner l'heure actuelle, mais vous pouvez vérifier sur votre appareil.",
    "default": "Je ne comprends pas. Pouvez-vous reformuler ?"
  };

  for (let key in responses) {
    const regex = new RegExp(key, "i");
    if (regex.test(userInput)) {
      return responses[key];
    }
  }
  return responses["default"];
}
