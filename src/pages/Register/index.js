import { FormRegister } from '../../componets/Forms';
import { ButtonsRegister } from '../../componets/Buttons';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/api';
import './styles.css';
import useGivenData from '../../hooks/useGivenData';

export default function Register() {
    const navigate = useNavigate();
    const {
        form,
        setAviso,
        aviso,
        handleClearForm
    } = useGivenData();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!form.nome || !form.email || !form.senha) {
            setAviso({
                mensagem: "Todos os campos são obrigatórios.",
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 5000);
            return;
        }

        const resposta = await registerUser(form);

        if (!resposta.erro) {
            handleClearForm();
            navigate('/');

        } else {
            setAviso({
                mensagem: resposta.mensagem,
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 8000)
        }
    }

    return (
        <div className="container-register">
            <div className='register_form'>
                <h1 className='register_title'>Cadastre-se</h1>
                <form onSubmit={handleSubmit}>
                    <FormRegister />
                    <div className='recado'>
                        <span className='error'>{aviso.exibir && aviso.mensagem}</span>
                    </div>
                    <ButtonsRegister />
                </form>
                <span>Já tem cadastro? <Link className='register_click-here' to='/'>Clique aqui!</Link></span>
            </div>
            <div className='register_image'>
            </div>
        </div>
    );
}