import { useRef, useState } from "react"
import AddCard from "./AddCard"
import KanbanColumn from "./KanbanColumn"
import InputComponent from "./InputComponent"
import uid from "@/utils/generateId"

const Board:React.FC<any> = ({columns, addNewColumn,setColumns}) => {
    const [addColumn,setAddColumn] = useState(false)
    const columnRef = useRef<HTMLInputElement>();
    const componentLabel = 'Name';

    const toggle = () => {
        setAddColumn(!addColumn)
    }
    const cancelAdd = ()=> {
        toggle();
    }

    const insertCard = (card:any) => {
        const columnCopy =columns.slice()
        setColumns(
            columnCopy.map((col:any) => {
                if(col?.id === card.columnId){
                    return {...col, cards:[...col.cards, card]}
                }
                return col
            })
            )

    }
    const insertColumn = () => {
        const columnName = columnRef?.current?.value;
        if(!columnName) return
        const column= {
            id: uid(),
            columnTitle: columnName,
            cards:[]
        }
        setColumns([...columns,column])
        columnRef!.current!.value = ''
        toggle()
    }
    return (
        //board has array of columns
        <div className="grid grid-cols-5 gap-3">
            
                {
                columns.map((col:any) => 
                        <div key={col.id}>

                        <KanbanColumn 
                            columnId={col.id}
                            cards={col.cards} 
                            columnTitle={col.columnTitle} 
                            addCardFunc={insertCard} 
                            setColumns={setColumns}
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
    )
}

export default Board