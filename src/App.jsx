import { useState } from 'react';
import './App.css'
import { DataTypes } from './components/dataTypes/DataTypes'
import { DisplayQr } from './components/display/Display'
import { Accordion } from './components/accordionOptions/Accordion'
import { Link } from './components/dataTypes/Link';
import { Email } from './components/dataTypes/Email';

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
      case 'Text':
        return <Text />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container-fluid text-center vh-100 d-flex flex-column justify-content-center">

        <div className="row w-75 h-75 d-flex align-self-center justify-content-center bg-primary-subtle border border-5 border-light rounded-4">

          <div className="col-8 h-100 d-flex flex-column justify-content-center align-items-center">

            <DataTypes setSelectedType={setSelectedType}/>
            {renderSelectedType()}
            <Accordion />
          </div>

          <div className="col-4 h-100 d-flex align-items-center p-4">
            <DisplayQr />
          </div>

        </div>
      </div>
    </>
  )};

export default App


