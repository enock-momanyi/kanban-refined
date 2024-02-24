import { useMutation } from "@apollo/client";
import ADD_CARD from "../../graphql/mutations/AddCardMutation";

const useAddCard = () => {
    const [addCardDB, {error}] = useMutation(ADD_CARD)

    const cardError = error
    return {addCardDB, cardError}
}

export default useAddCard