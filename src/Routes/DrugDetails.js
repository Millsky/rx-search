import DrugInformationCard from "../Components/DrugInformationCard";
import AssociatedNDCs from "../Components/AssociatedNDCs";

const DrugDetails = () => {
    return (
        <div className="w-full flex items-center flex-col flex-full">
            <DrugInformationCard />
            <AssociatedNDCs />
        </div>
    );
}

export default DrugDetails;
