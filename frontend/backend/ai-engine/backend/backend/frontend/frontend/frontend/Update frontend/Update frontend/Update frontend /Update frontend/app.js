function sendMessage() {
    const input = document.getElementById("message");
    const chat = document.getElementById("chat");

    if (input.value.trim() === "") {
        return;
    }

    chat.innerHTML += `
        <p><strong>You:</strong> ${input.value}</p>
        <p><strong>Mizan AI:</strong> I received your message.</p>
    `;

    input.value = "";
}
