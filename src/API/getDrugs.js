import axios from "axios";

import { SERVICE_DOMAIN } from "./constants";
import {get} from "partial.lenses";

export const QUERY_KEY = '@SEARCH/GET_DRUGS';

const getDrugs = async (drugName) => axios.get(`${SERVICE_DOMAIN}/REST/drugs.json?name=${drugName}`);

export function isDrugResultsValid(result) {
    return !!get(['data', 'drugGroup', 'conceptGroup'], result);
}

export const filterResults = (result) => {
    if (isDrugResultsValid(result)) {
        return get(['data', 'drugGroup', 'conceptGroup'], result).map((conceptGroup) => {
            return get('conceptProperties', conceptGroup);
        }).flat().filter(Boolean);
    }
    return [];
};


export default getDrugs;
