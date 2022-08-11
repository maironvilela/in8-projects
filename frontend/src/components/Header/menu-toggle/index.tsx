import { useMenuToggle } from '../../../hooks/menu-toggle';
import styles from './styles.module.scss';

export function MenuToggle() {
  const { isShowMenu, setToggleMenu } = useMenuToggle();

  return (
    <div className={styles['container-toggle']}>
      {isShowMenu ? (
        <div>
          <button onClick={() => setToggleMenu()}>
            <img
              src="../src/assets/images/menu-icon-exp.svg"
              alt="icone do menu"
            />
          </button>
          <nav>
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
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
