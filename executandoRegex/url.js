const texto =
    'http://www.uol.com.br www.terra.com.br https://mwg.art.br https://www.mwg.art.br'
// const regex = /(http:\/\/)?(www\.)?\w+.\w{2,}(\.\w{2,})?/

console.log(texto.match(/(https?:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2,})?/g))
