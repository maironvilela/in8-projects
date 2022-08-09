import { User } from '../../../App';
import { DescriptionTable } from '../DescriptionTable';
import styles from './styles.module.scss';

type TableProps = {
  user: User;
};
export function TableMobile({ user }: TableProps) {
  return (
    <section className={styles.container}>
      <DescriptionTable label="NOME" value={user?.name || ''} />
      <DescriptionTable label="EMAIL" value={user?.email || ''} />
      <DescriptionTable label="NASC." value={user?.nascimento || ''} />
      <DescriptionTable label="TEL." value={user?.telefone || ''} />
    </section>
  );
}
