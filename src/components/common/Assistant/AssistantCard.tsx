import VerifiedIcon from "../../../images/verify-icon.svg"
import SimpleAssistant from "../../../images/SimpleAssistant.svg"
import "./AssistantCard.scss"
import Chip from "@mui/material/Chip"
const AssistantCard = () => {
    return(
        <div className="AssistantCard">
            <img src={SimpleAssistant} alt="" className="image" />
            <div className="textArea">
                <span className="name">Yauheni Vasileuski <img src={VerifiedIcon} alt="" /></span>
                <span className="city">USA, Los Angeles</span>

                <div className="categoties">
                    <Chip sx={{fontSize:"9px", padding:"0px"}} size="small" label="💸 Финансы" variant="outlined" />
                    <Chip sx={{fontSize:"9px"}} size="small" label="🔍 Поиск" variant="outlined" />
                </div> 
            </div>
        </div>
    )
}

export default AssistantCard;