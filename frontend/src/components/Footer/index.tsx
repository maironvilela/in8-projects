import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <strong>Fulano de Tal</strong>
      <span>fulano@email.com.br</span>
      <span>(31) 98855-5625</span>
      <span>Faculdade de Belo Horizonte</span>
    </footer>
  );
}
