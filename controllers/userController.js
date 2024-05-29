class UserController {
    constructor(userModel, userView) {
        this.userModel = userModel;
        this.userView = userView;
    }

    addUser(req, res) {
        const userInput = this.userView.getUserInput(req.body);
        this.userModel.addUser(userInput);
        this.userView.renderUsers(this.userModel.getAllUsers(), res);
    }

    getAllUsers(req, res) {
        const users = this.userModel.getAllUsers();
        res.json(users);
    }
}

module.exports = UserController;
