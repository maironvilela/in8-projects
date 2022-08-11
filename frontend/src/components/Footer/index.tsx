import styles from './styles.module.scss';

type User = {
  name?: string;
  email?: string;
  nascimento?: string;
  telefone?: string;
};

interface FooterProps extends React.HTMLProps<HTMLDivElement> {
  user: User;
}

export function Footer({ user, ...rest }: FooterProps) {
  return (
    <footer className={styles.container} {...rest}>
      <strong>{user?.name}</strong>
      <span>{user?.email}</span>
      <span>{user?.telefone}</span>
      <span>Faculdade de Belo Horizonte</span>
    </footer>
  );
}
