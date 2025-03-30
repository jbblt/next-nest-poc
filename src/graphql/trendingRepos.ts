import gql from "graphql-tag";

export const getTrendingRepos = gql(`query GetTrendingRepos {
  search(query: "stars:>300000", type: REPOSITORY, first: 10) {

      nodes {
        ... on Repository {
          name
          id
          description
          url
          stargazerCount
          forkCount
        }
      }
    }
  
}`);
