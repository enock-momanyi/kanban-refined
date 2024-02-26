import { useMutation } from "@apollo/client";
import RENAME_COLUMN from "../../graphql/mutations/RenameColumnMutation";

const useRenameColumn = () => {
    const [renameColumnDB, {error}] = useMutation(RENAME_COLUMN,{
        onError: () => {
            
        }
    })
    const renameError = error
    return {renameColumnDB, renameError}
}
export default useRenameColumn