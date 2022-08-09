import styles from './styles.module.scss';

type DescriptionTableProps = {
  label: string;
  value: string;
};
export function DescriptionTable({ label, value }: DescriptionTableProps) {
  return (
    <section className={styles.container}>
      <strong>{label}</strong>
      <span>{value}</span>
    </section>
  );
}
