//import ButtonGroup from "../common/ButtonGroup/ButtonGroup";
import "./TopAssistants.scss"
import TopAssistantImage from "../../images/TopAssistant.svg"
import ph2 from "../../images/ph2.svg"
import { Button } from "@mui/material";
import ArrowIcon from "../../images/Disclosure.svg"
import TopAssistant from "../common/TopAssistant/TopAssistantCard";
import ButtonGroup from "../common/ButtonGroup/ButtonGroup";

const TopAssistants:React.FC = () => {
    return(
    <div className="TopAssistantsWrapper">
        <div className="TopAssistantsContent">
            <h2 className="sectionHeadline">TOP ASSISTANTS</h2>
            <ButtonGroup/>
            <div className="Cards">
                <TopAssistant name={"Islam Kara"} cityAndBirdhday={"USA, Los Angeles  •  29.12.1997"} image={TopAssistantImage}/>
                <TopAssistant name={"Maxim Maxim"} cityAndBirdhday={"USA, Los Angeles  •  29.12.1997"} image={ph2}/>
                <TopAssistant name={"Daniil Danya"} cityAndBirdhday={"USA, Los Angeles  •  29.12.1997"} image={ph2}/>
                <TopAssistant name={"Yauheni Eugene"} cityAndBirdhday={"USA, Los Angeles  •  29.12.1997"} image={TopAssistantImage}/>
            </div>
            
            <div className="seeAllButton">
            <Button variant="outlined" className="seeAllButton">See All  <img src={ArrowIcon} alt="" /></Button>
            </div>
            
        </div>
    </div>)
}

export default TopAssistants;