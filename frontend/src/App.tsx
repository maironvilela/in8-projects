import { useEffect, useState } from 'react';
import { Banner, Footer, Table } from './components';
import { Registration } from './components/Registration';
import api from './services/api';
import './styles/global.scss';

type User = {
  name?: string;
  email?: string;
  nascimento?: string;
  telefone?: string;
};

function App() {
  const [userTable, setUserTable] = useState<User>({});
  const [skip, setSkip] = useState(0);
  const [limit] = useState(4);
  const [numberOfRecords, setNumberOfRecords] = useState(0);

  useEffect(() => {
    console.log({ skip, limit });
    const findFirstRecord = async () => {
      const response = await api.get(`/users?skip=${skip}&limit=${limit}`);
      setUserTable(response.data[0]);
      setNumberOfRecords(response.data.length);
    };
    findFirstRecord();
  }, [skip, limit]);

  return (
    <>
      <Banner />
      <Registration />
      <Table
        user={userTable}
        skip={skip}
        limit={limit}
        setSkip={setSkip}
        numberOfRecords={numberOfRecords}
      />
      <Footer user={userTable} />
    </>
  );
}

export default App;
