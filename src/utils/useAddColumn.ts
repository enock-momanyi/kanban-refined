import { useMutation } from "@apollo/client";
import ADD_COLUMN from "../../graphql/mutations/AddColumnMutation";
import GET_COLUMN from "../../graphql/queries/GetColumnQuery";

const useAddColumn = () => {
    const [addColumnDB, {error}] = useMutation(ADD_COLUMN,{
        refetchQueries:[
            GET_COLUMN
        ]
    })
    const columnError = error
    return {addColumnDB, columnError}
}

export default useAddColumn