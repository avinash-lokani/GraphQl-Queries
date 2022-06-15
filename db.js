const tweet = [{
    id : "tweet_1",
    body : "Good News",
    date : "2014-01-01T23:28:56.782Z",
    authorId : "user_1",
    Stats:"tweet_1",
    
},
{
    id : "tweet_2",
    body : "Bad News",
    date : "2015-01-01T23:28:56.782Z",
    authorId : "user_2",
    Stats:"tweet_2"
},
{
    id : "tweet_3",
    body : "Bad News",
    date : "2015-01-01T23:28:56.782Z",
    authorId : "user_3",
    Stats:"tweet_3"
},
{
    id : "tweet_4",
    body : "Bad News",
    date : "2015-01-01T23:28:56.782Z",
    authorId : "user_4",
    Stats:"tweet_4"
}]

const user = [{
    id : "user_1",
    username : "am70",
    first_name : "avinash",
    last_name: "lokani",
    name: "Avinash Lokani",
    avatar_url : "https://picsum.photos/200/300"
},
{
    id : "user_2",
    username : "am70",
    first_name : "avinash",
    last_name: "lokani",
    name: "Avinash Lokani",
    avatar_url : "https://picsum.photos/200/300"
},
{
    id : "user_3",
    username : "am70",
    first_name : "avinash",
    last_name: "lokani",
    name: "Avinash Lokani",
    avatar_url : "https://picsum.photos/200/300"
},
{
    id : "user_4",
    username : "am70",
    first_name : "avinash",
    last_name: "lokani",
    name: "Avinash Lokani",
    avatar_url : "https://picsum.photos/200/300"
}]

const stats = [{
    id: "tweet_1",
    views : 1905,
    likes: 12,
    retweets : 69,
    responses : 123,
},
{
    id: "tweet_2",
    views : 1905,
    likes: 12,
    retweets : 69,
    responses : 1232,
},
{
    id: "tweet_3",
    views : 1905,
    likes: 12,
    retweets : 69
},
{
    id: "tweet_4",
    views : 1905,
    likes: 12,
    retweets : 69,
    responses : 12423,
}]

const meta = {
    count : 20
}

const notification = [{
    id: "tweet_1",
    date: "2014-01-01T23:28:56.782Z",
    type: "important",
 
},
{
    id: "tweet_2",
    date: "2014-01-01T23:28:56.782Z",
    type: "ads",
 
}]

exports.db = {
    tweet,
    stats,
    user,
    notification,
    meta
  };
  