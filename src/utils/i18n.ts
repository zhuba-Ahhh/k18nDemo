// --------

import K18nUtils from '@k18n/k18n-utils';
import { K18nMessages } from '@k18n/k18n-utils/lib/types';

const country: string = localStorage.getItem('langType') || 'en';
const lang = (() => {
    switch (country) {
        case 'zh':
            return 'zh';
        case 'es':
            return 'es';
        case 'pt':
            return 'pt-BR';
        case 'id':
            return 'id';
        case 'en':
        default:
            return 'en';
    }
})();

// k18n
let k18n: any;
// 实例化K18n
export function createK18n(message: K18nMessages) {
    if (k18n) return k18n;
    // 实例化K18n
    k18n = new K18nUtils({
        messages: message,
        locale: lang,
		fallbackLocale: '' // 默认回退到英文
    });
	console.log(k18n, 'k18n');

    return k18n;
}

// 做了一些处理便于使用
export const $k18n = (params: string | { text?: string; key?: string; id?: string; desc?: string; params?: Record<string, any> }): string => {
    if (typeof params === 'string') {
        return k18n.getText({
            text: params,
        });
    }
    return k18n.getText(params);
};

export const changeLocale = (lang: string) => {
    k18n.changeLocale(lang);
}