import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export const Email = () => {

    const { updateOption, defaultOptions } = useContext(AppContext);

    const [emailData, setEmailData] = useState({
        address: '',
        subject: '',
        body: ''
    });

    useEffect(() => {
        let mailtoString = 'mailto:';
        let params = [];

        if (emailData.address !== '') {
            mailtoString += `${emailData.address}`;
        }

        if (emailData.subject !== '') {
            params.push(`subject=${encodeURIComponent(emailData.subject)}`);
        }

        if (emailData.body !== '') {
            params.push(`body=${encodeURIComponent(emailData.body)}`);
        }

        if (params.length > 0) {
            mailtoString += `?${params.join('&')}`;
        }

        if (mailtoString !== 'mailto:') {
            updateOption('data', mailtoString);
        } else {
            updateOption('data', defaultOptions.data);
        }
    }, [emailData]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmailData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className='d-flex flex-column gap-1 py-4'>
            <h3 className="form-label pb-4">Generate Email</h3>

            <input
                type="email"
                name="address"
                className="form-control shadow"
                placeholder="example@example.com"
                value={emailData.address}
                onChange={handleInputChange}
                required
            />

            <input
                type="text"
                name="subject"
                className="form-control shadow"
                placeholder="Subject"
                value={emailData.subject}
                onChange={handleInputChange}
            />

            <textarea
                name="body"
                className="form-control shadow"
                placeholder="Body"
                value={emailData.body}
                onChange={handleInputChange}
            />

            <div id="inputLinkHelp" className="form-text">
                Generate a QR code directly from a email direction.
            </div>
        </div>
    )
}
