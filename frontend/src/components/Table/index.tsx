import { ButtonTable } from '../ButtonTable';
import { DescriptionTable } from '../DescriptionTable';
import styles from './styles.module.scss';

export function Table() {
  return (
    <section className={styles.container}>
      <header>
        <h2>Lista de Cadastros</h2>
      </header>

      <div className={styles.table}>
        <header>
          <ButtonTable pageNumber="1" isActive={true} />
          <ButtonTable pageNumber="2" />
          <ButtonTable pageNumber="3" />
          <ButtonTable pageNumber="4" />
        </header>
        <div>
          <DescriptionTable label="NOME" value="Fulano de Tal" />
          <DescriptionTable label="EMAIL" value="fulano@email.com" />
          <DescriptionTable label="NASC." value="25/01/2021" />
          <DescriptionTable label="TEL." value="(31) 99985-9666" />
        </div>
      </div>
    </section>
  );
}
