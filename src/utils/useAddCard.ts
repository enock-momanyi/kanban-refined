import { useMutation } from "@apollo/client";
import ADD_CARD from "../../graphql/mutations/AddCardMutation";

const useAddCard = () => {
    let cardError = null
    const [addCardDB] = useMutation(ADD_CARD,{
        onError:(error => {
            cardError = error
        })
    })
    return {addCardDB, cardError}
}

export default useAddCard