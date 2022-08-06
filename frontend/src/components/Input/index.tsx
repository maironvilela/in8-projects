import styles from './styles.module.scss';

type InputProps = {
  label: string;
  placeholder: string;
};
export function Input({ label, placeholder }: InputProps) {
  return (
    <section className={styles.container}>
      <span>{label}</span>
      <input type="text" placeholder={placeholder} />
    </section>
  );
}
