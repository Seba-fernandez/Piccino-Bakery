import { defineConfig } from 'astro/config';

// CSS en línea: una petición menos antes del primer pintado (el CSS pesa ~15KB sin comprimir).
export default defineConfig({ build: { inlineStylesheets: 'always' } });
