import { createStore, createLogger } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import { store as app, AppStore, AppState } from './modules/app'
import { store as permission, PermissionStore, PermissionState } from './modules/permission'
import { store as user, UserStore, UserState } from './modules/user'

export interface RootState {
    app: AppState
    permission: PermissionState
    user: UserState
}

export type Store = AppStore<Pick<RootState, 'app'>>
    & PermissionStore<Pick<RootState, 'permission'>> & UserStore<Pick<RootState, 'user'>>

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []
// Plug in session storage based persistence
// plugins.push(createPersistedState({ storage: window.sessionStorage }))

export const store = createStore({
    plugins,
    modules: {
        app,
        permission,
        user
    }
})

export function useStore(): Store {
    return store as Store
}
