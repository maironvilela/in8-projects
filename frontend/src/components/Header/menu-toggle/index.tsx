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
              <li>Lista</li>
              <li>Sobre Mim</li>
              <li>Cadastro</li>
            </ul>
          </nav>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
