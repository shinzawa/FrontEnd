import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { createUser, UserCreationPayload } from '../api/userApi';

const RegisterSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // エラーメッセージをconfirmPasswordフィールドに関連付ける
});

// Zodスキーマから型を推論
export type RegisterFormInput = z.infer<typeof RegisterSchema>;
function RegisterForm() {
  // React Hook Formの設定
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, // isSubmittingを追加
    reset, // フォームをリセットする関数
  } = useForm<RegisterFormInput>({
    resolver: zodResolver(RegisterSchema),
  });

  // TanStack QueryのuseMutationの設定
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log('User created successfully:', data);
      alert('User registration successful!');
      reset(); // 成功したらフォームをリセット
    },
    onError: (error) => {
      console.error('Failed to create user:', error);
      alert(`Error: ${error.message}`);
    },
  });

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<RegisterFormInput> = (data) => {
    // confirmPasswordを除外してAPIに渡す
    const { confirmPassword, ...payload } = data;
    mutation.mutate(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>User Registration</h2>

      <div>
        <label htmlFor="username">Username</label>
        <input id="username" {...register('username')} />
        {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
      </div>

      {/* サーバーからのエラーを表示 */}
      {mutation.isError && (
        <p style={{ color: 'red' }}>{mutation.error.message}</p>
      )}

      <button type="submit" disabled={isSubmitting || mutation.isPending}>
        {isSubmitting || mutation.isPending ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}

export default RegisterForm;