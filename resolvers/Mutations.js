const { v4: uuid } = require("uuid");

exports.Mutation = {
    createTweet:(parent,{input},{db}) => {
        const {body} = input;

        const newTweet = {
            id: uuid(),
            body,
            date: new Date(),
        }
        db.tweet.push(newTweet);

        console.log(db);

        return newTweet;
    }
}