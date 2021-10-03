import { useContext } from 'react';
import {SelectedDrugContext} from "../Contexts/SelectedDrug";

const DrugInformationCard = () => {
    const { selectedDrug } = useContext(SelectedDrugContext);

    return (
        <div className="shadow-md p-4 w-96 mb-8">
            <div className="min-w-full">
                <h3 className="text-3xl mb-8">  { selectedDrug.name } </h3>
                <div>
                    ID: { selectedDrug.rxcui }
                </div>
                <div>
                    Name: { selectedDrug.name }
                </div>
                <div>
                    Synonym: { selectedDrug.synonym }
                </div>
            </div>
        </div>
    );
};

export default DrugInformationCard;
