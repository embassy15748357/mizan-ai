const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/api/chat") {
        res.end(JSON.stringify({
            reply: "Hello! I am Mizan AI. My intelligence will continue to grow."
        }));
        return;
    }

    res.end(JSON.stringify({
        status: "Mizan AI Backend Running"
    }));
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
