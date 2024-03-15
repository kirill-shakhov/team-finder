import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import { RootState } from './rootStore.types.ts';
import { usersStore } from '@/store/modules/usersStore';


export const rootStoreKey: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
    modules: {
        users: usersStore
    }
})

export function useStore () {
    return baseUseStore(rootStoreKey)
}
