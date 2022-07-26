import './styles.css';
import RemoveContactIcon from '../../assets/RemoveContactIcon.svg';
import EditContactIcon from '../../assets/EditContactIcon.svg';
import useGivenData from '../../hooks/useGivenData';
import { ModalEditContact, ModalRemoveContact, ModalAdcContact } from '../Modals';
import { ButtonAdcHome } from '../Buttons';
import { showContacts } from '../../services/api';
import { useEffect } from 'react';

export default function Contacts() {
    const {
        handleOpenModalEdit,
        handleOpenModalRemove,
        pageRefresh, setPageRefresh,
        token,
        contacts, setContacts,
        setAviso
    } = useGivenData();

    async function showAllContacts() {
        const response = await showContacts(token);

        if (!response.error) {
            setContacts([...response]);
            setPageRefresh(!pageRefresh);
        } else {
            setAviso({
                mensagem: 's',
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 5000)
        }
    }
    useEffect(() => {
        showAllContacts()
    }, [pageRefresh])

    return (
        <div className='container-contacts'>
            <ButtonAdcHome />
            <div className='contacts collumn-names'>
                <h5 className='names_title'>Nome</h5>
                <h5 className='names_title'>Email</h5>
                <h5 className='names_title'>Telefone</h5>
            </div>
            {contacts && contacts.map((contact) => (
                <div key={contact.id} className='contacts collumn-infos'>
                    <div className='infos_data'>
                        <h5 className='data-type'>{contact.nome}</h5>
                        <h5 className='data-type'>{contact.email}</h5>
                        <h5 className='data-type'>{contact.telefone}</h5>
                    </div>
                    <div className='contacts_icons'>
                        <button onClick={() => handleOpenModalEdit(contact.id)}
                            className='btn-contacts'>
                            <img
                                src={EditContactIcon}
                                alt='Icone de editar contato' />
                        </button>

                        <button
                            onClick={() => handleOpenModalRemove(contact.id)}
                            className='btn-contacts'>
                            <img
                                src={RemoveContactIcon}
                                alt='Icone de remover contato' />
                        </button>
                    </div>
                </div>
            ))}
            <ModalRemoveContact />
            <ModalEditContact />
            <ModalAdcContact />
        </div>
    );
}