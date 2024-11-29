import { RequestParams, ContentType, Method } from 'axios-mapper'
import {RootObject} from "../model/rootObject.ts";
import {LoginModel} from "../views/login/model/loginModel.ts";
import {UserInfoModel, Users} from "../model/userModel.ts";
import https from "../utils/https.ts";

export const loginRequest = (userInfo: RequestParams) => {
  return https(false).request<RootObject<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}

export const userInfoRequest = () => {
  return https().request<RootObject<UserInfoModel>>('user/userInfo', Method.GET, undefined, ContentType.form)
}

export const getUsers = (user: any) => {
  return https().request<RootObject<Users>>('user/getUsers', Method.GET, user, ContentType.form)
}
