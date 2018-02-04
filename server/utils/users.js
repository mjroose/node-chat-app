// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
  }
  removeUser(id) {
    var userToDelete = this.users.filter((user) => user.id === id);

    if (userToDelete) {
      var newUsersArray = this.users.filter((user) => user.id !== id);
      this.users = newUsersArray;
    }

    return userToDelete[0];
  }
  getUser(id) {
    var userArray = this.users.filter((user) => user.id === id);
    return userArray[0];
    //return user object
  }
  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};