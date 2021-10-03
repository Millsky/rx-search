import axios from "axios";

import { SERVICE_DOMAIN } from "./constants";

export const QUERY_KEY = '@SEARCH/GET_SPELLING_SUGGESTIONS';

const getSpellingSuggestions = async (drugName) => axios.get(`${SERVICE_DOMAIN}/REST/spellingsuggestions.json?name=${drugName}`);

export default getSpellingSuggestions;
