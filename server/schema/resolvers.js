const { userList, movieList } = require("../fakeData");
const _ = require("lodash");
const resolvers = {
    Query: {
        // user Resolvers
        users: () => {
            return userList;
        },
        user: (_, args) => {
            const id = args.id;
            console.log(id);
            // const user = userList.find((val) => val.id === Number(id));
            const user = userList.find();
            return user;
        },
        movies: () => {
            return movieList;
        },
        movie: (_, args) => {
            const name = args.name;
            console.log(name);
            const movie = movieList.find((val) => val.name === name);
            return movie;
        },
    },
};

module.exports = { resolvers };