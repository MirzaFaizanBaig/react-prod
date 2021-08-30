import React from 'react';
import './Header.css';

function Header(props) {

    function ColorSwitcher(){

        const TextSwitcher= document.querySelector('.circle span');
        const ColorSwitcher=document.querySelector('.circle')
           if(props.HeaderCount==='true'){
            
            ColorSwitcher.style.backgroundColor="#3DED97";
            TextSwitcher.innerHTML='LIVE';
           }
           else if(props.HeaderCount==='false'){
            ColorSwitcher.style.backgroundColor="#F25278";
           TextSwitcher.innerHTML='DRAFT';
           }
        }
  
      
       
    
    ColorSwitcher();
  //  pinkSwitcher();

    return (
        
        <div className="Container">
            <div className="wrapper">
                <div className="back-icon">icon</div>
                <div className="sdf">sdf</div>
                <div>
                    <p className="circle" ><span>DRAFT</span></p>
                </div>
            </div>
            <div>DEADLINE 24th December 2020</div>
        </div>

    
    );
   
}


    
Header.propTypes = {
    //  shareLink: PropTypes.string,
    //   sendForShare: PropTypes.func,

};

Header.defaultProps = {
    //   shareLink: '',
    //    sendForShare: () => { },

};

export default Header;