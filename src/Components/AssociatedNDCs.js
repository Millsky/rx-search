import { useState, useEffect, useContext } from 'react';

import useGetNDCs from "./hooks/useGetNDCs";
import {SelectedDrugContext} from "../Contexts/SelectedDrug";

const AssociatedNDCs = () => {
    const { selectedDrug } = useContext(SelectedDrugContext);
    const [NDCs, setNDCs] = useState([]);
    const getNDCs = useGetNDCs(selectedDrug.rxcui, setNDCs);
    useEffect(() => {
        getNDCs();
    }, [getNDCs]);
    return (
        <div className="shadow-md p-4 w-96 mb-8">
            <div className="min-w-full">
                <h3 className="text-3xl mb-8">Associated NDCs</h3>
                <ul>
                    { NDCs.map((ndc) => {
                        return <li key={ndc}> { ndc } </li>
                    }) }
                </ul>
            </div>
        </div>
    );
}

export default AssociatedNDCs;
