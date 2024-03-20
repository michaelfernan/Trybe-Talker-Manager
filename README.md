# Talker-Manager

## Descrição
Este projeto é parte da avaliação do curso de Desenvolvimento Web da Trybe, onde o objetivo é construir uma API para o gerenciamento de palestrantes. A API permite criar, visualizar, editar e excluir informações de palestrantes, além de implementar um sistema de autenticação.

## Requisitos do Projeto

### 1. Endpoint GET /talker
- Retorna todas as pessoas palestrantes cadastradas.
- Se não houver palestrantes, retorna um array vazio.

### 2. Endpoint GET /talker/:id
- Retorna uma pessoa palestrante com base no ID.

### 3. Endpoint POST /login
- Recebe `email` e `password` e retorna um token aleatório de 16 caracteres.

### 4. Validações para Endpoint /login
- Valida os campos recebidos e retorna erros específicos se forem inválidos.

### 5. Endpoint POST /talker
- Adiciona um novo palestrante ao sistema.

### 6. Endpoint PUT /talker/:id
- Atualiza os dados de um palestrante com base no ID.

### 7. Endpoint DELETE /talker/:id
- Remove um palestrante com base no ID.

### 8. Endpoint GET /talker/search?q=searchTerm
- Retorna palestrantes com base em um termo de busca.

## Tecnologias Utilizadas
- Node.js
- Express
- JWT (para autenticação)

## Objetivos de Aprendizado
- Construir uma API RESTful.
- Implementar operações CRUD.
- Praticar a criação de rotas com Express.
- Utilizar JWT para autenticação.

## Desenvolvimento
- A API deve ser desenvolvida em Node.js, seguindo as boas práticas e padrões de codificação.
- A atenção aos detalhes dos requisitos e a funcionalidade de cada endpoint são cruciais.

## Contribuições
Este projeto é uma avaliação individual e destina-se a avaliar as habilidades pessoais no desenvolvimento de APIs. Portanto, contribuições diretas de terceiros não são aplicáveis.

## Notas Adicionais
- Mantenha o foco nas regras de negócio e validações conforme os requisitos.
- A API deve ser consistente e bem estruturada para facilitar a manutenção e futuras atualizações.

---

⚠️ **Lembrete:** A adesão rigorosa aos requisitos e às diretrizes de codificação é essencial para o sucesso neste projeto.
