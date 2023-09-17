import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "vue";
import { i18nVue } from 'laravel-vue-i18n';
import router from '@/router/index.js'
import CompaniesIndex from '@/components/companies/CompaniesIndex.vue'

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
