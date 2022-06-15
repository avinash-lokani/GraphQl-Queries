const {ApolloServer , gql} = require("apollo-server");
const { default: axios } = require("axios");

const tweets = await axios.get("http://localhost:8000/tweet");

const typeDefs = gql`

    type Tweet {
        id: String!
        body: String
        date: String
        Author: User
        Stats: Stat
    }

    type User {
        id: String!
        username: String
        first_name: String
        last_name: String
        name: String
        avatar_url:String
    }

    type Stat {
        views: Int
        likes: Int
        retweets: Int
    }

`

const resolvers = {
    Tweet: {
        Tweet: () => {return tweets;}
    }
}
