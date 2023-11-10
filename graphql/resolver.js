import { getById, getTeams } from "./db";

const resolvers = {
    Query: {
        teams: () => getTeams(),
        players: () => getById(),
    }
};

export default resolvers;