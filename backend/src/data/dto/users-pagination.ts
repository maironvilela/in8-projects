import { UserDTO } from './user';

export type UsersPaginationDTO = {
  users: UserDTO[];
  totalPage: number;
};
