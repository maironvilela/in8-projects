import { User } from '../../../App';
import { DescriptionTable } from '../DescriptionTable';
import { Pagination } from '../Pagination';
import styles from './styles.module.scss';

type TableProps = {
  user: User;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (currentPage: number) => void;
};
export function TableMobile({
  user,
  currentPage,
  totalPages,
  setCurrentPage,
}: TableProps) {
  return (
    <div className={styles.container}>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <DescriptionTable label="NOME" value={user?.name || ''} />
      <DescriptionTable label="EMAIL" value={user?.email || ''} />
      <DescriptionTable label="NASC." value={user?.nascimento || ''} />
      <DescriptionTable label="TEL." value={user?.telefone || ''} />
    </div>
  );
}
