import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';  // Using SWC compiler plugin for React
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// Set the base URL for production; adjust '/rithvik/' to match your GitHub repo name
const base = process.env.NODE_ENV === 'production' ? '/rithvik/' : '/';

export default defineConfig(({ mode }) => ({
  base,  // Add the base configuration here
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), // SWC plugin for React
    mode === 'development' && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
