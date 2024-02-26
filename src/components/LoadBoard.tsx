import { useEffect, useState } from "react"
import Board from "./Board"
import { ColumnCardInt } from "../../interfaces/types"
import useGetColumns from "@/utils/useGetColumns"
import Header from "./Header"

const LoadBoard:React.FC = () => {
    const [allColumns, setAllColumns] = useState<ColumnCardInt[]>([])
    const {data, loading,error} = useGetColumns()
  useEffect(()=>{
    if(data){
    setAllColumns(data.columns)
    }
  },[data])
    return(
    
        <>
      <div className="mb-10">
        <Header />
      </div>
      <div></div>
        <Board columns={allColumns} setColumns={setAllColumns}/>
        </>
    )
}

export default LoadBoard