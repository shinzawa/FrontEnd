import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // テスト環境としてjsdomを指定
    setupFiles: "./vitest.setup.ts", // セットアップファイルへのパス
  },
});
