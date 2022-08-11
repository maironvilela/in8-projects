import { useMenuToggle } from '../../hooks/menu-toggle';
import { MenuToggle } from './menu-toggle';
import styles from './styles.module.scss';

export function Header() {
  const { setToggleMenu } = useMenuToggle();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <button onClick={() => setToggleMenu()}>
          <img src="../src/assets/images/menu-icon.svg" alt="icone do menu" />;
        </button>
        <img
          src="../src/assets/images/logo-in8-dev.svg"
          alt="Logo"
          className={styles.logo}
        />
      </div>

      <MenuToggle />
    </header>
  );
}
