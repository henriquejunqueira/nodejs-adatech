const path = require('node:path');
const fs = require('node:fs');
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.NODE_ENV);

const filePath = path.join(process.cwd(), 'aula01', 'texto.txt');
const fileOutPath = path.join(process.cwd(), 'aula01', 'texto-com-linhas.txt');
// console.log(filePath);

// console.time('Manipular arquivos');
console.time('Leitura do arquivo');

fs.readFile(filePath, {}, (erro, dados) => {
  if (erro) {
    // console.log(`Erro na leitura do arquivo no caminho ${filePath}`);
    console.error(`Erro na leitura do arquivo no caminho ${filePath}`);
    return;
  }

  const texto = dados.toString();
  const linhas = texto.split('\n');

  //   linhas.forEach((linha, index, arrayDeLinhas) =>
  //     console.log(`${index + 1} - ${linha}`)
  //   );

  const linhasAjustadas = linhas.map(
    (linha, index, arrayDeLinhas) => `${index + 1} - ${linha}`
  );

  //   console.log(dados.toString());

  fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro) => {
    if (erro) {
      // console.log(`Erro na leitura do arquivo no caminho ${fileOutPath}`);
      console.error(`Erro na leitura do arquivo no caminho ${fileOutPath}`);
    }

    console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`);
    // console.timeEnd('Manipular arquivos');
    console.timeEnd('Leitura do arquivo');
  });
});
