/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Banner, Footer } from './components';
import { Registration } from './components/Registration';
import { Table } from './components/Table';
import { AppProvider } from './hooks';
import api from './services/api';
import './styles/global.scss';

function App() {
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    const findUserById = async (id: string) => {
      const { data } = await api.get(`users/${id}`);
      setLoggedUser(data);
    };
    findUserById('62f51a24288939550b5ef240');
  }, []);

  return (
    <AppProvider>
      <Banner />
      <Registration id="register" />
      <Table id="list" />
      {loggedUser ? <Footer user={loggedUser} id="about_me" /> : ''}
    </AppProvider>
  );
}

export default App;
