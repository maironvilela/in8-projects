import { User } from '../../App';
import { Pagination } from './Pagination';
import styles from './styles.module.scss';
import { TableMobile } from './TableMobile';

type TableProps = {
  currentPage: number;
  totalPages: number;
  user: User;
  setCurrentPage: (currentPage: number) => void;
};
export function Table({
  currentPage,
  totalPages,
  user,
  setCurrentPage,
}: TableProps) {
  return (
    <div className={styles.container}>
      <header>
        <h2>Lista de Cadastros</h2>
      </header>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <TableMobile user={user} />
    </div>
  );
}
