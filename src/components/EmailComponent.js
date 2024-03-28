import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';

function EmailComponent () {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("aamal.a.hussain@gmail.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000); // Reset message after 2 seconds
    };

    return (
        <div className="email-component" style={{ position: 'relative' }}>
            <button className="button-icon" onClick={copyToClipboard}>
                <MdEmail size={45} />
            </button>
            {copied && <span className="copied-message" style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', zIndex: '999' }}>
                email copied!
            </span>}
        </div>
    );
};

export default EmailComponent;
