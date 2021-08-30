import React from 'react';
import './Footer.css';




function Footer(props) {
    let CreateUpdate = () => {
      
        document.querySelector('.create').style.color="red";
        document.querySelector('.share').style.color="black";
        document.querySelector('.review').style.color="black";
        props.FooterUpdate('one');
        props.HeaderUpdate('false');
    }
    let ShareUpdate = () => {
       
        document.querySelector('.share').style.color="red";
        document.querySelector('.create').style.color="black";
        document.querySelector('.review').style.color="black";
        props.FooterUpdate('zero');
        props.HeaderUpdate('false');

    }
    let ReviewUpdate=()=>{
        props.HeaderUpdate('true');
        props.FooterUpdate('two'); 
        document.querySelector('.review').style.color="red"; 
        document.querySelector('.create').style.color="black";
         document.querySelector('.share').style.color="black";
        console.log('review clicked');
      
       
        
    }
    return (
        <div className="footer">
            <div className="create tab">
                <p onClick={CreateUpdate}
                >Create</p>
                          
            </div>
            <div className="share tab">
                <p onClick={ShareUpdate}>Share</p>
                
                </div>
                <div className="review tab">
            <p onClick={ReviewUpdate}>Review</p>
                
            </div>
            </div>
    );

}
export default Footer; 