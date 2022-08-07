import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import { Input } from '../Input';
import { Loading } from '../Loaders';
import styles from './styles.module.scss';

type Inputs = {
  name: string;
  email: string;
  nascimento: string;
  telefone: string;
};

export function Registration() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: Inputs) {
    setIsLoading(true);
    const response = await api.post('/users', data).finally(() => {
      setTimeout(() => {
        // somente para simular uma demora na requisiçao
        setIsLoading(false);
        if (response.status === 200) {
          reset();
        }
      }, 6000);
    });
  }

  return (
    <section className={styles.container}>
      <header>
        <h2>Cadastro</h2>
      </header>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        ''
      )}

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

        <button disabled={isLoading} type="submit">
          CADASTRAR
        </button>
      </form>
    </section>
  );
}
