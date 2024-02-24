import { useMutation } from "@apollo/client";
import EDIT_CARD from "../../graphql/mutations/EditCardMutation";

const useEditCard = () => {
    const [editCardDB, {error}] = useMutation(EDIT_CARD)

    return {editCardDB, error}
}

export default useEditCard