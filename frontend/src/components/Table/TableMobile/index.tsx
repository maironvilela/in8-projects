import { useEffect } from 'react';
import { useUsers } from '../../../hooks/use-users';
import { DescriptionTable } from '../DescriptionTable';
import { Pagination } from '../Pagination';
import styles from './styles.module.scss';

export function TableMobile() {
  const { currentPage, totalPages, users, setCurrentPage, setLimit } =
    useUsers();

  useEffect(() => {
    setLimit('1');
  }, [setLimit]);

  return (
    <div className={styles.container}>
      <Pagination
        currentPage={Number(currentPage)}
        totalPages={Number(totalPages)}
        setCurrentPage={setCurrentPage}
      />
      <DescriptionTable label="NOME" value={users[0]?.name || ''} />
      <DescriptionTable label="EMAIL" value={users[0]?.email || ''} />
      <DescriptionTable label="NASC." value={users[0]?.nascimento || ''} />
      <DescriptionTable label="TEL." value={users[0]?.telefone || ''} />
    </div>
  );
}
