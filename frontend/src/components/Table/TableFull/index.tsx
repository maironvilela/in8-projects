import { User } from '../../../hooks/use-users';
import { Pagination } from '../Pagination';
import styles from './styles.module.scss';

type TableFullProps = {
  users?: User[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (currentPage: string) => void;
};

export function TableFull({
  users,
  currentPage,
  totalPages,
  setCurrentPage,
}: TableFullProps) {
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
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
