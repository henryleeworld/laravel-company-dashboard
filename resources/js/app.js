import './bootstrap';

import Alpine from 'alpinejs';
import CompaniesIndex from '@/components/companies/CompaniesIndex.vue'
import { createApp } from "vue";
import { i18nVue } from 'laravel-vue-i18n';
import router from '@/router/index.js'

window.Alpine = Alpine;

Alpine.start();

createApp({
    components: {
        CompaniesIndex
    }
}).use(router).use(i18nVue, {
    resolve: async lang => {
        const langs = import.meta.glob('../../lang/*.json');
            return await langs[`../../lang/${lang}.json`]();
        }
}).mount('#app')
