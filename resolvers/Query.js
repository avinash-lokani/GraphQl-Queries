const { db } = require("../db");


exports.Query = {
    tweets:(parent, {limit, skip , sort_field}, { db }) => {

        let tweets = db.tweet;

            if(limit){
               tweets = db.tweet.slice(0, limit)
            };

            if(skip){
                tweets.splice(skip, 1);
            }

            if(sort_field){
                tweets.sort((a,b) => a.date - b.date);
            }


       return tweets;
    },

    

    users: (parent, args, { db }) => {
        
        return db.user;
    },
    user: (parent, {id} , {db}) => {
    
        return db.user.find((user) => user.id === id);
    },
    tweet: (parent, {id} , {db}) => {
    
        return db.tweet.find((tweet) => tweet.id === id);
    },

    tweetsMeta : (parent, {id} , {db}) => {
        return db.meta;
    },

    notification:(parent, args, { db }) => {
    
        return db.notification;
    },

}