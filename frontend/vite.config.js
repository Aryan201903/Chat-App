export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://chat-app-backend-tpep.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Ensure this is set to the correct output directory
    sourcemap: true, // Useful for debugging in production
  },
});
