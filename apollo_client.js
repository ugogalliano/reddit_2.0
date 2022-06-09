import { ApolloClient, InMemoryCache } from "@apollo/client";

//In the production mode , yuo must insert the APY KEY
const client = new ApolloClient({
  //This is a link of the STEPZEN API
  uri: "https://rotonda.stepzen.net/api/foolhardy-peacock/__graphql",
  headers: {
    Authorization: `Apikei ${process.env.APY_KEY_STEPZEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;
