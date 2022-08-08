import { Header } from '../Header';
import styles from './styles.module.scss';

export function Banner() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div>
          <h1>ESTÁGIO</h1>
          <h1>PROVA DE SELEÇÃO</h1>
        </div>
      </section>
    </>
  );
}
