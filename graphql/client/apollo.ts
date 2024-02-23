import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//     link: new HttpLink({uri:"/api/graphql"}),
//     cache: new InMemoryCache()
// })
export default function createApolloClient(){
    return new ApolloClient({
        link: new HttpLink({uri:"/api/graphql"}),
        cache: new InMemoryCache()
    })
}
