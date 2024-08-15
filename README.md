# JusCash-Back-end
## API Documentation
API do backend do JusCash, responsável por gerenciar a autenticação de usuários, operações relacionadas a leads, e outras funcionalidades essenciais do sistema.
Esta API oferece endpoints seguros utilizando JWT para proteger dados sensíveis e garantir que apenas usuários autenticados possam acessar determinadas operações

### Base URL

`http://localhost:3322/api`

### Authentication

API utiliza autenticação baseada em JWT (JSON Web Token). Para acessar as rotas protegidas, é necessário incluir o token de autenticação no cabeçalho das requisições.

Exemplo de Cabeçalho de Autenticação:

`[Authorization: Bearer <seu_token_jwt>]`

### Overview
Esta API foi desenvolvida para gerenciar usuários e leads, permitindo a criação, atualização e consulta de leads, além de funcionalidades de autenticação de usuários.


`http://localhost:3322/api`

Authentication
A API utiliza autenticação baseada em JWT (JSON Web Token). Para acessar as rotas protegidas, é necessário incluir o token de autenticação no cabeçalho das requisições.

Exemplo de Cabeçalho de Autenticação:

`Authorization: Bearer <seu_token_jwt>`

### **Endpoints**
#### 1. Autenticação.

   * Login de Usuário: Autentica o usuário e retorna um token JWT. 
     * Método: `POST: /auth/login`

Parâmetros de Requisição:

**email:** string (obrigatório) - Email do usuário.

**password:** string (obrigatório) - Senha do usuário.
> Exemplo de Requisição:

```
curl -X POST "http://localhost:3322/api/auth/login" \
-H "Content-Type: application/json" \
-d '{
  "email": "exemplo@email.com",
  "password": "suaSenha"
}'
```

> Resposta de Sucesso:
```
{
  "authorization": "<seu_token_jwt>"
}
```
> Respostas de Erro:
`500 Internal Server Error: Erro ao fazer login.`

#### 2. Usuários
* Criar Usuário: Cria um novo usuário.
    * Método: `POST: /user`
> Parâmetros de Requisição:

**name**: string (obrigatório) - Nome do usuário.

**email**: string (obrigatório) - Email do usuário.

**password**: string (obrigatório) - Senha do usuário.

> Exemplo de Requisição:
```
curl -X POST "http://localhost:3322/api/user" \
-H "Content-Type: application/json" \
-d '{
  "name": "Nome do Usuário",
  "email": "usuario@email.com",
  "password": "suaSenha"
}'
```
>Resposta de Sucesso: `201 Created: Usuário criado com sucesso.`

> Respostas de Erro: `500 Internal Server Error: Erro ao criar usuário.`

#### 3. Leads

* Criar Lead: Cria um novo lead. Necessita de autenticação. 
    * Método: `POST: /lead`
> Parâmetros de Requisição:

**name**: string (obrigatório) - Nome do lead.

**email**: string (obrigatório) - Email do lead.

**phone**: string (obrigatório) - Telefone do lead.
> Exemplo de Requisição:
```
curl -X POST "http://localhost:3322/api/lead" \
-H "Authorization: Bearer <seu_token_jwt>" \
-H "Content-Type: application/json" \
-d '{
  "name": "Nome do Lead",
  "email": "lead@email.com"
  "phone": "Telefone do Lead"
}'
```
>Resposta de Sucesso:
```
{
  "id": 1,
  "name": "Nome do Lead",
  "email": "lead@email.com"
}
```
>Respostas de Erro:
`500 Internal Server Error: Erro ao criar lead.`


* Obter Lead por ID: Obtém um lead específico por ID. Necessita de autenticação. 
  * Método: `GET: /lead/:id`

> Parâmetros de Requisição:

**id**: number (obrigatório) - ID do lead.

> Exemplo de Requisição:
```
curl -X GET "http://localhost:3322/api/lead/1" \
-H "Authorization: Bearer <seu_token_jwt>"
```
>Resposta de Sucesso:
```
{
  "id": 1,
  "name": "Nome do Lead",
  "email": "lead@email.com"
}
```
>Respostas de Erro: `500 Internal Server Error: Erro ao buscar o lead.`

## Como executar a aplicação

1. Clone o repositório para a sua máquina.
   1. Use a versão do node que seja ***≥v16.13.0***.
2. Instale as dependências utilizando o comando `npm install`.
3. Gere Prisma Client com o comando `npx prisma generate`
3. Execute as migrações do banco de dados utilizando o comando `npx prisma migrate dev`.
4. Inicie a aplicação utilizando o comando `npm run dev`.
5. Acesse a aplicação através do endereço `http://localhost:3322/api`.
