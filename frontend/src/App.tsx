/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Banner, Footer } from './components';
import { Registration } from './components/Registration';
import { Table } from './components/Table';
import { AppProvider } from './hooks';
import { useUsers } from './hooks/use-users';
import './styles/global.scss';

export type User = {
  name: string;
  email: string;
  birthDate: string;
  phone: string;
};

function App() {
  const [loggedUser, setLoggedUser] = useState<User>();
  const { users, setLimit } = useUsers();

  useEffect(() => {
    setLimit('1');
    setLoggedUser(users[0]);
  }, [setLimit, users]);

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
