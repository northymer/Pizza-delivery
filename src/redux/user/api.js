import {ApiGenerator} from "../../api/ApiGenerator";

export const apiRegisterUser = data => ApiGenerator.post('auth/register', data)
export const apiLoginUser = data => ApiGenerator.post('auth/login', data)