import styles from './styles.module.scss';

type User = {
  id: string;
  name?: string;
  email?: string;
  nascimento?: string;
  telefone?: string;
};

type TableFullProps = {
  users?: User[];
};

export function TableFull({ users }: TableFullProps) {
  return (
    <section className={styles.container}>
      <h1>🚧EM CONSTRUÇÃO🚧</h1>
      <table>
        <th></th>
        <th>Nome</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Nascimento</th>
        {users?.map(user => (
          <tr key={user.id}>
            <td>1</td>
            <td>conteúdo da célula</td>
            <td>conteúdo da célula</td>
            <td>conteúdo da célula</td>
            <td>conteúdo da célula</td>
          </tr>
        ))}
      </table>
    </section>
  );
}
