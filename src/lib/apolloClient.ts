import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";
export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: process.env.GITHUB_TOKEN ?? "",
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
});
