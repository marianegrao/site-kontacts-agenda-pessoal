import './styles.css';
import { FormLogin } from '../../componets/Forms';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ButtonLogin } from '../../componets/Buttons';
import useGivenData from '../../hooks/useGivenData';
import { login } from '../../services/api';

export default function Login() {
    const navigate = useNavigate();
    const {
        form,
        setAviso,
        aviso,
        token,
        setToken,
        setUserId,
        setUserName, handleClearForm
    } = useGivenData();

    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    });

    async function handleSubmit(e) {
        e.preventDefault();

        if (!form.email || !form.senha) {
            setAviso({
                mensagem: "Campos email e senha são obrigatórios.",
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 5000);
            return;
        }
        const resposta = await login(form);

        if (!resposta.error) {
            handleClearForm();
            setToken(resposta.token);
            setUserId(resposta.userId);
            setUserName(resposta.nome);
            navigate('/home');

        } else {
            handleClearForm();
            setAviso({
                mensagem: "Usuário não encontrado",
                exibir: true
            });
            setTimeout(() => setAviso({ mensagem: '', exibir: false }), 5000)
        }
    }

    return (
        <div className="container-login">
            <div className='login_image'>
            </div>
            <div className='login_form'>
                <div className='login_titles'>
                    <h5 className='login_subtitle'>Bem vindo </h5>
                    <h1 className='login_title'>Faça o login com a sua conta</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <FormLogin />
                    <div className='error'>
                        <span>{aviso.exibir && aviso.mensagem}</span>
                    </div>
                    <ButtonLogin />
                </form>
                <span>Não tem cadastro? <Link className='login_click-here' to='/register'>Clique aqui!</Link></span>
            </div>
        </div>
    );
}