import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhDoArquivo, encoding);
        console.log(chalk.green(texto));

    } catch(erro) {
        trataErro(erro);
    }
}

    //function pegaArquivo(caminhDoArquivo) {
//    const encoding = 'utf-8';
//   fs.readFile(caminhDoArquivo, encoding, (erro, texto) => {
//        if (erro) {
//            trataErro(erro);
//      }
//        console.log(chalk.green(texto))
//    } ) 
//}

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/')