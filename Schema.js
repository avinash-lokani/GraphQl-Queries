const { gql } = require("apollo-server");

exports.typeDefs = gql`

    type Query {
        tweets(limit:Int, skip:Int, sort_field:String): [Tweet!]
        authorId: User
        tweetsMeta: Meta
        user: User
        notification: [Notification]
        notificationMeta: Meta
        users: [User]
        tweet(id : ID!) : Tweet

    }
    type Mutation {
        createTweet(input: CreateTweet): Tweet
    }

    input CreateTweet{
        body: String
    }

    type Tweet {
        id: ID!
        body: String
        date: String
        authorId: User
        Stats: Stat
    }

    type User {
        id: ID!
        username: String
        first_name: String
        last_name: String
        name: String
        avatar_url:String
    }

    type Stat {
        id: ID!
        views: Int
        likes: Int
        retweets: Int
        responses: Int
    }

    type Notification {
        id: String
        date: String
        type: String
    }

    type Meta {
        count: Int
    }


`