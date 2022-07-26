import { useContext } from "react";
import ContactsContext from "../contexts/ContactsContext";

export default function useGivenData() {
    return useContext(ContactsContext);
}