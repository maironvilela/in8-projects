import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="../src/assets/images/menu-icon.svg" alt="icone do menu" />;
        <img
          src="../src/assets/images/logo-in8-dev.svg"
          alt="Logo"
          className={styles.logo}
        />
      </div>
    </header>
  );
}
