async function sendMessage() {
    const input = document.getElementById("message");
    const chat = document.getElementById("chat");

    if (!input.value.trim()) return;

    chat.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;

    chat.innerHTML += `<p><strong>Mizan AI:</strong> Hello! I am Mizan AI. My intelligence will continue to grow.</p>`;

    input.value = "";
}
