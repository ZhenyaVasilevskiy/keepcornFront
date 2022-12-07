import TopAssistantImage from "../../../images/TopAssistant.svg"
import VerifiedIcon from "../../../images/verify-icon.svg"
import "./TopAssistant.scss"
const TopAssistant = ({name,cityAndBirdhday, image}:any) => {
    return(
        <div className="topAssistantCard">
            <img src={image} alt="" />
            <div className="cardTextData">
                <p className="name">
                    {name}  <img src={VerifiedIcon} alt="" />
                </p>
                <p className="cityAndBirdhday">
                    {cityAndBirdhday}
                </p>
            </div>
        </div>
    )
}

export default TopAssistant;