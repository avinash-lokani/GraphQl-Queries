exports.Tweet = {
    authorId: (parent,args,{db}) => {
        const userId = parent.authorId;
   
        return db.user.find(user => user.id === userId);
    },
    Stats:(parent,args,{db}) => {
        const tweetId = parent.Stats;
   
        return db.stats.find(stat => stat.id === tweetId);
    },
}