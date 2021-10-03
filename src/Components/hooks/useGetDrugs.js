import {useQuery} from "react-query";
import getDrugs, {QUERY_KEY as GET_DRUGS_QUERY_KEY} from "../../API/getDrugs";

function useGetDrugs(drugName, onSuccess, onFailure) {
    const { refetch } = useQuery([GET_DRUGS_QUERY_KEY, drugName], async (queryContext) => {
        const data = await getDrugs(queryContext.queryKey[1]);
        return data;
    }, { enabled: false, onSuccess: async (d) => {
            onSuccess(d);
        }});

    return refetch;
}

export default useGetDrugs;
