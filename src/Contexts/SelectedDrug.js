import { createContext } from 'react';

export const SelectedDrugContext = createContext({});

export const SelectedDrugProvider = ({ value, children }) => {
    return (
        <SelectedDrugContext.Provider value={value}>
            { children }
        </SelectedDrugContext.Provider>
    );
}
