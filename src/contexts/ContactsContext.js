import { createContext } from "react";
import useStatesProvider from '../hooks/useStatesProvider';
const ContactsContext = createContext({});

export function ContactsProvider(props) {
    const contactsProvider = useStatesProvider();

    return (
        <ContactsContext.Provider value={contactsProvider}>
            {props.children}
        </ContactsContext.Provider>
    )
}

export default ContactsContext;