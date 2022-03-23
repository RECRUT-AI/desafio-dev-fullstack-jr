# Desafio - Desenvolvedor Fullstack Júnior

Desafio desenvolvido para a vaga de Desenvolvedor Fullstack Júnior da Recrut.AI.

## Instruções de instalação

- Ao baixar este repositório, vá, utilizando o terminal, na página raiz (`cd desafio-dev-fullstack-jr`) e instale os pacotes com `npm install`. Isto instalará o concurrency, que facilita rodar back-end e front-end simultaneamente.
- Vá para a pasta frontend (`cd frontend`) e instale os pacotes com `npm install`. Vá para a pasta backend (`cd ../backend`) e utilize novamente `npm install` para instalar os pacotes do servidor.
- Na pasta raiz (`cd ..`), digite o comando `npm run dev` para rodar a aplicação.
- Se houver erros com a tipagem no front-end, vá para a pasta e use o comando `npm install -save -D @types/react` para instalar os tipos do typescript que podem estar faltando.

## Tecnologias

No front-end fiz uso de React com Typescript e no back-end utilizei Node com Express e também com Typescript.

> **Front-end:**
>
> - A estilização foi feita com a biblioteca styled-components e cada elemento da interface é um componente ou faz parte de um componente. Os feedbacks da interação com o servidor são feitos por meio da biblioteca react-toastify. O uso do Typescript permitiu uma desenvolvimento mais bem estruturado, por mais que a codificação das tipagens tome um pouco de tempo;
> - O controle de estado da aplicação (abrir e fechar modal, adicionar, deletar ou editar pets) foi feito com o chamado prop drilling, ou seja, passando funções e variáveis de estado de componentes pais para filhos. A solução não é muito elegante, mas com o tempo curto para a conclusão do desafio a preferi. Para uma implementação futura, a opção mais adequada seria fazer uso da Context API (Redux também é uma opção, mas talvez mais complexo que o necessário para esta aplicação).

> **Back-end:**
>
> - Todos os dados do servidor existem apenas durante sua execução. Como o objetivo é implementar um CRUD e demonstrar seu uso, utilizar um banco de dados não foi tão relevante quanto o desenvolvimento de outras partes da aplicação. Para um posterior desenvolvimento, posso fazer uso do MongoDB (BD não relacional) ou PostgreSQL (BD relacional).

## Funcionamento

![Criação de pet](https://github.com/renoeno/desafio-dev-fullstack-jr/blob/main/images/image1.gif?raw=true)
![Exibição de pet](https://github.com/renoeno/desafio-dev-fullstack-jr/blob/main/images/image2.gif?raw=true)
![Edição de pet](https://github.com/renoeno/desafio-dev-fullstack-jr/blob/main/images/image3.gif?raw=true)
![Exclusão de pet](https://github.com/renoeno/desafio-dev-fullstack-jr/blob/main/images/image4.gif?raw=true)
