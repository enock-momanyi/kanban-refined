import { useMutation } from "@apollo/client";
import MOVE_CARD from "../../graphql/mutations/MoveCardMutation";

const useMoveCard = () => {
    const [moveCardDB, {error}] = useMutation(MOVE_CARD,{
        onError: () => {}
    })
    const moveError = error
    return {moveCardDB, moveError}
}

export default useMoveCard