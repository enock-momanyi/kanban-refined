import { CardInt, ColumnInt } from '../../../../interfaces/types'
import db from './db'
export const resolvers = {
    Query: {
        columns(){
            return db.columns
        },
        column(_: any,args: { id: any }){
            return db.columns.find((column: ColumnInt) => column.id === args.id)
        },
        hello(){
            return "Hello, world!"
        },
        allcards(){
            return db.cards
        }

    },
    Column:{
        cards(parent:ColumnInt){
            return db.cards.filter((card: CardInt) => card.columnId === parent.id.toString())
        }
    },
    Mutation:{
        addColumn(_: any,args: {id:string, columnTitle: string }){
            if(db.columns.length == 5) return
            let column = {
                id: args.id,
                columnTitle: args.columnTitle
            }
            db.columns.push(column)
            return column
        },
        addCard(_: any,args: {id:string, columnId: string; cardText: string }){
            let card = {
                id: args.id,
                columnId: args.columnId,
                cardText: args.cardText
            }
            db.cards.push(card)
            return card
        },
        renameColumn(_: any, args: { columnId: string; columnTitle: string }){
            db.columns = db.columns.map((col: ColumnInt) => {
                if(col.id.toString() === args.columnId){
                    return {...col, columnTitle: args.columnTitle}
                }
                return col
            })
            return db.columns.find((col: ColumnInt)=> col.id.toString() === args.columnId)
        },
        clearColumn(_: any,args: { columnId: string }){
            db.cards = db.cards.filter((cd: CardInt) => cd.columnId.toString() !== args.columnId)
        },
        deleteColumn(_: any, args: { columnId: string }){
            db.columns = db.columns.filter((col: ColumnInt) => col.id.toString() !== args.columnId)
            db.cards = db.cards.filter((cd: CardInt) => cd.columnId.toString() !== args.columnId)
        },
        editCard(_: any,args: { cardId: string; updatedText: string}){
            let card;
            db.cards= db.cards.map((cd: CardInt) => {
                if(cd.id.toString() === args.cardId){
                    card = {...cd,cardText: args.updatedText}
                    return card
                }
                return cd
            })
            return card
        },
        changeCardColumnId(_: any, args: { cardId: string; newColumnId: string }){
            let card;
            db.cards= db.cards.map((cd: CardInt) => {
                if(cd.id.toString() === args.cardId){
                    card = {...cd,columnId: args.newColumnId}
                    return card
                }
                return cd
            })
            return db.columns          
        }
    }
}
