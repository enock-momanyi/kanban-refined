import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Board from "@/components/Board";
import { useEffect, useState } from "react";
import createApolloClient from "../../graphql/client/apollo";
import { ApolloProvider, gql } from "@apollo/client";
const inter = Inter({ subsets: ["latin"] });
const client = createApolloClient()
export default function Home() {
  const [allColumns, setAllColumns] = useState<any[]>([])
  let  columns= [
    {
        id:'1',
        columnTitle:'To Do',
        cards:[
            {
                id:'232',
                columnId:'1',
                cardText:'Create Reusable component'
            }
        ]
    },
    {
        id:'2',
        columnTitle:'Test',
        cards:[]
    },
    {
    id:'3',
    columnTitle:'Third',
    cards:[]
    }
]
useEffect(()=>{
  setAllColumns(columns)
},[])

const addColumn = (newColumn:any) => {
  newColumn ={
    id:'4',
    columnTitle:'Four',
    cards:[]    
  }
  setAllColumns(preColumns => [...preColumns,newColumn])
}

  return (
    <>
    <ApolloProvider client={client} >
      <div className="bg-blue-200 h-screen">
        <div className="mb-10">
          <Header />
        </div>
        <div>
          <Board 
            columns={allColumns} 
            setColumns={setAllColumns}
            addNewColumn={addColumn} />
        </div>
      </div>
    </ApolloProvider>
    </>
  );
}
