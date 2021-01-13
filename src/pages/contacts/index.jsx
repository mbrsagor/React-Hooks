import React from 'react';

import { ContactContextProvider } from '../../context/contactContext';
import ContactTable from '../../components/contact/contactTable';
import ContactForm from '../../components/contact/contactForm';

const ContactView = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ContactForm />
                </div>
                <div className="col-md-6">
                    <ContactContextProvider>
                        <ContactTable />
                    </ContactContextProvider>
                </div>
            </div>
        </div>
    )
}

export default ContactView;
