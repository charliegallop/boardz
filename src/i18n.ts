import i18next from 'i18next';

const en_common = {
	message: 'hello world'
};

const es_common = {
	message: 'Hola Mundo'
};

export const defaultNS = 'common';
export const resources = {
	en: {
		common: en_common
	},
	es: {
		common: es_common
	}
} as const;

i18next.init({
	// TODO: use a language detector...
	lng: 'es',
  fallbackLng: 'en',
	debug: true,
	ns: [defaultNS],
	defaultNS,
	resources
});
