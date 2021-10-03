import { useState, useEffect } from 'react';

import useGetDrugs from "./hooks/useGetDrugs";
import useGetSpellingSuggestions from "./hooks/useGetSpellingSuggestions";

const SpellingSuggestionItem = ({ drugName, setSearchBarValue, setSearchResults, index }) => {
    const getDrugs = useGetDrugs(drugName, setSearchResults);
    const getResultsForSelectedDrugAndSetSearchBarValue = () => {
        getDrugs(drugName);
        setSearchBarValue(drugName);
    }
    const onEnterPressed = (e) => {
        if (e.key === 'Enter') {
            getResultsForSelectedDrugAndSetSearchBarValue();
        }
    }

    return (<li tabIndex={0} onKeyPress={onEnterPressed} key={`${drugName}-${index}`} onClick={getResultsForSelectedDrugAndSetSearchBarValue}> { drugName } </li>)
};

const SpellingSuggestions = ({ drugName, setSearchBarValue, setSearchResults }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [hasError, setHasError] = useState(false)
    const getSuggestions = useGetSpellingSuggestions(drugName, setSuggestions, setHasError);

    // Handle Loading of suggestions
    useEffect(() => {
        getSuggestions(setSuggestions);
    }, [drugName, getSuggestions]);

    // Handle Error State
    useEffect(() => {
        if (suggestions.length === 0 && drugName.length > 0) {
            setHasError(true);
        } else {
            setHasError(false);
        }
    }, [suggestions.length, drugName.length]);

    return (<div>
        { hasError
            ? (
                <div> Your search returned no results, please try a different search </div>
            )
            : (
                <div className="p-2 shadow-xl">
                    <ul>
                        {
                            suggestions.map((spellingSuggestion, index) => {
                                return (<SpellingSuggestionItem index={index} drugName={spellingSuggestion} setSearchBarValue={setSearchBarValue} setSearchResults={setSearchResults} />);
                            })
                        }
                    </ul>
                </div>
            )

        }
    </div>);
}

export default SpellingSuggestions;