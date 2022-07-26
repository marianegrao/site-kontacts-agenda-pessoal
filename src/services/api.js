import axios from 'axios';

const api = axios.create({
    baseURL: 'https://contacts-api-cubos.herokuapp.com',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export const registerUser = async (body) => {
    let dataResponse = {}
    try {
        await api.post('/usuarios', body)
        dataResponse = {
            error: false
        };

    } catch (error) {
        dataResponse = {
            message: error.response,
            error: true
        };
    }
    return dataResponse;
}

export const login = async (body) => {
    let dataResponse = {}
    try {
        const response = await api.post('/login', body)
        const { data } = response;
        dataResponse = {
            userId: data.usuario.id,
            token: data.token,
            nome: data.usuario.nome,
            error: false
        }

    } catch (error) {
        dataResponse = {
            mensagem: error.message,
            error: true
        };
    }
    return dataResponse;
}

export const showContacts = async (token) => {
    let dataResponse = []
    try {
        const response = await api.get('/contatos', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        dataResponse = [...response.data]

    } catch (erro) {
        dataResponse = {
            mensagem: erro.message,
            error: true
        };
    }
    return dataResponse;
}

export const registerContact = async (body, token) => {
    let dataResponse = {}
    try {
        await api.post('/contatos', body, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        dataResponse = {
            erro: false
        };

    } catch (error) {
        dataResponse = {
            message: error.response,
            erro: true
        };
    }
    return dataResponse;
}

export const deleteContact = async (token, idContact) => {
    let dataResponse = {};
    try {
        await api.delete(`/contatos/${idContact}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        dataResponse = { error: false };
    } catch (error) {
        dataResponse = {
            mensagem: error.response.data.mensagem,
            error: true
        };
    }
    return dataResponse;
}

export const datailContact = async (token, idContact) => {
    let dataResponse = {};
    try {
        const response = await api.get(`/contatos/${idContact}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        dataResponse = response;
    } catch (erro) {
        dataResponse = {
            mensagem: erro.response.data.mensagem,
            erro: true
        };
    }
    return dataResponse;
}

export const updateContact = async (token, body, idContact) => {
    let dataResponse = {};
    try {
        await api.put(`/contatos/${idContact}`, body, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        dataResponse = {
            erro: false
        };
    } catch (erro) {
        dataResponse = {
            mensagem: erro.response.data.mensagem,
            erro: true
        };
    }
    return dataResponse;
}