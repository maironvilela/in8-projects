import { useMenuToggle } from '../../hooks/menu-toggle';
import { MenuIconSVG } from '../../svg/menu-icon';
import styles from './styles.module.scss';

export function Header() {
  const { setToggleMenu, isShowMenu } = useMenuToggle();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <button
          onClick={() => setToggleMenu()}
          className={`${isShowMenu ? styles['show-menu'] : ''}`}
        >
          <MenuIconSVG className={styles.logo} />
        </button>
        <nav className={`${isShowMenu ? styles['show-menu'] : ''}`}>
          <ul>
            <li>
              <a href="#list"> Lista</a>
            </li>
            <li>
              <a href="#about_me"> Sobre Mim</a>
            </li>
            <li>
              <a href="#register"> Cadastro</a>
            </li>
          </ul>
        </nav>

        <img
          src="../src/assets/images/logo-in8-dev.svg"
          alt="Logo"
          className={styles.logo}
        />
      </div>
    </header>
  );
}
