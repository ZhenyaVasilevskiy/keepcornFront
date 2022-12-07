import React from "react";
import image from "../../images/aboutPH.png"
import "./AboutProduct.scss"
const AboutProduct = () => {
    return(
        <div className="AboutWrapper">
            <div className="card" >
                <img src={image} alt="image"  className="backgroundImage"/>
                <span className="cardNumber"> 01 ПРОДУКТ</span>
                <span className="cardTitle"> Быстрый подбор</span>
                <span className="cardDescription">От 2 часов до 3 дней. Все Ассы уже внутри, и ждут, кого взять. </span>
            </div>
            <div className="card" >
                <img src={image} alt="image"  className="backgroundImage"/>
                <span className="cardNumber"> 01 ПРОДУКТ</span>
                <span className="cardTitle"> Быстрый подбор</span>
                <span className="cardDescription">От 2 часов до 3 дней. Все Ассы уже внутри, и ждут, кого взять. </span>
            </div>
            <div className="card" >
                <img src={image} alt="image"  className="backgroundImage"/>
                <span className="cardNumber"> 01 ПРОДУКТ</span>
                <span className="cardTitle"> Быстрый подбор</span>
                <span className="cardDescription">От 2 часов до 3 дней. Все Ассы уже внутри, и ждут, кого взять. </span>
            </div>
        </div>
    )
}

export default AboutProduct;