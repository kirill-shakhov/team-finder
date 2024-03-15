import { createAxiosInstance } from '@/services/api/helpers';
import { GetUsersResponse } from '@/services/api/controllers/usersApi/usersApi.types.ts';

const $api = createAxiosInstance();

class UsersApi {

  async getUsers(params): Promise<GetUsersResponse> {
    const { data } = await $api.get<GetUsersResponse>(`/users?${params}`);

    return data;
  }

}

export const usersApi = new UsersApi();