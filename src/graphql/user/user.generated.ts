import * as Types from '../../types/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SearchTenFirstUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SearchTenFirstUsersQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', edges?: Array<{ __typename?: 'SearchResultItemEdge', node?: { __typename?: 'App' } | { __typename?: 'Discussion' } | { __typename?: 'Issue' } | { __typename?: 'MarketplaceListing' } | { __typename?: 'Organization' } | { __typename?: 'PullRequest' } | { __typename?: 'Repository' } | { __typename?: 'User', login: string, name?: string | null, url: any, avatarUrl: any } | null } | null> | null } };


export const SearchTenFirstUsersDocument = gql`
    query SearchTenFirstUsers {
  search(query: "type:user", type: USER, first: 10) {
    edges {
      node {
        ... on User {
          login
          name
          url
          avatarUrl
        }
      }
    }
  }
}
    `;

/**
 * __useSearchTenFirstUsersQuery__
 *
 * To run a query within a React component, call `useSearchTenFirstUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTenFirstUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTenFirstUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useSearchTenFirstUsersQuery(baseOptions?: Apollo.QueryHookOptions<SearchTenFirstUsersQuery, SearchTenFirstUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchTenFirstUsersQuery, SearchTenFirstUsersQueryVariables>(SearchTenFirstUsersDocument, options);
      }
export function useSearchTenFirstUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchTenFirstUsersQuery, SearchTenFirstUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchTenFirstUsersQuery, SearchTenFirstUsersQueryVariables>(SearchTenFirstUsersDocument, options);
        }
export function useSearchTenFirstUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchTenFirstUsersQuery, SearchTenFirstUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchTenFirstUsersQuery, SearchTenFirstUsersQueryVariables>(SearchTenFirstUsersDocument, options);
        }
export type SearchTenFirstUsersQueryHookResult = ReturnType<typeof useSearchTenFirstUsersQuery>;
export type SearchTenFirstUsersLazyQueryHookResult = ReturnType<typeof useSearchTenFirstUsersLazyQuery>;
export type SearchTenFirstUsersSuspenseQueryHookResult = ReturnType<typeof useSearchTenFirstUsersSuspenseQuery>;
export type SearchTenFirstUsersQueryResult = Apollo.QueryResult<SearchTenFirstUsersQuery, SearchTenFirstUsersQueryVariables>;