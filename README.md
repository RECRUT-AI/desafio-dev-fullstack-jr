# Como utilizar a aplicação

O Backend e Banco de dados estão com deploy realizado no railway.

O Frontend está com deploy realizado na vercel, você pode conferir [aqui](https://desafio-dev-fullstack-odk3zlkul-isaacdalmeida.vercel.app/)

Para utilizar localmente a aplicação você deverá criar um arquivo '.env' com a seguinte chave:

`DATABASE_URL="mysql://user:password@containers-us-west-200.railway.app:porta/nome_schema"`

substitua user e password por seu acesso do mySQL e a porta pela qual porta desejar.

use 'npm start' e 'npm start' em seguida, dessa forma você estará conectado ao banco de dados'

utilize também, no front, 'npm install' e 'npm start', dessa forma será possível iniciar a aplicação, você poderá substituir a url base no arquivo fetchPetsAPI pela url do localhost.

# Desafio - Desenvolvedor Fullstack Júnior
Seja bem-vindo(a)! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato à vaga de Desenvolvedor Fullstack Júnior.

## Instruções do Desafio
- Faça um fork deste repositório;
- O conjunto mínimo de tecnologias a serem utilizadas são: HTML, CSS e JavaScript no front-end e alguma das tecnologias back-end informadas na proposta desse desafio;
- Crie um passo a passo de como rodar a sua aplicação;
- Após finalizar, submeta um pull request com um comentário informando o seu e-mail de contato e aguarde nossa avaliação.

## Proposta
Você deverá desenvolver um projeto no padrão MVC utilizando Node.js com a finalidade de que seja possível listar, visualizar, criar, editar e excluir animais de estimação de uma petshop.
> **Observações:**
> - Você pode utilizar a estratégia que considerar pertinente para armazenar os registros de sua aplicação;
> - Cada animal de estimação precisa ter um identificador único, nome, idade, se é gato ou cachorro e sua respectiva raça; Além do nome e telefone para contato de seu dono.

## Diferenciais
Serão considerados diferenciais o uso de qualquer tipo de framework utilizados no front-end (utilizamos ReactJS por aqui) ou no back-end da aplicação.
