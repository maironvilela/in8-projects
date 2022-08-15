/* eslint-disable @typescript-eslint/no-unused-vars */
import { Banner, Footer } from './components';
import { Registration } from './components/Registration';
import { Table } from './components/Table';
import { AppProvider } from './hooks';
import { useUsers } from './hooks/use-users';
import './styles/global.scss';

function App() {
  const { currentPage, totalPages, users, setCurrentPage } = useUsers();

  return (
    <AppProvider>
      <Banner />
      <Registration id="register" />

      {users && (
        <>
          <Table
            id="list"
            currentPage={Number(currentPage)}
            totalPages={Number(totalPages)}
            users={users}
            setCurrentPage={setCurrentPage}
          />
          <Footer user={users[0]} id="about_me" />
        </>
      )}
    </AppProvider>
  );
}

export default App;
