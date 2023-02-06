import type { Handle } from '@sveltejs/kit';
 
export const handle = (async ({ event, resolve }) => {
  // TODO: get lang from header...
  // TODO: get lang from cookie...
  event.locals.lang = (event.request.headers.get('Accept-Language') || '').split(',')[0];

 
  return resolve(event);
}) satisfies Handle;