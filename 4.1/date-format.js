const moment = require('moment');

const now = moment();

console.log('Формат 1 (DD-MM-YYYY):', now.format('DD-MM-YYYY'));
console.log('Формат 2 (MMM Do YY):', now.format('MMM Do YY'));
console.log('Формат 3 (dddd):', now.format('dddd'));