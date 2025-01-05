const crypto = require('node:crypto');

// const chave = crypto.randomBytes(12).toString('hex');
// const chave = crypto.randomBytes(12).toString('base64');
const chave = crypto.randomBytes(4).toString('base64');
console.log(chave);

const uuid = crypto.randomUUID();
console.log(uuid);

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

console.log(privateKey);
console.log(publicKey);
