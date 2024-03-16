import { Store } from 'vuex';
import { RootState, useStore } from '@/store';
import { User } from '@/services/api/controllers';
import { Ref, ref } from 'vue';

export function useSearchResultsList() {
  const store: Store<RootState> = useStore();
  const selectedUser: Ref<number> = ref(-1);
  const handleClickOption = (index: number, user: User) => {
    selectedUser.value = index;
    store.commit('users/setCurrentUser', user);
  };

  return {
    handleClickOption,
    selectedUser,
  };
}