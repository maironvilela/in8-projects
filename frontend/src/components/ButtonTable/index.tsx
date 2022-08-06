import styles from './styles.module.scss';

type ButtonTableProps = {
  pageNumber: string;
  isActive?: boolean;
};
export function ButtonTable({
  pageNumber,
  isActive = false,
}: ButtonTableProps) {
  return (
    <section className={styles.container}>
      <button className={isActive ? styles.active : ''}>{pageNumber}</button>
    </section>
  );
}
