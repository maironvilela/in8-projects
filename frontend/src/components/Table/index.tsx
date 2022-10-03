import styles from './styles.module.scss';
import { TableFull } from './TableFull';
import { TableMobile } from './TableMobile';

type TableProps = React.HTMLProps<HTMLDivElement>;
export function Table({ ...rest }: TableProps) {
  return (
    <div className={styles.container} {...rest}>
      <header>
        <h2>Lista de Cadastros</h2>
      </header>
      <TableMobile />
      <TableFull />
    </div>
  );
}
