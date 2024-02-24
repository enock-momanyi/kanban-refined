
import { useQuery } from "@apollo/client";
import GET_COLUMN from "../../graphql/queries/GetColumnQuery";


const useGetColumns=() => {
    const {data, loading,error} = useQuery(GET_COLUMN)

    return {data,loading,error}
}

export default useGetColumns