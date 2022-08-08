import { useState } from 'react';
import { ButtonTable } from '../ButtonTable';
import { DescriptionTable } from '../DescriptionTable';
import styles from './styles.module.scss';

type User = {
  name?: string;
  email?: string;
  nascimento?: string;
  telefone?: string;
};

type TableProps = {
  user: User;
  skip: number;
  limit: number;
  setSkip: (value: number) => void;
  numberOfRecords: number;
};
export function Table({ user, setSkip, skip }: TableProps) {
  const [listButton] = useState<number[]>([1, 2, 3, 4]);
  /*
  useEffect(() => {
    const listButtonUseEffect = [];
    console.log('Numero de Registros: ', numberOfRecords);
    switch (numberOfRecords - 1) {
      case 0:
        setListButton([1]);
        break;
      case 1:
        setListButton([1, 2]);
        break;
      case 2:
        console.log('2 Registros');
        setListButton([1, 2, 3]);
        break;
      case 3:
        setListButton([1, 2, 3]);
        break;
      default:
        console.log('Defaults');
        for (let i = skip; i < numberOfRecords; i++) {
          listButtonUseEffect.push(i);
        }
        setListButton(listButtonUseEffect);
    }
  }, [numberOfRecords, skip]);
*/
  return (
    <section className={styles.container}>
      <header>
        <h2>Lista de Cadastros</h2>
      </header>

      <div className={styles.table}>
        <header>
          {listButton.map(pageNumber => (
            <ButtonTable
              pageNumber={pageNumber}
              isActive={pageNumber === skip}
              setSkip={setSkip}
              key={pageNumber}
            />
          ))}
        </header>
        <div>
          <DescriptionTable label="NOME" value={user.name || ''} />
          <DescriptionTable label="EMAIL" value={user.email || ''} />
          <DescriptionTable label="NASC." value={user.nascimento || ''} />
          <DescriptionTable label="TEL." value={user.telefone || ''} />
        </div>
      </div>
    </section>
  );
}
