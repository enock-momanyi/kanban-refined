import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Board from "@/components/Board";
import { useEffect, useState } from "react";
import createApolloClient from "../../graphql/client/apollo";
import { ApolloProvider, gql } from "@apollo/client";
import LoadBoard from "@/components/LoadBoard";
const inter = Inter({ subsets: ["latin"] });
const client = createApolloClient()
export default function Home() {
  return (
    <>
    <ApolloProvider client={client} >
      <LoadBoard />
    </ApolloProvider>
    </>
  );
}
