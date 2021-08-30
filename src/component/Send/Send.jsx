import React from 'react';
import '../Footer/Footer.css';
import './Send.css';


let Card = (props) => {

    let InnerCardClick = () => {
        const ClickEvent = () => {
            console.log("clicked");
            props.FooterUpdate('three');
        }
        return (props.click ? ClickEvent() : console.log('not clicked'));
    }
    
    return (
        <div className="private" style={{ backgroundColor: props.cardColor }}
            onClick={InnerCardClick}>
            <div className="text" style={{ color: props.textColor }}>
                <h5>{props.cardTitle}</h5>
                <p>{props.cardLine}</p>

            </div>
            <div className="send-icon">
                <img src={props.image} width="50" height="50" />
            </div>

        </div>
    );







}
export default Card;