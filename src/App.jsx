import { useState } from 'react';
import './App.css'
import { DataTypes } from './components/dataTypes/DataTypes'
import { DisplayQr } from './components/display/Display'
import { Accordion } from './components/accordionOptions/Accordion'
import { Link } from './components/dataTypes/Link';
import { Email } from './components/dataTypes/Email';
import { Phone } from './components/dataTypes/Phone';

function App() {
  const [selectedType, setSelectedType] = useState('Link');

  const renderSelectedType = () => {
    switch (selectedType) {
      case 'Link':
        return <Link />;
      case 'Email':
        return <Email />;
      case 'Phone':
        return <Phone />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="backgroundImage max-vw-100 max-vh-100 container-fluid text-center ">
        <div className="row p-4 gap-4 d-flex justify-content-center min-vw-100 min-vh-100">
          <div className="col-12 col-xl-6 d-flex flex-column justify-content-between">
            <div className='d-flex flex-column'>
              <h1 className='m-3 title'>QR Code Generator</h1>
              <DataTypes setSelectedType={setSelectedType} selectedType={selectedType} />
            </div>
            {renderSelectedType()}
            <Accordion />
          </div>
          <div className="col-12 col-xl-3">
            <DisplayQr />
          </div>
        </div>
      </div>
    </>
  )
};

export default App


