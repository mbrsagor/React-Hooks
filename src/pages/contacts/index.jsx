import React from 'react';

import { ContactContextProvider } from '../../context/contactContext';
import ContactTable from '../../components/contact/contactTable';

const ContactView = () => {
    return (
        <ContactContextProvider>
            <ContactTable />
        </ContactContextProvider>
    )
}

export default ContactView;
