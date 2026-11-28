// Node.js 24+. Supply an integration token with channels.permissions.read
// and share the channel with that application in the server settings.
import {randomUUID} from 'node:crypto';
const {NATTER_SERVER, NATTER_TOKEN, NATTER_CHANNEL, NATTER_USER} = process.env;
if (![NATTER_SERVER, NATTER_TOKEN, NATTER_CHANNEL, NATTER_USER].every(Boolean))
  throw Error('Set NATTER_SERVER, NATTER_TOKEN, NATTER_CHANNEL and NATTER_USER.');
const server = new URL(NATTER_SERVER);
if (server.protocol !== 'https:' || server.username || server.password || server.search || server.hash)
  throw Error('Use your trusted HTTPS server address, including any installation path.');
const endpoint = server.href.replace(/\/$/, '') + '/v1/integrations/channels/' +
  encodeURIComponent(NATTER_CHANNEL) + '/permissions/inspect';
const response = await fetch(endpoint, {
  method: 'POST',
  redirect: 'error',
  headers: {
    Authorization: 'Bearer ' + NATTER_TOKEN,
    'Content-Type': 'application/json',
    'Idempotency-Key': randomUUID()
  },
  body: JSON.stringify({user: NATTER_USER, permission: 'channel.name'})
});
if (!response.ok) throw Error('Permission inspection returned HTTP ' + response.status);
console.log(JSON.stringify(await response.json(), null, 2));
