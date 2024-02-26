import { useEffect, useRef, useState } from "react"
import AddCard from "./AddCard"
import KanbanColumn from "./KanbanColumn"
import InputComponent from "./InputComponent"
import uid from "@/utils/generateId"
import useAddColumn from "@/utils/useAddColumn"
import useAddCard from "@/utils/useAddCard"
import { CardInt } from "../../interfaces/types"
import { Alert } from "@mui/material"

const Board:React.FC<any> = ({columns,setColumns}) => {
    const [addColumn,setAddColumn] = useState(false)
    const [message, setMessage] = useState<string>()
    const {addColumnDB,columnError} = useAddColumn()
    const {addCardDB,cardError} = useAddCard()
    const columnRef = useRef<HTMLInputElement>();
    const componentLabel = 'Name';

    const toggle = () => {
        setAddColumn(!addColumn)
    }
    const cancelAdd = ()=> {
        toggle();
    }

    const insertCard = async(card: CardInt) => {
        const columnCopy =columns.slice()
        setColumns(
            columnCopy.map((col:any) => {
                if(col?.id === card.columnId){
                    return {...col, cards:[...col.cards, card]}
                }
                return col
            })
            )
       await addCardDB({variables:{...card}})     
    }
    const insertColumn = async () => {
        const columnName = columnRef?.current?.value;
        if(!columnName) return
        const column= {
            id: uid(),
            columnTitle: columnName,
            cards:[]
        }
        setColumns([...columns,column])
        await addColumnDB({variables:{id:column.id, columnTitle: column.columnTitle}})
        columnRef!.current!.value = ''
        toggle()
    }
    useEffect(()=>{
        if(columnError || cardError){
            setMessage('Network offline. Data not saved')
        }
    })
    return (
        //board has array of columns
        <>
        {message && <Alert severity="error">{message}</Alert>}
        <div className="grid grid-cols-5 gap-3">
                { !!columns.length &&
                columns.map((col:any) => 
                        <div key={col.id}>

                        <KanbanColumn 
                            columnId={col.id}
                            cards={col.cards} 
                            columnTitle={col.columnTitle} 
                            addCardFunc={insertCard} 
                            setColumns={setColumns}
                            setMessage={setMessage}
                            />
                        </div>
                )
            }
            
            {
                columns.length !== 5 &&  !addColumn &&           
                <div className="">
                    <AddCard
                        buttonText="Add Column"
                        buttonFunction={() => {toggle()}}
                        />
                </div>
            }
            {addColumn && <InputComponent 
                                label={componentLabel}
                                inputRefVar={columnRef}
                                cancelFunc={cancelAdd}
                                addFunc={insertColumn}
                                />}
        </div>
        </>
    )
}

export default Board