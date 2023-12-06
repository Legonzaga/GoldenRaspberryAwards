import { Movie } from "./movie";

export class SearchMovie {
  content!: Movie[];
  pageable!: Paginator;
  totalPages!: number;
  totalElements!: number;
  last!: boolean;
  size!: number;
  number!: number;
  sort!: Sort2;
  first!: boolean;
  numberOfElements!: number;
  empty!: boolean;
}

export class Sort {
  unsorted!: boolean;
  sorted!: boolean;
  empty!: boolean;
}

export class Paginator {
  sort!: Sort;
  offset!: number;
  pageSize: number = 15;
  pageNumber: number = 0;
  paged!: boolean;
  unpaged!: boolean;
}

export class Sort2 {
  unsorted!: boolean;
  sorted!: boolean;
  empty!: boolean;
}

