// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
// // https://vite.dev/config/
// export default defineConfig({
//   esbuild: {
//     ignoreAnnotations: true
//   },
//   build: {
//     rollupOptions: {
//       onwarn(warning, warn) {
//         if (warning.code !== 'UNUSED_EXTERNAL_IMPORT') warn(warning);
//       },
//     }
//   },
//   plugins: [react() , TanStackRouterVite()],
// })
//
//
//
//


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  esbuild: {
    ignoreAnnotations: true,
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code !== 'UNUSED_EXTERNAL_IMPORT') warn(warning);
      },
    },
  },
  plugins: [react(), TanStackRouterVite()],
  base: '/', 
});
