const UserModal = require("./model"); 
const addUser = (user) => {
      const User = new UserModal(
        user
  )
    return User.save(user)
}
 const  getUser = () => {
    return UserModal.find({})
}
module.exports = {
    addUser,
    getUser
}