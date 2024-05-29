const IUserView = require('../interfaces/iUserView');

class UserView extends IUserView {
    renderUsers(users, res) {
        res.json(users);
    }

    getUserInput(body) {
        return {
            name: body.name,
            age: body.age
        };
    }
}

module.exports = UserView;
