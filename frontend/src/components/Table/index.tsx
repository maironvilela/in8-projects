import { User } from '../../App';
import styles from './styles.module.scss';
import { TableFull } from './TableFull';
import { TableMobile } from './TableMobile';

interface TableProps extends React.HTMLProps<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  users: User[];
  setCurrentPage: (currentPage: number) => void;
}
export function Table({
  currentPage,
  totalPages,
  users,
  setCurrentPage,
  ...rest
}: TableProps) {
  return (
    <div className={styles.container} {...rest}>
      <header>
        <h2>Lista de Cadastros</h2>
      </header>

      <TableMobile
        user={users[0]}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <TableFull
        users={users}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
