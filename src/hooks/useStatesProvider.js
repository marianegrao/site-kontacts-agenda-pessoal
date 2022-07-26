import { useState } from "react";
import { useLocalStorage } from 'react-use';
import { deleteContact, datailContact } from '../services/api';

export default function useStatesProvider() {
    const [pageRefresh, setPageRefresh] = useState(false);
    const [openModalRemove, setOpenModalRemove] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalAdc, setOpenModalAdc] = useState(false);
    const [form, setForm] = useState({ nome: '', email: '', senha: '', telefone: '' });
    const [aviso, setAviso] = useState({ mensagem: '', exibir: false });
    const [token, setToken, removeToken] = useLocalStorage('token', '');
    const [userId, setUserId, removeUserId] = useLocalStorage('userId', '');
    const [userName, setUserName, removeUserName] = useLocalStorage('userName', '');
    const [contacts, setContacts] = useState([]);
    const [idContact, setIdContact] = useState('');
    function handleClearForm() {
        setForm({ nome: '', email: '', senha: '', telefone: '' })
    }
    function onChange(evt) {
        const value = evt.target.value;
        const key = evt.target.name;

        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    const handleOpenModalAdc = () => {
        handleClearForm();
        setOpenModalAdc(true);

    };
    const handleCloseModalAdc = () => {
        handleClearForm();
        setOpenModalAdc(false);

    };
    async function handleDeleteContact() {
        await deleteContact(token, idContact);
        handleCloseModalRemove()
    }
    const handleOpenModalRemove = (id) => {
        setOpenModalRemove(true);
        setIdContact(id);
    };
    const handleCloseModalRemove = () => {
        setOpenModalRemove(false);
        setIdContact('');
    };
    async function handleShowContactData(id) {
        const response = await datailContact(token, id);

        if (!response.error) {
            const { nome, email, senha, telefone } = response.data
            setForm({ nome, email, senha, telefone })
        } else {
            setAviso({
                mensagem: "Usuário não encontrado",
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 5000)
        }
    }

    const handleOpenModalEdit = (id) => {
        setOpenModalEdit(true);
        handleShowContactData(id);
        setIdContact(id);
    };

    const handleCloseModalEdit = () => {
        handleClearForm()
        setOpenModalEdit(false);
    };
    return {
        openModalRemove, setOpenModalRemove,
        handleOpenModalRemove,
        handleCloseModalRemove,

        openModalEdit, setOpenModalEdit,
        handleOpenModalEdit,
        handleCloseModalEdit,

        openModalAdc, setOpenModalAdc,
        handleOpenModalAdc,
        handleCloseModalAdc,

        onChange,
        handleClearForm,
        form,
        setForm,
        aviso, setAviso,

        token, setToken, removeToken,
        userId, setUserId, removeUserId,
        userName, setUserName, removeUserName,

        pageRefresh, setPageRefresh,

        contacts, setContacts,

        idContact, setIdContact,

        handleDeleteContact
    }
}
