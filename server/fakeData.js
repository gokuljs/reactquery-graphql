const userList = [{
        id: 1,
        name: "Gokul js ",
        username: "gokuljs",
        age: 13,
        nationality: "INDIA",
        friends: [{
                id: 2,
                name: "rahul",
                username: "rahul",
                age: 13,
                nationality: "CANADA",
            },
            {
                id: 3,
                name: "surya ",
                username: "surya",
                age: 13,
                nationality: "BRAZIL",
            },
        ],
    },
    {
        id: 2,
        name: "rahul",
        username: "rahul",
        age: 13,
        nationality: "CANADA",
    },
    {
        id: 3,
        name: "surya ",
        username: "surya",
        age: 13,
        nationality: "BRAZIL",
        friends: [{
            id: 4,
            name: "Anchit",
            username: "Anchit",
            age: 13,
            nationality: "CHINA",
        }, ],
    },
    {
        id: 4,
        name: "Anchit",
        username: "Anchit",
        age: 13,
        nationality: "CHINA",
    },
];

const movieList = [{
        id: 1,
        name: "avengers",
        year: 2019,
        isReleased: true,
    },
    {
        id: 2,
        name: "marvel",
        year: 2018,
        isReleased: false,
    },
    {
        id: 3,
        name: "spiderMan",
        year: 2000,
        isReleased: true,
    },
    {
        id: 4,
        name: "batman",
        year: 2022,
        isReleased: false,
    },
    {
        id: 5,
        name: "nemo",
        year: 2019,
        isReleased: false,
    },
];

module.exports = { userList, movieList };