# Introdução a testes unitários com angular.
Aplicação com material desenvolvido durante a talk de Introdução a testes unitários com angular para a comunidade angular SP.

[Link dos slides da talk](https://docs.google.com/presentation/d/1i_aB7y7RomelELawvJc728CBVBCvwG9s/edit?usp=sharing&ouid=103717272821556071892&rtpof=true&sd=true)
## Estrutura dos testes

### describe

Primeira coisa definimos os describes.
Sempre vai ser responsavel por agrupar os testes

### IT

Segundo ponto é definirmos os its, o it agrupa e define um unico teste, é ele onde ira conter a logica do teste

**dica**: podemos usaros os describes para agrupar e organizar os its.

### Expect

Terceira coisa definimos o expect (expectativa) ou seja, ao testarmos qual nossa expectiva de retorno ? Qual resultado devemos esperar ? a expectativa ira conter o resultado que a funcao ira retornar ao ser executada naquele cenario de teste por exemplo.

como boa pratica é ideal ter apenas um expect para um it, ou seja apenas um resultado esperado.

## Arrange, action e assert

Em testes devemos sempre definir 3 coisas:
1 - Definir a organização de tudo que iremos ultilizar para realizar aquele teste
2 - Definir uma ação que ira de fato executar nosso teste
3 - Definir qual o resultado que iremos resperar.

## BeforeEach

Ultilizamos a funcao beforeEach para configurar algumas pré definições que nosso código pode ter.

O BeforeEach é rodado antes de cada It por isso ultilizamos ele para inicializarmos algumas configuracoes importantes do nosso teste.

## TestBed

Faz parte do modulo de testes do angular e ele nos ajuda a simular todo um ambiente angular para que a gente consiga realizar o teste do nosso componente de forma isolada do resto da nossa apliacacao.

## Fixture

fixture = a instância do seu componente contido em um tipo ComponentFixture

Este é um tipo de utilitário que ajuda a obter acesso a tudo o que você precisa sobre o componente:

- A instância do componente
- O elemento Debug que permite consultar o DOM
- Acione o ciclo de detecção de mudança

## Mocks

Mocks nos ajudam a garantir que estamos testando uma unidade de forma isolada.

Mock permite simular uma dependência que a unidade precisa para funcionar de forma completa.

Tipos de mock:

- Dummies: objeto para ocupar uma dependência;
- Stubs: objeto que tem um comportamento controlável, definimos nele o retorno necessário para completar o cenário que estamos testando;
- Spies: objeto que rastreia quais métodos deles foram chamados, com quais argumentos e quantas vezes, usamos ele para garantir que o comportamento esperado da unidade está sendo executado;
- True mocks: objeto que usamos para saber se foi utilizado de uma forma bem específica (se determinado método foi chamado, quais argumentos, quais não deveriam ser chamados, etc), são mais complexos de montar mas ajudam a garantir o comportamento esperado.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
