/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Banner, Footer } from './components';
import { Registration } from './components/Registration';
import { Table } from './components/Table';
import { AppProvider } from './hooks';
import api from './services/api';
import './styles/global.scss';

export type User = {
  id?: string;
  name?: string;
  email?: string;
  nascimento?: string;
  telefone?: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [limit, setLimit] = useState(4);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const findFirstRecord = async () => {
      const response = await api.get(
        `/users?skip=${currentPage}&limit=${limit}`,
      );
      setUsers(response.data.users);
      setTotalPages(response.data.totalPage);
      console.log(response.data.users);
    };
    findFirstRecord();
  }, [currentPage, limit]);

  return (
    <AppProvider>
      <Banner />
      <Registration />
      <Table
        currentPage={currentPage}
        totalPages={totalPages}
        users={users}
        setCurrentPage={setCurrentPage}
      />
      <Footer user={users[0]} />
    </AppProvider>
  );
}

export default App;
