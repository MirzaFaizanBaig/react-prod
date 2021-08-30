import React from 'react';
import './slidingCard.css';



let SlidingCard = (props) =>  {
const AnimatedCard=()=>{
    document.querySelector(".floater").classList.remove("float");
}
const Quotes=()=>{
    props.FooterUpdate("five");
    console.log("Quote clicked");
}
    
    return (
        <div>
            
            <div className="floater">
         <div className="container">
         <h4 className="heading">What do you want to add?</h4>
             <div className="box">
             <div className="quote" onClick={Quotes}>Quote(RFQ)</div>
             <div className="files">Files(Folder,Board,Vault)</div>
             <div className="documents">Documents</div>
             <div className="forms">Forms(Survey,Quiz,Poll)</div>
             </div>
             </div>   
        <div className="crossIcon" onClick={AnimatedCard}></div>
        </div>
        </div>
    );







}
export default SlidingCard;