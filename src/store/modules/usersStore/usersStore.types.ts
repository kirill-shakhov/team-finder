import { GetUsersResponse, User } from '@/services/api/controllers';

export interface UsersState {
  users: GetUsersResponse | [];
  currentUser: User | null;
}