import styles from './styles.module.scss';

type ButtonTableProps = {
  pageNumber: number;
  isActive?: boolean;
  setSkip: (value: number) => void;
};
export function ButtonTable({
  pageNumber,
  isActive = false,
  setSkip,
}: ButtonTableProps) {
  return (
    <section className={styles.container}>
      <button
        className={isActive ? styles.active : ''}
        onClick={() => setSkip(pageNumber - 1)}
      >
        {pageNumber}
      </button>
    </section>
  );
}
