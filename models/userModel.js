const IUserModel = require('../interfaces/iUserModel');

class UserModel extends IUserModel {
    constructor() {
        super();
        this.users = [];
    }

    getAllUsers() {
        return this.users;
    }

    addUser(user) {
        this.users.push(user);
    }
}

module.exports = UserModel;
