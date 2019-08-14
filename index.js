const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require("./db");

connectDB();

const userRouter = require("./api/users/route");
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())


const port = 3001
app.use(cors())



app.use("/users", userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))