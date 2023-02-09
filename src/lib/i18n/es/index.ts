import type { Translation } from '../i18n-types';
import en from '../en';

const es: Translation = {
	message: 'Hola Munda'
};

export default {
	...en as Translation,
	...es
};
