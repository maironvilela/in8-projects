import styles from './styles.module.scss';

type PaginationItemProps = {
  pageNumber: number;
  isActive: boolean;
  setCurrentPage: (currentPage: number) => void;
};
export function PaginationItem({
  pageNumber,
  isActive = false,
  setCurrentPage,
}: PaginationItemProps) {
  return (
    <section className={styles.container}>
      <button
        className={isActive ? styles.active : ''}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </button>
    </section>
  );
}
