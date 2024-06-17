import { defineConfig } from '@vue/cli-service';

export default defineConfig({
    devServer: {
        proxy: {
            '/api': {
                target: 'http://14.225.255.190:8081',
                changeOrigin: true
            }
        }
    }
});