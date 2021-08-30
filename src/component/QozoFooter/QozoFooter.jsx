import React from 'react';
import './QozoFooter.css';
import HomeIcon from '@material-ui/icons/Home';
import PermMediaSharpIcon from '@material-ui/icons/PermMediaSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import '../slidingCard/slidingCard';

const QozoFooter = (props) => {
    const AnimatedCard=()=>{
        document.querySelector(".floater").classList.add("float");
    }
    
    return (
        <div className="FooterContainer">
         <HomeIcon fontSize="large" className="images"/>   
         <PermMediaSharpIcon fontSize="large" className="images"/>
         
        <span className="images PlusIcon"
        onClick={AnimatedCard}/>
        <SearchSharpIcon fontSize="large" className="images"/>
        <PersonSharpIcon fontSize="large" className="images"/>
        </div>)
}
export default QozoFooter ;