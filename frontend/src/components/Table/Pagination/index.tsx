import { useEffect, useState } from 'react';
import { PaginationItem } from './PaginationItem';

type Page = {
  pageNumber: string;
  isActive: boolean;
};

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (currentPage: string) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    let init = currentPage - 1;
    let finalPage = totalPages < currentPage + 3 ? totalPages : currentPage + 2;

    switch (currentPage) {
      case 1:
        init = 1;
        finalPage = totalPages < 4 ? totalPages : 4;
        break;
      case totalPages - 1:
        finalPage = totalPages;
        init = totalPages - 3;
        break;
      case totalPages:
        finalPage = totalPages;
        init = totalPages > 4 ? totalPages - 3 : 1;
        break;

      default: {
        init = currentPage - 1;
        finalPage = currentPage + 2;
      }
    }

    const pages: Page[] = [];
    for (let i = init; i <= finalPage; i++) {
      pages.push({
        pageNumber: String(i),
        isActive: i === currentPage,
      });
    }
    setPages(pages);
  }, [currentPage, totalPages]);

  return (
    <nav>
      {pages.map(page => (
        <PaginationItem
          key={page.pageNumber}
          pageNumber={page.pageNumber}
          isActive={page.isActive}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </nav>
  );
}
