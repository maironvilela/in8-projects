import { Input } from '../Input';
import styles from './styles.module.scss';

export function Registration() {
  return (
    <section className={styles.container}>
      <header>
        <h2>Cadastro</h2>
      </header>

      <form>
        <Input label="Nome" placeholder="Nome Completo" />
        <Input label="E-mail" placeholder="fulanodetal@email.com" />
        <Input label="Nascimento" placeholder="Nome Completo" />
        <Input label="Telefone" placeholder="(xx)xxxxx-xxxx" />
        <Input label="Nome" placeholder="Nome Completo" />
        <button>CADASTRAR</button>
      </form>
    </section>
  );
}
