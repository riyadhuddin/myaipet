function adoptPet() {
  document.getElementById('demo').style.display = 'block';
  window.scrollTo({
    top: document.getElementById('demo').offsetTop,
    behavior: 'smooth'
  });
}

function talkToPet() {
  const input = document.getElementById('pet-input');
  const messageBox = document.getElementById('pet-message');
  const userMsg = input.value.trim();
  if (!userMsg) return;
  // Simple AI pet response logic
  let reply = "";
  if (userMsg.toLowerCase().includes("hello")) {
    reply = "Woof! Hello to you too!";
  } else if (userMsg.toLowerCase().includes("play")) {
    reply = "Yay! Throw me a ball! 🎾";
  } else if (userMsg.toLowerCase().includes("food") || userMsg.toLowerCase().includes("hungry")) {
    reply = "Yum! I love treats!";
  } else if (userMsg.toLowerCase().includes("bye")) {
    reply = "I'll miss you! Come back soon!";
  } else {
    reply = "🐾 *wags tail* I love chatting with you!";
  }
  messageBox.textContent = reply;
  input.value = "";
}