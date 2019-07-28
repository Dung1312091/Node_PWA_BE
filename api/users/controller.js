
let userService = require("./service");
const addUser =  async(req, res) => {
    try {
        const body = req.body;
       let data = await userService.addUser(body);
        res.json({
            success: true,
            message: "create user success"
        })
    } catch (error) {
        console.log("error==>",error)
    }
}

const getUsers =  async(req, res) => {
    try {
        let users = await userService.getUser();
        res.json({
            success: true,
            message: "get users success",
            data: users
        })
    } catch (error) {
        console.log("error==>",error)
    }
}
module.exports = {
    getUsers,
    addUser
}