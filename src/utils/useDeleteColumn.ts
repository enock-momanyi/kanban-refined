import { useMutation } from "@apollo/client";
import DELETE_COLUMN from "../../graphql/mutations/DeleteColumnMutation";

const useDeleteColumn = () => {
    const [deleteColumnDB, {error}] = useMutation(DELETE_COLUMN)
    const deleteError = error
    return {deleteColumnDB, deleteError}
}

export default useDeleteColumn