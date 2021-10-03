import axios from "axios";
import {get} from "partial.lenses";

import { SERVICE_DOMAIN } from "./constants";

export const QUERY_KEY = '@SEARCH/GET_NDCS';

const getNDCs = async (rxcui) => axios.get(`${SERVICE_DOMAIN}/REST/rxcui/${rxcui}/ndcs.json`);

export const getNDCList = (result) => {
    return get(['data', 'ndcGroup', 'ndcList', 'ndc'], result) || [];
}

export default getNDCs;
