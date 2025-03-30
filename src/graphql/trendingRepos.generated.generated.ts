import * as Types from '../types/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetTrendingReposQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTrendingReposQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', nodes?: Array<{ __typename: 'App' } | { __typename: 'Discussion' } | { __typename: 'Issue' } | { __typename: 'MarketplaceListing' } | { __typename: 'Organization' } | { __typename: 'PullRequest' } | { __typename: 'Repository', name: string, description?: string | null, url: any, stargazerCount: number } | { __typename: 'User' } | null> | null } };


export const GetTrendingReposDocument = gql`
    query GetTrendingRepos {
  search(query: "stars:>300000", type: REPOSITORY, first: 10) {
    nodes {
      __typename
      ... on Repository {
        name
        description
        url
        stargazerCount
      }
    }
  }
}
    `;

/**
 * __useGetTrendingReposQuery__
 *
 * To run a query within a React component, call `useGetTrendingReposQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrendingReposQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrendingReposQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrendingReposQuery(baseOptions?: Apollo.QueryHookOptions<GetTrendingReposQuery, GetTrendingReposQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrendingReposQuery, GetTrendingReposQueryVariables>(GetTrendingReposDocument, options);
      }
export function useGetTrendingReposLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrendingReposQuery, GetTrendingReposQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrendingReposQuery, GetTrendingReposQueryVariables>(GetTrendingReposDocument, options);
        }
export function useGetTrendingReposSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTrendingReposQuery, GetTrendingReposQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTrendingReposQuery, GetTrendingReposQueryVariables>(GetTrendingReposDocument, options);
        }
export type GetTrendingReposQueryHookResult = ReturnType<typeof useGetTrendingReposQuery>;
export type GetTrendingReposLazyQueryHookResult = ReturnType<typeof useGetTrendingReposLazyQuery>;
export type GetTrendingReposSuspenseQueryHookResult = ReturnType<typeof useGetTrendingReposSuspenseQuery>;
export type GetTrendingReposQueryResult = Apollo.QueryResult<GetTrendingReposQuery, GetTrendingReposQueryVariables>;