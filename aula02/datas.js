const { DateTime, Interval } = require('luxon');

const agora = DateTime.now();
// console.log(agora);
// console.log(agora.month);

// console.log(new Date().getMonth()); // retorna 0 como o mês 1 na versão nativa do js
// console.log(new Date().getDate()); // dia do mês
// console.log(new Date().toLocaleString()); // retorna a data e hora formatada no padrão do sistema
// console.log(new Date().toLocaleString('pt-BR')); // retorna a data e hora formatada no padrão brasileiro

const dataDoAniversario = DateTime.fromFormat('15/08/1994', 'dd/MM/yyyy');
// console.log(dataDoAniversario);
console.log(dataDoAniversario.day);
console.log(dataDoAniversario.month);

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length('year');
console.log(Math.floor(idade));

const isoDate = '2020-11-19T21:22:00-0300';
const RFC = 'Thu, 19 Nov 2020 21:22:00 -0300';

console.log(DateTime.fromISO(isoDate).toLocaleString());
console.log(DateTime.fromRFC2822(RFC).toLocaleString());
