/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve as pathResolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const resolve = (path: string) => pathResolve(__dirname, path)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve('src'),
    },
  },
  test: {
    globals: true,
    watch: false,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    resolveSnapshotPath: (testPath, snapExtension) => testPath + snapExtension,
  },
})
