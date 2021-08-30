import React, { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Card from './component/Send/Send';
import Footer from './component/Footer/Footer';
import profpic from '../src/assets/images/home-icon.png';
import sendpic from '../src/assets/images/send-image.png';
import Qozo from './component/Card/Card';
import QozoFooter from './component/QozoFooter/QozoFooter';
import SlidingCard from './component/slidingCard/slidingCard';
import EnhancedTable from './component/checkbox/checkbox';
function App() {
  const [FooterCount, FooterUpdate] = useState('two');
  const [HeaderCount, HeaderUpdate] = useState('a');

  return (
    <div className="card">
      <div className="pseudo"></div>
      {(() => {
        switch (FooterCount) {
          case 'zero':             // This case is for  share 
            return (
              <>


                <div className="question">HOW DO YOU WANT TO SHARE?</div>
                <Card
                  cardTitle={'Send privately'}
                  cardLine={"I'll choose from my contacts"}
                  cardColor={"#ffc14e"}
                  image={sendpic}
                  click={true}
                  FooterUpdate={FooterUpdate}

                />
                <div style={{ marginTop: "40px" }}>OR</div>
                <Card
                  cardTitle={'Share Publicly'}
                  cardLine={"Create a link to share with anyone"}
                  cardColor={"#117eeb"}
                  textColor={"#ffffff"}
                  click={true}
                  FooterUpdate={FooterUpdate}
                />
                <div className="pseudo"></div>
                <Footer
                  FooterUpdate={FooterUpdate}
                  HeaderUpdate={HeaderUpdate}
                  TextColor={"red"}
                />
              </>
            )



          case 'four': // This case is for  create
            return (
              <>

                <Card
                  cardTitle={' Professional Theme'}
                  cardLine={"Create form in professional way"}
                  cardColor={"#E39ff6"}
                  textColor={"#ffffff"}
                  image={profpic}
                />
                <Card
                  cardTitle={'School Theme'}
                  cardLine={"Create form for student"}
                  cardColor={"#3DeD97"}
                  textColor={"#ffffff"}
                  image={profpic}
                />
                <Card
                  cardTitle={'Friends Theme'}
                  cardLine={"Create form in friends mode"}
                  cardColor={"#F9E076"}
                  textColor={"#ffffff"}
                />
                <div className="pseudo"></div>
                <Footer
                  FooterUpdate={FooterUpdate}
                  HeaderUpdate={HeaderUpdate}
                  TextColor={"red"}
                />


              </>)

          case 'two': // this case is for review 
            return (
              <>

                <Card
                  cardTitle={'Friends Theme'}
                  cardLine={"Give Your precious Review"}
                  cardColor={"#F9E076"}
                  textColor={"#ffffff"}
                />

                <Card
                  cardTitle={' Professional Theme'}
                  cardLine={"Give your precious review"}
                  cardColor={"#E39ff6"}
                  textColor={"#ffffff"}
                  image={profpic}
                />
                <Card
                  cardTitle={'School Theme'}
                  cardLine={"Give your precious review"}
                  cardColor={"#3DeD97"}
                  textColor={"#ffffff"}
                  image={profpic}
                />
                <div className="pseudo"></div>
                <Footer
                  FooterUpdate={FooterUpdate}
                  HeaderUpdate={HeaderUpdate}
                  TextColor={"red"}
                />

              </>);
          case 'three': //This case is for innercard component
            return (

              <div>

                <div className="pseuduo"></div>

                <QozoFooter
                  FooterUpdate={FooterUpdate} />
                <SlidingCard />


              </div>);

          case 'one': //This case is for Qozo component
            return (<div>

              <Qozo
                FooterUpdate={FooterUpdate} />

              <div className="pseuduo"></div>

              <QozoFooter
                FooterUpdate={FooterUpdate} />
              <SlidingCard 
              FooterUpdate={FooterUpdate}/>
            </div>
            );
          case 'five':
            return (
              <div>
                <div className="pseuduo"></div>
                <EnhancedTable/>

              </div>
            );
        }
      })()}
      <Header
        HeaderCount={HeaderCount}
      />
    </div>
  );



}

export default App;

