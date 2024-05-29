class IUserView {
    renderUsers(users, res) {
        throw new Error("Method not implemented.");
    }

    getUserInput(body) {
        throw new Error("Method not implemented.");
    }
}

module.exports = IUserView;
