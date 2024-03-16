import { UsersState } from '@/store/modules/usersStore/usersStore.types.ts';
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex';
import { RootState } from '@/store';
import { GetUsersResponse, User, usersApi } from '@/services/api/controllers';


const state: UsersState = {
  users: [],
  currentUser: null,
};


const getters: GetterTree<UsersState, RootState> = {
  users: (state: UsersState) => state.users,
  currentUser: (state: UsersState) => state.currentUser,
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

  setCurrentUser(state: UsersState, currentUser: User) {
    state.currentUser = currentUser;
  },

  resetCurrentUser(state: UsersState) {
    state.currentUser = null;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

