import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useGivenData from '../../hooks/useGivenData';
import { ButtonsRemoveContact, ButtonsEditContact, ButtonsAdcContact } from '../Buttons';
import CloseIcon from '../../assets/CloseIcon.svg'
import './styles.css'
import { FormEditContact, FormAdcContact } from '../Forms';
import { registerContact, updateContact } from '../../services/api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '476px',
    height: '319px',
    bgcolor: '#FFFDFD',
    borderRadius: '8px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export function ModalRemoveContact() {
    const {
        openModalRemove,
        handleCloseModalRemove, userName
    } = useGivenData();

    return (
        <div>
            <Modal
                open={openModalRemove}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{
                    ...style, width: '476px',
                    height: '319px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button
                        onClick={handleCloseModalRemove}
                        className='btn-close'
                    >
                        <img src={CloseIcon} alt='Icone de fechar modal'
                        />
                    </button>
                    <h2 className='modal-title'>Confirma a exclusão?</h2>
                    <p className='modal-subtitle'>
                        Deseja excluir o contato, {userName}?
                    </p>
                    <ButtonsRemoveContact />
                </Box>
            </Modal>
        </div>
    );
}

export function ModalEditContact() {
    const {
        openModalEdit,
        handleCloseModalEdit,
        form,
        setAviso,
        token,
        pageRefresh, setPageRefresh,
        handleClearForm,
        idContact
    } = useGivenData();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!form.nome || !form.email || !form.telefone) {
            setAviso({
                mensagem: "Campos nome, email e telefone são obrigatórios.",
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 5000);
            return;
        }
        const response = await updateContact(token, form, idContact);

        if (!response.error) {
            handleClearForm();
            handleCloseModalEdit();
            setPageRefresh(!pageRefresh);

        } else {
            setAviso({
                mensagem: "Usuário não encontrado",
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 5000)
        }
    }
    return (
        <div>
            <Modal
                open={openModalEdit}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{
                    ...style,
                    width: '494px',
                    height: '563px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button
                        onClick={handleCloseModalEdit}
                        className='btn-close'
                    >
                        <img src={CloseIcon} alt='Icone de fechar modal'
                        />
                    </button>
                    <h2 className='modal-title'>Editar Contato</h2>
                    <form onSubmit={handleSubmit}>
                        <FormEditContact />
                        <ButtonsEditContact />
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export function ModalAdcContact() {
    const {
        openModalAdc,
        handleCloseModalAdc,
        form,
        setAviso,
        token,
        pageRefresh, setPageRefresh,
        handleClearForm
    } = useGivenData();
    async function handleSubmit(e) {
        e.preventDefault();

        if (!form.nome || !form.email || !form.telefone) {
            setAviso({
                mensagem: "Campos nome, email e telefone são obrigatórios.",
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 5000);
            return;
        }
        const resposta = await registerContact(form, token);

        if (!resposta.erro) {
            handleCloseModalAdc();
            setPageRefresh(!pageRefresh);
            handleClearForm();

        } else {
            setAviso({
                mensagem: "Usuário não encontrado",
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 5000)
        }
    }

    return (
        <div>
            <Modal
                open={openModalAdc}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{
                    ...style,
                    width: '494px',
                    height: '563px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <button
                        onClick={handleCloseModalAdc}
                        className='btn-close'
                    >
                        <img src={CloseIcon} alt='Icone de fechar modal' />
                    </button>
                    <h2 className='modal-title'>Novo Contato</h2>
                    <form onSubmit={handleSubmit}>
                        <FormAdcContact />
                        <ButtonsAdcContact />
                    </form>
                </Box>
            </Modal>
        </div>
    );
}