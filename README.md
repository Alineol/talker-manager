# Boas Vindas ao Talker Manager!!!

## Descrição

O Talker Manager é uma API de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes.

## Habilidades desenvolvidas no projeto

- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.
 
 ## Tecnologias utilizadas
 
* Node.js
* Postman

## Bibliotecas utilizadas

* Express

Para iniciar a aplicação: `npm run dev


# Comandos para rodar o projeto na sua máquina

<details>
  <summary><strong>:whale: Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 
  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `talker_manager`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it talker_manager bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`

  :eyes: **De olho nas dicas:** 
  1. Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  2. O avaliador espera que a versão do `node` utilizada seja a 16.
  
  
Para iniciar a aplicação: `npm run dev`

</details>

## Rotas criadas

Foram criados os seguintes endpoints:
- GET /talker
- GET /talker/:id
- POST /login
- POST /talker
- PUT /talker/:id
- DELETE /talker/:id
- GET /talker/search?q=searchTerm






