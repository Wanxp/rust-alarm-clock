import { getToken } from '../../../utils/cookies'

export interface UserState{
    token: string
    name: string
    avatar: string
    introduction: string
    roles: string[]
    email: string
}

export const state: UserState = {
  token: getToken() || '123',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  email: ''
}
