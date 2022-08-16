/* eslint-disable @typescript-eslint/no-unused-vars */
import { Banner } from './components';
import { Registration } from './components/Registration';
import { Table } from './components/Table';
import { AppProvider } from './hooks';
import './styles/global.scss';

function App() {
  return (
    <AppProvider>
      <Banner />
      <Registration id="register" />
      <>
        <Table id="list" />
        {/**
         *         <Footer user={users[0]} id="about_me" />

         */}
      </>
    </AppProvider>
  );
}

export default App;
