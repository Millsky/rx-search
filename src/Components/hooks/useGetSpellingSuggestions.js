import {useQuery} from "react-query";
import getSpellingSuggestions, {QUERY_KEY as GET_SPELLING_SUGGESTIONS_QUERY_KEY} from "../../API/getSpellingSuggestions";
import {get} from "partial.lenses";

function useGetSpellingSuggestions(drugName, onSuccess, onFailure) {
    const { refetch } = useQuery([GET_SPELLING_SUGGESTIONS_QUERY_KEY, drugName], async (queryContext) => {
        const data = await getSpellingSuggestions(queryContext.queryKey[1]);
        return data;
    }, { enabled: false, onSuccess: async (d) => {
            onSuccess(
                get(['data', 'suggestionGroup', 'suggestionList', 'suggestion'], d)
                || []
            );
        }});

    return refetch;
}

export default useGetSpellingSuggestions;
