const dns = require('node:dns');

// const searchedUrl = 'google.com';

// const ipv4 = dns.resolve4(searchedUrl, (err, addresses) => {
//   if (err) {
//     console.log('url não encontrada');
//     return;
//   }

//   console.log(addresses);
// });

// dns.resolve4(searchedUrl, (err, addresses) => {
//   if (err) {
//     console.log('url não encontrada');
//     return;
//   }

//   console.log(addresses);
// });

// console.log(ipv4);

// const addresses = await dns.promises.resolve4(searchedUrl);

async function bootstrap() {
  const searchedUrl = 'google.com';

  console.time('pesquisando url por DNS padrão');
  const addresses = await dns.promises.resolve4(searchedUrl);
  console.timeEnd('pesquisando url por DNS padrão');
  console.log(addresses);

  const nameServers = await dns.promises.resolveNs(searchedUrl);
  console.log(nameServers);

  const ipNS = await dns.promises.resolve4(nameServers[1]);

  const resolver = new dns.Resolver();
  //   resolver.setServers([nameServers[1] ?? 'ns1.google.com']);
  resolver.setServers(ipNS);

  console.time('pesquisando url por DNS específico');

  //   resolver.resolve4(searchedUrl);
  resolver.resolve4(searchedUrl, (error, addresses) => {
    if (error) {
      console.error('Não foi possível encontra ipv4');
    }

    console.timeEnd('pesquisando url por DNS específico');
    console.log(addresses);
  });
}

bootstrap();
