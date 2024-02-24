import {gql} from '@apollo/client';

const ADD_CARD = gql`
mutation AddCard($id: ID!,$cardText: String!, $columnId: ID!){
    addCard(id: $id, cardText: $cardText, columnId: $columnId){
        id,
        cardText
    }
}
`;
export default ADD_CARD;