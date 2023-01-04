/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum Cores {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: Cores
}

const pessoa1: Pessoa = {
  nome: "Renan",
  idade: 23,
  corFavorita: Cores.VIOLETA
}

const pessoa2: Pessoa = {
  nome: "Helena",
  idade: 60,
  corFavorita: Cores.VERDE
}

const pessoa3: Pessoa = {
  nome: "Carlos",
  idade: 57,
  corFavorita: Cores.ANIL
}

const pessoa4: Pessoa = {
  nome: "Thiago",
  idade: 31,
  corFavorita: Cores.VERMELHO
}