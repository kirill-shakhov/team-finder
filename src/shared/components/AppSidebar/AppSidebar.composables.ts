import { Ref, ref } from 'vue';
import { isAlphabeticString, isNumericString } from '@/helpers';
import { RootState, useStore } from '@/store';
import debounceFn from 'debounce-fn';
import { Store } from 'vuex';
import { User } from '@/services/api/controllers';


export function useAppSidebar() {

  const store: Store<RootState> = useStore();
  const inputSearchValue: Ref<string> = ref('');
  const errorMessage: Ref<string> = ref('');
  const users: Ref<User[] | null> = ref(null);
  const currentUser: Ref<User | null> = ref(null);
  const loading: Ref<boolean> = ref(false);

  const validateInput = (str: string): boolean => {
    str = str.trim();

    if (str.trim() === '') return true;
    const values: string[] = str.split(/[, ]+/);
    return values.every((value: string): boolean => isNumericString(values[0]) ? isNumericString(value) : isAlphabeticString(value));
  };

  const collectData = (str: string): string => {
    const values: string[] = str.trim().split(/[, ]+/);
    const paramType: string = isNumericString(values[0]) ? 'id' : 'username';
    return values.reduce((acc: string, value: string, index: number): string => `${acc}${index > 0 ? '&' : ''}${paramType}=${value}`, '');
  };

  const getUsers = async (query: string) => {
    loading.value = true;
    await store.dispatch('users/getUsers', query);

    users.value = store.getters['users/users'];
    loading.value = false;
  };

  const debouncedGetUsers = debounceFn(getUsers, { wait: 300 });

  const handleInputChange = async () => {
    errorMessage.value = '';
    debouncedGetUsers.cancel();

    if (inputSearchValue.value.trim() === '') {
      store.commit('users/resetUsers');
      store.commit('users/resetCurrentUser');
      users.value = null;
      currentUser.value = null;
      return;
    }

    if (validateInput(inputSearchValue.value)) {
      const params = collectData(inputSearchValue.value);
      await debouncedGetUsers(params);
    } else {
      errorMessage.value = 'Допустим ввод только id или username';
    }
  };


  return {
    inputSearchValue,
    errorMessage,
    users,
    currentUser,
    loading,

    handleInputChange,
  };

}