const sangwon = {
    name : "Sangwon",
    age: 27,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => sangwon
    }
};

export default resolvers;