"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { setVerbosity } from "ts-invariant";
import { PropsWithChildren } from "react";

if (process.env.NODE_ENV === "development") {
  setVerbosity("debug");
  loadDevMessages();
  loadErrorMessages();
}

function makeClient() {
  console.log("ICI");

  const httpLink = new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: process.env.GITHUB_TOKEN ?? "",
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
