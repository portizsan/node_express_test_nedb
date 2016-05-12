var Document = require('camo').Document;

class User extends Document {
    constructor() {
        super();
        this.name = String;
        this.created = {
            type: Date,
            default: Date.now
        };
    }

    static collectionName() {
        return 'users';
    }
}