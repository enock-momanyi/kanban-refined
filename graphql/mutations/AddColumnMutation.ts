import {gql} from '@apollo/client';

const ADD_COLUMN = gql`
    mutation AddColumn($id:ID!,$columnTitle: String!){
    addColumn(id: $id, columnTitle: $columnTitle){
        id,
        columnTitle,
        cards{
            id,
            cardText
        }
    }
}
`;
export default ADD_COLUMN;