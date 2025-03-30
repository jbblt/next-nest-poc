import { GetTrendingReposQueryResult } from "@/graphql/trendingRepos.generated";
import { getTrendingRepos } from "@/graphql/trendingRepos";
import { RSCGithubTrendingRepos } from "@/components/rsc/RSCGithubTrendingRepos";
import { ApolloWrapper } from "@/lib/apolloWrapper";
import { getClient } from "@/lib/apolloClient";

export default async function Page() {
  const { data } = await getClient().query<GetTrendingReposQueryResult["data"]>(
    {
      query: getTrendingRepos,
    },
  );
  return (
    <ApolloWrapper>
      <RSCGithubTrendingRepos trendRepos={data} />;
    </ApolloWrapper>
  );
}
