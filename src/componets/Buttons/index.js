import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useGivenData from '../../hooks/useGivenData'
export function ButtonLogin() {
    return (
        <Stack spacing={2} direction="row" justifyContent='center' >
            <Button variant="contained"
                type='submit'
                sx={{
                    width: '475px',
                    height: '50px',
                    backgroundColor: '#04C45C',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px',
                    marginTop: '54px',
                    marginBottom: '92px'
                }}
            >Login
            </Button>
        </Stack >
    );
}

export function ButtonsRegister() {
    const { handleClearForm } = useGivenData();
    return (
        <Stack flexDirection='column' sx={{
            marginTop: '60px',
            marginBottom: '80px'
        }}>
            <Button variant="contained"
                type='submit'
                sx={{
                    width: '475px',
                    height: '50px',
                    backgroundColor: '#04C45C',
                    borderRadius: '8px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px',
                    margin: '4px'
                }}

            >Cadastrar
            </Button>
            <Button variant="contained"
                type='button'
                onClick={handleClearForm}
                sx={{
                    background: 'rgba(251, 6, 21, 0.65)',
                    width: '475px',
                    height: '50px',
                    borderRadius: '8px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px',
                    margin: '4px'
                }}
            >Cancelar
            </Button>
        </Stack >
    );
}

export function ButtonAdcHome() {
    const {
        handleOpenModalAdc
    } = useGivenData();


    return (
        <Stack direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ width: '956px' }}
        >
            <Button variant="contained"
                sx={{
                    width: '237px',
                    height: '50px',
                    backgroundColor: '#04C45C',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px'
                }}
                onClick={handleOpenModalAdc}
            >Adicionar
            </Button>
        </Stack >
    );
}

export function ButtonsRemoveContact() {
    const {
        handleCloseModalRemove,
        handleDeleteContact
    } = useGivenData();

    return (
        <Stack flexDirection='column' sx={{
        }}>
            <Button variant="contained"
                onClick={handleDeleteContact}
                sx={{
                    width: '364px',
                    height: '50px',
                    backgroundColor: '#04C45C',
                    borderRadius: '8px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px',
                    margin: '4px'
                }}
            >Excluir
            </Button>
            <Button variant="contained"
                sx={{
                    background: 'rgba(251, 6, 21, 0.65)',
                    width: '364px',
                    height: '50px',
                    borderRadius: '8px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px',
                    margin: '4px'
                }}
                onClick={handleCloseModalRemove}
            >Cancelar
            </Button>
        </Stack >
    );
}

export function ButtonsEditContact() {
    const {
        handleCloseModalEdit
    } = useGivenData();
    return (
        <Stack flexDirection='column' sx={{
        }}>
            <Button variant="contained"
                type='submit'
                sx={{
                    width: '364px',
                    height: '50px',
                    backgroundColor: '#04C45C',
                    borderRadius: '8px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px',
                    margin: '4px'
                }}
            >Editar
            </Button>
            <Button variant="contained"
                type='button'
                sx={{
                    background: 'rgba(251, 6, 21, 0.65)',
                    width: '364px',
                    height: '50px',
                    borderRadius: '8px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px',
                    margin: '4px'
                }}
                onClick={handleCloseModalEdit}
            >Cancelar
            </Button>
        </Stack >
    );
}

export function ButtonsAdcContact() {
    const {
        handleClearForm
    } = useGivenData();
    return (
        <Stack flexDirection='column' sx={{
        }}>
            <Button variant="contained"
                type='submit'
                sx={{
                    width: '364px',
                    height: '50px',
                    backgroundColor: '#04C45C',
                    borderRadius: '8px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px',
                    margin: '4px'
                }}
            >Adicionar
            </Button>
            <Button variant="contained"
                type='button'
                sx={{
                    background: 'rgba(251, 6, 21, 0.65)',
                    width: '364px',
                    height: '50px',
                    borderRadius: '8px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '19px',
                    margin: '4px'
                }}
                onClick={handleClearForm}
            >Cancelar
            </Button>
        </Stack >
    );
}