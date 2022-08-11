import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
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

export function Registration({ ...rest }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHookForm: SubmitHandler<Inputs> = async data => {
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
  };

  return (
    <section className={styles.container} {...rest}>
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

      <form onSubmit={handleSubmit(onSubmitHookForm)}>
        <Input
          label="Nome"
          placeholder="Nome Completo"
          register={{ ...register('name', { required: true }) }}
        />
        {errors.name && (
          <span className={styles.errors}>(Nome é obrigatório)</span>
        )}

        <Input
          label="Email"
          placeholder="fulanodetal@email.com"
          register={{ ...register('email', { required: true }) }}
        />
        {errors.name && (
          <span className={styles.errors}>(Email é obrigatório)</span>
        )}

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
