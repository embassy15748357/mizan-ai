function sendMessage() {
  const input = document.getElementById("message");
  const chat = document.getElementById("chat");

  const text = input.value;

  if (!text) return;

  chat.innerHTML += `<p><strong>You:</strong> ${text}</p>`;
  chat.innerHTML += `<p><strong>Mizan AI:</strong> I'm still being connected to my AI brain.</p>`;

  input.value = "";
}
