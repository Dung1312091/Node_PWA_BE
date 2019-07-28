const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost/Node_PWA";
const connectDB = () => {
    mongoose.connect(mongoURL, {useNewUrlParser: true}).then(() => console.log("connect success"), error => console.log("connect Error",error));
}
module.exports = connectDB