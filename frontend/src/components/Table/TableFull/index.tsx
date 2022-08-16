import { useEffect } from 'react';
import { useUsers } from '../../../hooks/use-users';
import { Pagination } from '../Pagination';
import styles from './styles.module.scss';

export function TableFull() {
  const { currentPage, totalPages, users, setCurrentPage, setLimit } =
    useUsers();

  useEffect(() => {
    setLimit('4');
  }, [setLimit]);

  return (
    <section className={styles.container}>
      <table>
        <thead>
          <tr>
            <th className={styles['col-name']}>Nome</th>
            <th className={styles['col-email']}>Email</th>
            <th className={styles['col-nascimento']}>Nascimento</th>
            <th className={styles['col-tel']}>Telefone</th>
          </tr>
        </thead>

        {users?.map(user => (
          <tr key={user.id}>
            <td className={styles['col-name']}>{user.name}</td>
            <td className={styles['col-email']}>{user.email}</td>
            <td className={styles['col-nascimento']}>{user.nascimento}</td>
            <td className={styles['col-tel']}>{user.telefone}</td>
          </tr>
        ))}
      </table>

      <Pagination
        currentPage={Number(currentPage)}
        totalPages={Number(totalPages)}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
