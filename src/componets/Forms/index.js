import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useGivenData from '../../hooks/useGivenData';
import './styles.css';

export function FormLogin() {
    const {
        onChange,
        form
    } = useGivenData();
    return (
        <Box
            sx={{
                '& > :not(style)': {
                    m: 1, width: '476px', height: '56px'
                },
                display: 'flex',
                flexDirection: 'column'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="E-mail"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className='form-login'
                fullWidth
            />
            <TextField
                label="Senha"
                type="password"
                name="senha"
                value={form.senha}
                onChange={onChange}
                autoComplete="current-password"
                className='form-login'
                fullWidth
            />
        </Box>
    );
}

export function FormRegister() {
    const {
        onChange,
        form
    } = useGivenData();
    return (
        <Box
            sx={{
                '& > :not(style)': {
                    m: 1, width: '476px', height: '56px'
                },
                display: 'flex',
                flexDirection: 'column'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="Nome"
                type="text"
                name="nome"
                value={form.nome}
                onChange={onChange}
                className='form-login'
                fullWidth
            />
            <TextField
                label="E-mail"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className='form-login'
                fullWidth
            />
            <TextField
                label="Senha"
                type="password"
                name="senha"
                value={form.senha}
                onChange={onChange}
                autoComplete="current-password"
                className='form-login'
                fullWidth
            />
        </Box>
    );
};

export function FormEditContact() {
    const {
        onChange,
        form
    } = useGivenData();
    return (
        <Box
            sx={{
                '& > :not(style)': {
                    m: 1,
                    width: '377.4px',
                    height: '51px',
                },
                display: 'flex',
                flexDirection: 'column',
                marginTop: '40px',
                marginBottom: '72px'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Nome"
                type="text"
                name="nome"
                value={form.nome}
                onChange={onChange}
                className='form-edit-contact'
                fullWidth

            />
            <TextField
                id="outlined-basic"
                label="E-mail"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                fullWidth
                className='form-edit-contact'
            />
            <TextField
                id="outlined-input"
                label="Telefone"
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={onChange}
                fullWidth
                className='form-edit-contact'
            />
        </Box>
    );
}

export function FormAdcContact() {
    const {
        onChange,
        form
    } = useGivenData();
    return (
        <Box
            sx={{
                '& > :not(style)': {
                    m: 1,
                    width: '377.4px',
                    height: '51px',
                },
                display: 'flex',
                flexDirection: 'column',
                marginTop: '40px',
                marginBottom: '72px'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Nome"
                type="text"
                name="nome"
                value={form.nome}
                onChange={onChange}
                fullWidth
            />
            <TextField
                id="outlined-basic"
                label="E-mail"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                fullWidth
            />
            <TextField
                id="outlined-input"
                label="Telefone"
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={onChange}
                fullWidth
            />
        </Box>
    );
}