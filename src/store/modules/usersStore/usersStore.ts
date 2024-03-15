import { UsersState } from '@/store/modules/usersStore/usersStore.types.ts';
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex';
import { RootState } from '@/store';
import { GetUsersResponse, usersApi } from '@/services/api/controllers';


const state: UsersState = {
  users: [],
};


const getters: GetterTree<UsersState, RootState> = {
  users: (state: UsersState) => state.users,
};

const actions: ActionTree<UsersState, RootState> = {
  async getUsers({ commit }: ActionContext<UsersState, RootState>, params: string) {
    try {
      const users = await usersApi.getUsers(params);
      commit('setUsers', users);
    } catch (error) {
      console.error('Error getting currencies:', error);
    }
  },
};


const mutations: MutationTree<UsersState> = {
  setUsers(state: UsersState, users: GetUsersResponse) {
    state.users = users;
  },

  resetUsers(state: UsersState) {
    state.users = [];
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

