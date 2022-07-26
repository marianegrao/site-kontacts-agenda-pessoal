import './styles.css';
import LogoutIcon from '../../assets/LogoutIcon.svg';
import useGivenData from '../../hooks/useGivenData';

export default function Header() {
    const {
        removeToken,
        removeUserId,
        setPageRefresh,
        pageRefresh,
        removeUserName,
        setContacts
    } = useGivenData();

    function handleRemoveUserDatas() {
        removeToken();
        removeUserId();
        removeUserName();
        setContacts([]);
        setPageRefresh(!pageRefresh)
    }
    return (
        <header className="container-header">
            <div>
                <h1>KONTACTS</h1>
                <button onClick={handleRemoveUserDatas}>
                    <img src={LogoutIcon} alt='Sair de Kontacts' />
                </button>
            </div>

        </header>
    );
}
