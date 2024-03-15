import { GetUsersResponse } from '@/services/api/controllers';

export interface UsersState {
  users: GetUsersResponse | [];
}