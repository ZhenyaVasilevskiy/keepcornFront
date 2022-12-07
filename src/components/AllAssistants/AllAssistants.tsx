import "./AllAssistants.scss";
import "../../variables.scss"
import MultipleSelectPlaceholder from "../common/MultipleDropdown/MultipleDropdown";
import AssistantCard from "../common/Assistant/AssistantCard";
import ArrowIcon from "../../images/Disclosure.svg"
import Button from "@mui/material/Button";
const AllAssistants:React.FC = () => {
    return(
    <div className="AllAssistantsWrapper">
        <div className="AllAssistantsContent">
            <h2 className="sectionHeadline">ASSISTANTS</h2>
            <div className="filters">
                <MultipleSelectPlaceholder placeHolderName="Categories" listOfProperties={categories}></MultipleSelectPlaceholder>
                <MultipleSelectPlaceholder placeHolderName="High to Low" listOfProperties={filter}></MultipleSelectPlaceholder>
            </div>
            <div className="assistants">
                <AssistantCard/>
                <AssistantCard/>
                <AssistantCard/>
                <AssistantCard/>
                <AssistantCard/>
                <AssistantCard/>
            </div>
           <div className="seeAll"> <Button variant="outlined" className="qwe">See All </Button> </div>
        </div>
        
    </div>
    )
}

export default AllAssistants


const categories = [
    'category1',
    'category2',
    'category3',
   ];
   
   const filter = [
    "High to low",
    "Low to high",
];
   