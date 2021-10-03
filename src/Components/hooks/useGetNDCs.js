import { useQuery } from "react-query";
import getNDCs, {QUERY_KEY as GET_NDCS_QUERY_KEY, getNDCList } from "../../API/getNDCs";

const useGetNDCs = (rxcui, onSuccess, onError) => {
    const { refetch } = useQuery([GET_NDCS_QUERY_KEY, rxcui], async (queryContext) => {
        const data = await getNDCs(queryContext.queryKey[1]);
        return getNDCList(data);
    }, { enabled: false, onError: (e) => {
            onError(e)
        }, onSuccess: async (d) => {
            onSuccess(d);
        }});

    return refetch;
}

export default useGetNDCs;
