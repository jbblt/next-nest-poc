"use client";

import { GetTrendingReposQueryResult } from "@/graphql/trendingRepos.generated";
import { Repository } from "@/types/types.generated";
import RepositoryCard from "@/components/rsc/Repository";
import styled from "styled-components";

export const RSCGithubTrendingRepos = ({
  trendRepos,
}: {
  trendRepos: GetTrendingReposQueryResult["data"];
}) => {
  const repositories = trendRepos?.search.nodes as unknown as Array<
    Repository | undefined
  >;
  return (
    <div>
      <h3>Github Trending Repositories</h3>

      <RepoContainer>
        {repositories?.map((item) =>
          item ? <RepositoryCard repository={item} key={item.id} /> : null,
        )}
      </RepoContainer>
    </div>
  );
};

const RepoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;
