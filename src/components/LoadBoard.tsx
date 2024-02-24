import { useEffect, useState } from "react"
import Board from "./Board"
import { ColumnCardInt } from "../../interfaces/types"
import useGetColumns from "@/utils/useGetColumns"

const LoadBoard:React.FC = () => {
    const [allColumns, setAllColumns] = useState<ColumnCardInt[]>([])
    const {data, loading,error} = useGetColumns()
//     let  columns= [
//       {
//           id:'1',
//           columnTitle:'To Do',
//           cards:[
//               {
//                   id:'232',
//                   columnId:'1',
//                   cardText:'Create Reusable component'
//               }
//           ]
//       },
//       {
//           id:'2',
//           columnTitle:'Test',
//           cards:[]
//       },
//       {
//       id:'3',
//       columnTitle:'Third',
//       cards:[]
//       }
//   ]
  useEffect(()=>{
    if(data){
    setAllColumns(data.columns)
    }
  },[data])
  if(loading){
    console.log("...loading ...")
  }
  if(error){
    console.log(error)
  }
    return(
        <Board columns={allColumns} setColumns={setAllColumns}/>
    )
}

export default LoadBoard