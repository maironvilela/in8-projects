import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './styles.module.scss';

type InputProps = {
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
};
export function Input({ label, placeholder, register }: InputProps) {
  return (
    <section className={styles.container}>
      <span>{label}</span>
      <input type="text" placeholder={placeholder} {...register} />
    </section>
  );
}
