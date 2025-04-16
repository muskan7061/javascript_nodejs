const { Buffer } = require('node:buffer');

const buf = Buffer.from('hello world', 'utf8');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));


console.log(Buffer.from('fhqwhgads', 'utf8'));

console.log(Buffer.from('fhqwhgads', 'utf16le'));

