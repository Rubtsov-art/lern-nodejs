const http = require("http")

const server = http.createServer((req, res) => {
        console.log(req.url)

        res.write("<h1>Hello from server</h1>")
        res.write("<h2>I meant your server</h2>")
        res.end(`
            <div style='background-color:red; width:300px; height:500px'>
                <p>thank you</p>
            </div>
        `)
    }
)

server.listen(3000, () => {
    console.log("server is running...")
})