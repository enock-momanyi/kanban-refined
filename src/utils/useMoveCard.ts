import { useMutation } from "@apollo/client";
import MOVE_CARD from "../../graphql/mutations/MoveCardMutation";

const useMoveCard = () => {
    const [moveCardDB, {error}] = useMutation(MOVE_CARD)

    return {moveCardDB, error}
}

export default useMoveCard