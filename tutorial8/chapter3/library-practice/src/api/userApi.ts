// src/api/userApi.ts
import axios from 'axios';
import { RegisterFormInput } from '../components/RegisterForm'; // 型をインポート

// 送信するデータからconfirmPasswordを除外する
export type UserCreationPayload = Omit<RegisterFormInput, 'confirmPassword'>;

export const createUser = async (userData: UserCreationPayload) => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
  // 実際のAPIでは作成されたユーザー情報が返ってくる
  return data;
};