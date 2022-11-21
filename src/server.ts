import express from "express";
import "reflect-metadata";
import "./database";
import { routes } from "./routes";
import cors from "cors";


const app = express();
const cookie = require('cookie-parser')
const port = process.env.PORT || 3000

const session = require('express-session')
var path = require('path')

app.use(cors())
 app.use(session({secret:'dafafdsfasfdsa'}))
// app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/view'))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded())
app.use(cookie())

app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Server is running in ${port}`)
})