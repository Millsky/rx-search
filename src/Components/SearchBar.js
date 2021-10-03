import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import useGetDrugs from './hooks/useGetDrugs';
import { SelectedDrugContext } from "../Contexts/SelectedDrug";
import { filterResults, isDrugResultsValid } from "../API/getDrugs";
import SpellingSuggestions from "./SpellingSuggestions";

const SearchResultItem = ({ rxcui, name, ...props }) => {
    const history = useHistory();
    const { setSelectedDrug } = useContext(SelectedDrugContext);

    const navigateToDrugDetailsPage = () => {
        setSelectedDrug({
            rxcui,
            name,
            ...props,
        });
        history.push(`/drugs/${encodeURIComponent(name)}`);
    };

    const handleEnterPressed = (e) => {
        if (e.key === 'Enter') {
            navigateToDrugDetailsPage();
        }
    };

    return (<li tabIndex={0} onKeyPress={handleEnterPressed} key={rxcui} onClick={navigateToDrugDetailsPage}> { name } </li>);
}

const SearchResults = ({ searchResults = [] }) => {
    return (
        <div className="p-2">
            <ul>
                {  filterResults(searchResults).map(SearchResultItem) }
            </ul>
        </div>
    );
}


const SearchButton = ({ getDrugs }) => {
    const handleClick = () => {
        getDrugs();
    }
    return (<button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"} onClick={handleClick}>Search</button>)
}

const Search = () => {
    const [drugName, setDrugName] = useState('');
    const [showSpellingSuggestions, setShowSpellingSuggestions] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const getDrugs = useGetDrugs(drugName, setSearchResults);

    const getDrugResultsOnEnterPressed = async (e) => {
        if (e.key === 'Enter') {
            await getDrugs();
        }
    };

    useEffect(() => {
        if (!isDrugResultsValid(searchResults) && searchResults !== [] && drugName !== '') {
            setShowSpellingSuggestions(true);
        } else {
            setShowSpellingSuggestions(false);
        }
    }, [searchResults, drugName]);

    return (
        <div className="flex flex-col flex-auto justify-center items-center">
            <h2 className="text-4xl mb-8">Search For Drugs!</h2>
            <div className="w-96">
                <div className="w-full">
                    <div className="flex">
                        <input type={"search"} value={drugName} onChange={e => setDrugName(e.target.value)} onKeyPress={getDrugResultsOnEnterPressed} className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} />
                        <SearchButton getDrugs={getDrugs} />
                    </div>
                </div>
                { showSpellingSuggestions && <SpellingSuggestions drugName={drugName} setSearchBarValue={setDrugName} setSearchResults={setSearchResults} /> }
            </div>
            <SearchResults searchResults={searchResults} />
        </div>
    );
}

export default Search;
