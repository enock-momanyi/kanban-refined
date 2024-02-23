import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const server = new ApolloServer({
    resolvers: resolvers,
    typeDefs: typeDefs
})

export default startServerAndCreateNextHandler(server)