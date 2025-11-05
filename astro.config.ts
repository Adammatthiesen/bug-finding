/// <reference types="@studiocms/ui/v/types" />
// @ts-check
import { defineConfig } from 'astro/config';
import ui from '@studiocms/ui';

// https://astro.build/config
export default defineConfig({
    integrations: [
        ui()
    ]
});
