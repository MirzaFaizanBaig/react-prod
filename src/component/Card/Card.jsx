import React from 'react';
import './Card.css';
import Bond from '../../assets/images/BondQozo.jpg';

let Qozo = (props) => {
    const ShareWindow=()=>{
        props.FooterUpdate('zero');
    }
    const CardDetails = [
        {
            id: '1',
            heading: 'Catering Supplies',
            image: '',
            responses: '12'
        },
        {
            id: '2',
            heading: 'kitchen ideas',
            image: '',
            responses: '10'
        },
        {
            id: '3',
            heading: 'iphone 8 pro',
            image: '',
            responses: '9'
        },
        {
            id: '4',
            heading: 'IT support services',
            image: '',
            responses: '7'
        }

    ]
    const CardList = CardDetails.map(CardItem => {
        return (
             <div className="container">
            <div className="qozo" key={CardItem.id}>
                <p className="heading">{CardItem.heading}</p>
                <img src={Bond} className="image" 
                onClick={ShareWindow}/>
               <div  className="response">
                <div className="child"> {CardItem.responses} responses</div>
               </div>
            </div>
            </div>
            );
    })
    return (<div>{CardList}</div>);


}

export default Qozo;