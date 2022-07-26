import { useEffect } from 'react';
import Contacts from '../../componets/Contacts';
import Header from '../../componets/Header';
import './styles.css';
import useGivenData from '../../hooks/useGivenData';

export default function Home() {
  const {
    aviso
  } = useGivenData();

  useEffect(() => {
  }, [])
  return (
    <div>
      <Header />
      <div className='error'>
        <span>{aviso.exibir && aviso.mensagem}</span>
      </div>
      <main className="home_main">
        <Contacts />
      </main>
    </div>
  );
}
