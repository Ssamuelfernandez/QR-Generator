import { useState } from 'react';
import './App.css'
import { DataTypes } from './components/DataTypes'
import { DisplayQr } from './components/Display'
import { QrOptions } from './components/Options'
import { Link } from './components/Link';
import { Email } from './components/Email';
import { useCodeGenerator } from './hooks/useCodeGenerator';

function App() {
  const [selectedType, setSelectedType] = useState('Link');
  const { qrImage, download, updateQRCode } = useCodeGenerator()

  const renderSelectedType = () => {
    switch (selectedType) {
      case 'Link':
        return <Link updateQRCode={updateQRCode} />;
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
            <QrOptions />
          </div>

          <div className="col-4 h-100 d-flex align-items-center p-4">
            <DisplayQr qrImage={qrImage} download={download} />
          </div>

        </div>
      </div>
    </>
  )};

export default App


