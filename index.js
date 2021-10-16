const express = require("express")
const sass = require("node-sass-middleware")
const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded(true))
app.use(express.json())
app.use("/", require("./server/router"))
app.use(express.static("./public"))
app.use(
    sass({
        src: __dirname + "/public/stylesheet/scss",
        dest: __dirname + "/public/stylesheet/css",
        debug: true
    })
)

app.set("view engine", "pug")
app.set("views", "./server/templates")

app.listen(port)