import styles from './styles.module.scss';

type User = {
  name?: string;
  email?: string;
  nascimento?: string;
  telefone?: string;
};

type FooterProps = {
  user: User;
};

export function Footer({ user }: FooterProps) {
  return (
    <footer className={styles.container}>
      <strong>{user?.name}</strong>
      <span>{user?.email}</span>
      <span>{user?.telefone}</span>
      <span>Faculdade de Belo Horizonte</span>
    </footer>
  );
}
