import express from "express"
import status from "express-status-monitor"
import fs from "fs"
const PORT = 3000
const app = express()
const data = "Muskan ansari"

app.use(status())
// app.get("/", (req, res) =>{
//     fs.readFile("stream.txt", "utf-8", (er, data) =>{
//         res.send(data)
//     })
// })
app.get("/read", (req, res) => {
    const readStream = fs.createReadStream("stream.txt", "utf-8")
    readStream.on("start", (chunk) => res.write(chunk))
    readStream.on("end", () => res.end())
})

// app.get("/write", (req, res) => {
//     const writeStream = fs.createWriteStream("stream.txt", "utf-8")
//     writeStream.write(data, "utf-8")
//     writeStream.on("end", () => res.end())
// })



app.listen(PORT, () => {
    console.log("App is listing on ", PORT);

}) 