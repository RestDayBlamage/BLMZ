import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to '/BLMZ/' if deploying to the /BLMZ/ subdirectory; use '/' for root deployment
  base: '/BLMZ/'
})
