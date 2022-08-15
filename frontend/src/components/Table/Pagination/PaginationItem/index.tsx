import styles from './styles.module.scss';

type PaginationItemProps = {
  pageNumber: string;
  isActive: boolean;
  setCurrentPage: (currentPage: string) => void;
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
