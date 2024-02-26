import { Card, Divider, Stack } from "@mui/material"
import AddCard from "./AddCard"
import ColumnCard from "./ColumnCard"
import ColumnHeader from "./ColumnHeader"
import { DragEvent, useEffect, useRef, useState } from "react"
import InputComponent from "./InputComponent"
import uid from "@/utils/generateId"
import useMoveCard from "@/utils/useMoveCard"
import useClearColumn from "@/utils/useClearColumn"
import useDeleteColumn from "@/utils/useDeleteColumn"
import useRenameColumn from "@/utils/useRenameColumn"

const KanbanColumn: React.FC<any> = ({columnId,columnTitle,cards,addCardFunc,setColumns, setMessage})=> {
    const [addCard, setAddCard] = useState<boolean>(false)
    const [rename, setRename] = useState<boolean>(false)
    const {moveCardDB,moveError} = useMoveCard()
    const {clearColumnDB, clearError} = useClearColumn()
    const {deleteColumnDB, deleteError} = useDeleteColumn()
    const {renameColumnDB, renameError} = useRenameColumn()
    const cardRef = useRef<HTMLInputElement>()
    const titleRef=useRef<HTMLInputElement>()

    const toggle=() => {
        setAddCard(!addCard)
    }

    const cancelAdd = ()=> {
        toggle();
    }
    useEffect(()=>{
        if(moveError || clearError || deleteError || renameError){
            setMessage("Network offline. Data not saved")
        }
    })
    const insertCard = () => {
        const cardTitle = cardRef?.current?.value
        if(!cardTitle) return
        const card = {
            id: uid(),
            cardText: cardTitle,
            columnId: columnId
        }
        addCardFunc(card)
        cardRef!.current!.value = ''
        toggle()
    }
    const handleOnDrag = (e: DragEvent<HTMLDivElement>,cardId:any) => {
        /**
         * set the caedId as the data to be tranferred on onDrag event
         */
        e.dataTransfer.setData("CardId",cardId)
    }
    const handleOnDrop = async (e: DragEvent<HTMLDivElement>, columnId: String) => {
        e.preventDefault()
        const cardId = e.dataTransfer.getData("cardId")
        const card = JSON.parse(cardId)
        if(card.columnId === columnId) return
        setColumns((prevColumns:any[]) => prevColumns.map((col:any)=>{
            if(card.columnId === col.id){
                return {...col,cards: col.cards.filter(((cd:any) => cd.id !== card.id))}
            }else if(col.id === columnId){
                return {...col,cards:[...col.cards, {...card, columnId: columnId}]}
            }
            return col
        }))
        
        await moveCardDB({variables:{cardId: card.id, newColumnId: columnId}})

    }
    
    const handleOnDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const clearColumn = async() => {
        setColumns((prevColumns:any[]) =>prevColumns.map((col:any)=>{
            if(columnId === col.id){
                return {...col,cards: []}
            }
            return col
        }))
        await clearColumnDB({variables:{columnId}})
    }
    const deleteColumn = async() => {
        setColumns((prevColumns:any[]) =>prevColumns.filter((col:any)=>{
            //console.log(col)
            return columnId !== col.id
        }))
        await deleteColumnDB({variables:{columnId}})
    }
    const renameColumn = async () => {
        const newTitle = titleRef!.current!.value
        if(!newTitle || newTitle === columnTitle) return
        setColumns((prevColumns:any[]) => prevColumns.map((col:any)=>{
            if(columnId === col.id){
                return {...col,columnTitle:newTitle}
            }
            return col
        }))
        await renameColumnDB({variables:{columnId, columnTitle: newTitle}})
        setRename(prevRename=>!prevRename)
    }
    const functionSet = {
        rename: ()=>{setRename(ren=>!ren)},
        clear: clearColumn,
        deleteColumn:deleteColumn
    }
    return(
        <Card
        onDragOver={(e) => handleOnDragOver(e)}
        onDrop={(e)=> handleOnDrop(e,columnId)}
        >
            {
                !rename && 
                <ColumnHeader columnTitle={columnTitle} functionSet={functionSet} />
            }
            {
                rename && <InputComponent
                                label='Name'
                                value={columnTitle}
                                inputRefVar={titleRef}
                                cancelFunc={()=>{setRename(ren=>!ren)}}
                                addFunc={renameColumn} 
                                            />
            }
            <Divider/>
            <div className="flex flex-col items-center min-h-10">
            { !!cards.length &&
                cards.map((card:any) => {
                    return(
                        <ColumnCard key={card.id} cardText={card.cardText} handleOnDrag={(e: DragEvent<HTMLDivElement>) => handleOnDrag(e,JSON.stringify(card))}/>
                    )
                })

        }
        </div>
            <Divider/> 
            {
                !addCard && 
                <div className="flex justify-center">
                    <AddCard buttonText="Add Card" buttonFunction={toggle} />
                </div>
            }
            {
                addCard && 
                <InputComponent
                    label='Title'
                    inputRefVar={cardRef}
                    cancelFunc={cancelAdd}
                    addFunc={insertCard} 
                    />
            }
        </Card>
    )
}

export default KanbanColumn