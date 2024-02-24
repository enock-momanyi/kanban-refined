import { useMutation } from "@apollo/client";
import CLEAR_COLUMN from "../../graphql/mutations/ClearColumnMutation";

const useClearColumn = () => {
    const [clearColumnDB, {error}] = useMutation(CLEAR_COLUMN)
    const clearError = error
    return {clearColumnDB, clearError}
}

export default useClearColumn