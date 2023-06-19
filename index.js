const app = require("express")();

// test if the reserver is sending response successfully
app.get("/", (req, res) => res.send("hello!"));

app.listen(8080)
console.log("Listening on 8080")
// end of test

app.get("/stream", (req, res) => {
    // set head content type to text/event-stream
    res.setHeader("Content-Type", "text/event-stream");

    send(res)
    
});

let i = 0;
function send(res) {
    // send() is HTTP-specific, so we use write()
    // constantly writing packets onto the same TCP connection
    // the two \n\n signal that it's an event
    res.write("data: " + `hello${i++}!\n\n`);
    setTimeout(() => send(res), 1000);
}