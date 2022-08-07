import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { Input } from '../Input';
import styles from './styles.module.scss';

type Inputs = {
  name: string;
  email: string;
  nascimento: string;
  telefone: string;
};

export function Registration() {
  const { register, handleSubmit } = useForm<Inputs>();

  async function onSubmit(data: Inputs) {
    const response = await api.post('/users', data);
    console.log(response.data);
  }

  return (
    <section className={styles.container}>
      <header>
        <h2>Cadastro</h2>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome"
          placeholder="Nome Completo"
          register={{ ...register('name') }}
        />
        <Input
          label="Email"
          placeholder="fulanodetal@email.com"
          register={{ ...register('email') }}
        />

        <Input
          label="Telefone"
          placeholder="(xx) xxxxx-xxxx"
          register={{ ...register('telefone') }}
        />

        <Input
          label="Nascimento"
          placeholder="dd/MM/aaaa"
          register={{ ...register('nascimento') }}
        />

        <button type="submit">CADASTRAR</button>
      </form>
    </section>
  );
}
