import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import { useState } from 'react';

import Header from './Components/Header';
import SearchDrugs from "./Routes/SearchDrugs";
import DrugDetails from "./Routes/DrugDetails";
import { SelectedDrugProvider } from "./Contexts/SelectedDrug";

const AppRouter = ({ layoutTop, layoutBottom }) => {
    return (<Router>
        { layoutTop }
        <Switch>
            <Route exact path="/drugs/search">
                <SearchDrugs />
            </Route>
            <Route exact path="/drugs/:drugName">
                <DrugDetails />
            </Route>
            <Route exact path="/">
                <Redirect to="/drugs/search" />
            </Route>
        </Switch>
        { layoutBottom }
    </Router>);
}

const AppRouterWithState = () => {
    const [selectedDrug, setSelectedDrug] = useState({});
    return (
        <SelectedDrugProvider value={{
            selectedDrug,
            setSelectedDrug,
        }}>
            <AppRouter layoutTop={<Header />} />
        </SelectedDrugProvider>
    );
}

export default AppRouterWithState;
