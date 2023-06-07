## Boas-vindas ao repositório do Playground Functions

<details>
<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

No time de desenvolvimento, fiquei responsável por implementar o código de funções que resolvem problemas com respostas pré-determinadas. 
Foi utilizado lógica de programação para ajudar na análise de cada problema e resposta esperada, facilitando a implementação do código de cada uma das funções.

</details>

<details>
<summary><strong>Para rodar localmente</strong></summary><br />

1. Clone o repositório

   * Use o comando: `git clone git@github.com:ligiabicalho/javascript-functions.git`
   * Entre na pasta do repositório que você acabou de clonar:
     * `cd javascript-functions`

2. Instale as dependências

   * `npm install`

</details>

<details>
<summary><strong>Linter</strong></summary><br />

Foi usado o [ESLint](https://eslint.org/) para fazer a análise estática do código e garantir boas práticas.

</details><br />

## Requisitos

### 1 - Crie uma função que divida uma frase

<details>
<summary>Implemente a função <code>splitSentence</code> que divide uma frase de acordo com a quantidade de palavras</summary> <br />

A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas.
  
Exemplo: se a função receber a string `'go Trybe'`, o retorno deverá ser `['go', 'Trybe']`.
</details>

### 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

<details>
<summary>Implemente a função <code>footballPoints</code> que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates</summary> <br />

A função `footballPoints` recebe o número de vitórias (`wins`) e o número de empates (`ties`) e retorna a quantidade de pontos que o time marcou em um campeonato. Para isso, considere que:

* `wins`: é o número de vitórias e vale 3 pontos
  
* `ties`: é o número de empates e vale 1 ponto

</details>

### 3 - Crie uma função que adiciona músicas em uma playlist

<details>
<summary>Implemente a função <code>addMusics</code> que adiciona músicas a uma playlist</summary> <br />

A função `addMusics` recebe o nome do artista (`artistName`), o nome da música (`musicName`) e o tempo da música (`musicTime`). Após trabalhar esses dados, eles deverão ser armazenados em um array chamado `playlist`. Para isso, considere que:

* Os valores acima devem ser enviados ao array, juntos, em formato de objeto.

</details>

### 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria

<details>
<summary>Implemente a função <code>moreExpensive</code> que deverá retornar uma string contendo qual é o produto mais caro de acordo com uma categoria que será passada como parâmetro.</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/mcDonalds.js`

A função `moreExpensive` deve receber a base de dados a ser trabalhada (`data`) e a categoria (`category`) do produto.

A função deve retornar uma string contendo o produto mais caro da seguinte forma:

>O produto mais caro é: `nome do produto`, que custa: R$`preço do produto`.

O preço do produto deverá ser apresentado contendo 2 casas decimais.

</details>

### 5 - Crie uma função que verifica se um determinado item já existe

<details>
<summary>Implemente a função <code>checkItem</code> que deverá retornar se um determinado item existe ou não na base de dados</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/mcDonalds.js`

A função `checkItem` deve receber a base de dados a ser trabalhada (`data`), a categoria (`category`) do produto e o produto a ser buscado (`item`).

A função deve retornar `true` caso o produto já exista na base de dados ou `false` caso não exista.

</details>

### 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

<details>
<summary>Implemente a função <code>addNewItem</code> que deverá adicionar um novo item caso esse item não exista na base de dados</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/mcDonalds.js`

A função `addNewItem` deve receber a base de dados a ser trabalhada (`data`), a categoria (`category`) do produto, o produto a ser buscado (`item`) e as outras informações de um item: `price`, `ingredients` e `calories`.

* A função deve retornar o novo item caso o produto ainda não exista na base de dados

* Caso o item não exista, ele deve ser criado e adicionado à base de dados

* Caso o item já exista, a função deve retornar a mensagem: `O produto: "nome do produto" já existe!`

</details>

### 7 - Crie uma função que conta a quantidade de pessoas por gênero

<details>
<summary>Implemente a função <code>counterGender</code> que deverá contar quantas pessoas existem na base de dados por gênero</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/data.json`

A função `counterGender` deve receber a base de dados a ser trabalhada (`data`) e retornar a quantidade de pessoas do gênero `male` e `female`.

A função deve retornar as informações no formato de objeto conforme o exemplo:

```js
{
  male: 10,
  female: 15
}
```

</details>

### 8 - Crie uma função que retorna os elementos de um determinado estado

<details>
<summary>Implemente a função <code>filterState</code> que deverá retornar todos os elementos que forem de um determinado estado</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/data.json`

* A função `filterState` deve receber a base de dados a ser trabalhada (`data`) e o estado a ser filtrado (`state`).

* A função deve retornar um novo array contendo todos os elementos que são do estado filtrado.

</details>

### 9 - Crie uma função que altera a propriedade `picture`

<details>
<summary>Implemente a função <code>changePicture</code> que deverá alterar a propriedade "picture" de todos os elementos da base de dados</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/data.json`

* A função `changePicture` deve receber a base de dados a ser trabalhada (`data`) e o link (`link`) a ser colocado no valor atual da propriedade;

* O valor da propriedade "picture" que deve ser colocado em todos os elementos é: `https://picsum.photos/200/300`;

* A função deve retornar um novo array contendo todos os elementos transformados.

</details>

### 10 - Crie um função que gera um relatório

<details>
<summary>Implemente a função <code>generateReport</code> que deverá gerar um relatório em forma de objeto, de várias informações da base de dados</summary> <br />

👉 Para esse exercício, utilize a base de dados do arquivo `src/data.json`

* A função `generateReport` deve receber a base de dados a ser trabalhada (`data`);

* A função `generateReport` deve retornar um objeto com várias informações:
  * `totalGuests`: valor total de pessoas convidadas. O valor deve ser um `number`;
  * `totalGender`: quantidade de pessoas por gênero. O valor deve ser um `object`;
  * `avgAge`: média de idade das pessoas. O valor deve ser um `number` com 2 casas decimais;
  * `countries`: array com todos os países representados.
    * Este array não pode conter valores repetidos - Pesquise sobre `Array.includes()`;
    * Este array deve estar ordenado em ordem alfabética (A-Z) - Pesquise sobre `Array.sort()`.

Exemplo de saída:

```js
{
  totalGuests: 104,
  totalGender: {
    male: 49,
    female: 55
  },
  avgAge: 32.94,
  countries: [
      'Albania',
      'Algeria',
      'Anguilla',
      'Argentina',
      'Aruba',
      'Azerbaijan',
      'Bahrain',
      'Bangladesh',
      'Benin',
      'Bermuda',
      'Bolivia',
      'Botswana',
      'Bouvet Island',
      'Brazil',
      ...
    ]
}
```
</details>
